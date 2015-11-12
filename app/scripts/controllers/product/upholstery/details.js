
angular.module('employeeApp')
.controller('ProductUpholsteryDetailsCtrl', ['$scope', 'Upholstery', '$routeParams', '$mdToast', '$location', '$timeout', 'FileUploader', 'ProductSupply', '$mdDialog', 'Notification',
function ($scope, Upholstery, $routeParams, $mdToast, $location, $timeout, FileUploader, ProductSupply, $mdDialog, Notification) {
	
	$scope.updateLoopActive = true;
	var timeoutPromise;
	
    $scope.uphol = Upholstery.get({'id': $routeParams.id}, function () {
		$scope.safeApply(function () {
			$scope.updateLoopActive = false;
		});
    });    
	$scope.supplies = ProductSupply.query({'product__id': $routeParams.id}, function () {
	});
    
	
    //Upload Image
    $scope.upload = function () {
        //Notify of uploading image        
		var promise = FileUploader.upload($scope.images[0], "/api/v1/upholstery/image/");
			promise.then(function (dataObj) {
				$mdToast.show($mdToast.simple()
					.position('top right')
					.hideDelay(3000)
					.content('File was uploaded.'));

				$scope.uphol.image = dataObj.data;
				
				$scope.update();
		}, function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(0)
				.content('There was an error uploading the file'));
		});
		/*
        fd.append('image', $scope.images[0]);
		jQuery.ajax("/api/v1/upholstery/image", {
			type: 'POST',
			data: fd,
			cache: false,
			processData: false,
			contentType: false,
			success: function (responseData) {
				Notification.display('Image Updated');
				$scope.uphol.image = {};
				angular.copy(responseData, $scope.uphol.image);
				$scope.uphol.$update();
				$scope.imagePreviews = null;
				$scope.images = null;
				$scope.$apply();
			}
		});*/
	};
    
	//Supply total
	$scope.supplyTotal = function () {
		var total = 0;
		for(var i = $scope.supplies.length; i--;) {
			total += Number($scope.supplies[i].cost);
		}
		
		return total;
	};
	
	/* 
	 * Dialog to add a new product supply
	 */
	$scope.showAddProductSupply = function () {
		$scope.supply = new ProductSupply();
		$scope.supply.product = $scope.uphol;
		
		$mdDialog.show({
			templateUrl: 'views/templates/add-product-supply.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	$scope.completeAddProductSupply = function  () {
		$mdDialog.hide();
		
		Notification.display("Creating supply for " + $scope.uphol.description + "...", false);
			
		$scope.supply.$create(function (resp) {
			$scope.supplies.push(resp);
			
			Notification.hide();
			$scope.supply = new ProductSupply();
			$scope.supply.product = $scope.uphol;
		}, function (e) {
			$log.error(JSON.stringify(e));
		});
	};
	
	$scope.cancelAddProductSupply = function  () {
		$mdDialog.hide();
		$scope.supply = new ProductSupply();
		$scope.supply = $scope.uphol;
	};
	
	/*
		Watch function to detect changes in the list of supplies
	*/
	$scope.$watch('supplies', function (newVal, oldVal) {
		var updateSupply = function() {
			this.$update(function () {
				this.$updating = false;
			});
		};
		
		if (newVal.length && oldVal.length) {
			for (var i = newVal.length; i--;) {
				if (newVal[i] && oldVal[i]) {
					if (newVal[i].id == oldVal[i].id) {
						if (!angular.equals(newVal[i], oldVal[i])) {
							if (!newVal[i].$updating) {
								newVal[i].$updating = true;
								
								setTimeout(updateSupply.bind(newVal[i]), 600);
								
							}
							
						}
					}
				}
			}
		}
		
	}, true);
	
    $scope.$watch(function () {
		var uphol = angular.copy($scope.uphol);
		try {
			delete uphol.last_modified;
			//delete uphol.image;
			//delete uphol.model;
			//delete uphol.configuration;
		}catch (e) {
			
		}
		return uphol;
	}, function (newVal, oldVal) {
		
		if (newVal && oldVal) {
			if (newVal.hasOwnProperty('id')) {
				if (!angular.equals(newVal, oldVal)) {
					if (!newVal.$updating) {
						
						newVal.$updating = true;
						
						setTimeout(function () {
							this.$update(function () {
								this.$updating = false;
							});
						}.bind(newVal), 600);
					}
				}
			}
		}
		
		if (oldVal.hasOwnProperty('id')) {
			
			$timeout.cancel(timeoutPromise);
			
			timeoutPromise = $timeout(function () {
				
				$mdToast.show($mdToast.simple()
					.position('top right')
					.hideDelay(3000)
					.content('Updating ' + $scope.uphol.description + '...'));
				
				$scope.uphol.$update(function () {
					$scope.updateLoopActive = false;
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(3000)
						.content($scope.uphol.description + ' updated.'));

				}, function () {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(3000)
						.content("Unable to update"));

				});
			}, 700);
		}
    }, true);
    
    $scope.update = function () {
        //Notification.display('Saving Upholsterty...', false);
		/*
        $scope.uphol.$update(function () {
			$mdToast.show($mdToast.simple()
				.position('top right')
				.hideDelay(3000)
				.content('Upholstery saved.'));
        });
		*/
    };
    
    $scope.remove = function () {
        //Notification.display('Deleteing Upholstery Product');
        $scope.uphol.$delete(function () { 
            //Notification.display('Upholstery Product Deleted');
            $location.path('/product/upholstery');
        });
    };
    
    $scope.$on('$destroy', function () {
        $scope.update(); 
    });
}]);
