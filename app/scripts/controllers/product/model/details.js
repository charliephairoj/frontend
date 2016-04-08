
angular.module('employeeApp')
.controller('ProductModelDetailsCtrl', ['$scope', 'Model', '$routeParams', '$location', 'Notification', '$http', 'FileUploader', 'Upholstery', 'Configuration', '$mdDialog',
function ($scope, Model, $routeParams, $location, Notification, $http, FileUploader, Upholstery, Configuration, $mdDialog) {
    $scope.model = Model.get({'id': $routeParams.id});
	$scope.upholsteries = Upholstery.query({'model_id': $routeParams.id});
    $scope.configuration = false;
	
	var updateVars = {};
	
    //Uploads Profie Image
    $scope.addImage = function (files) {
		
		/**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image) {
	        //display notification
	        Notification.display('Uploading Model Image...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "/api/v1/upholstery/image/");
				promise.then(function (dataObj) {
			        Notification.display('Image uploaded.');
					$scope.model.images.push(dataObj.data);
		
					$scope.update();
		
					$scope.images = null;
		
		
			}, function () {
		        Notification.display('Error uploading image', false);
	
			});
		}
		
		if (files[0].type === 'image/jpeg') {
			$mdDialog.show({
		  		templateUrl: 'views/templates/edit-image.html',
				controller: function ($scope, $mdDialog) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};
					
					$scope.imageToEdit = files[0]
					$scope.fileSize = 0;
					
					$scope.$watch('cropper.scale', function () {
						clearTimeout(sizeVar);
						sizeVar = setTimeout(function () {
							$scope.fileSize = $scope.cropper.image.size;
							$scope.$apply();
						}, 500);
					});
				
		            $scope.preview = function (url) {
		                if (url) {
		                    window.open(url);
		                }
		            };
				
					$scope.cancel = function () {
						$mdDialog.hide();
					}
				
					$scope.save = function (image) {
						$mdDialog.hide();
				        uploadImage(image);
					}
				}
		   	});
			
		} else {
			uploadImage(files[0]);
		}
       
		
	};
	
	/**
	 * Describe what this method does
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.removeImage = function ($index) {
		$scope.model.images.splice($index, 1);
		
		$scope.update();
	}
    
    
    
    $scope.remove = function () {
        //Notify
        Notification.display('Deleting Model...');
        
        //Ajax call to delete
        $scope.model.$delete(function () {
            //Notify
            Notification.display('Model Deleted');
            //Reroute to view page
            $location.path('/product/model');
        });
        
    };
    
	/*
	 * Create dialog to add room
	 */
	$scope.showAddUpholstery = function () {
		
		// Redeclare variables to be used in subcontroller
		$scope.configurations = $scope.configurations || Configuration.query({limit:0, offset:0});
		
		// Create the dialog and display it
		$mdDialog.show({
			templateUrl: 'views/templates/add-upholstery.html',
      	  	clickOutsideToClose:true,
			controller: function ($scope, $mdDialog, model, configurations, upholsteries) {
				$scope.configurations = configurations;
				$scope.upholstery = new Upholstery();
				$scope.upholstery.model = model;
				
				/**
				 * Create a new upholstery via POST request
				 * @public
				 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
				 * @returns Describe what it returns
				 * @type String|Object|Array|Boolean|Number
				 */
				
				$scope.create = function () {
					$mdDialog.hide();
					Notification.display('Creating new upholstery: ');
					$scope.upholstery.$create(function () {
						Notification.display($scope.upholstery.model.model + ' ' + $scope.upholstery.configuration.configuration + ' created.');
						upholsteries.push(angular.copy($scope.upholstery));
					}, function (e) {
						Notification.display(e);
					});
				};
				
				$scope.cancel = function () {
					$mdDialog.hide();
				}
				
				
				
			},
			locals: {
				'model': $scope.model, 
				'configurations': $scope.configurations, 
				'upholsteries': $scope.upholsteries
			}
		});
	};

	
	/**
	 * Describe what this method does
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.updateUpholstery = function (upholstery) {
		
		clearTimeout(updateVars[upholstery.id]);
		
		updateVars[upholstery.id] = setTimeout(function () {
	        Notification.display('Saving Upholstery...', false);
			
	        this.upholstery.$update(function (resp) {
				Notification.display('Upholstery Updated');
	        }, function (e) {
	        	Notification.display('Unable to update upholstery because ' + e);
	        });
		}.bind({upholstery: upholstery}), 3000);
	}
	
    $scope.update = function () {
		
		function updateModel () {
	        Notification.display('Saving Model...', false);
			var model = angular.copy($scope.model);
			
	        model.$update(function (resp) {
				Notification.display('Model Updated');
				angular.extend($scope.model, resp);
	        }, function (e) {
	        	Notification.display('Unable to update model because ' + e);
	        });
		}
		
		clearTimeout($scope.updateVar); 
		$scope.updateVar = setTimeout(updateModel, 600);
        
    };
    
	/*
		Make Primary Image
	
		Set all the images in the set primary:false and then set the image supplied in the 
		argument as primary:true
	*/
	$scope.makePrimaryImage = function (image) {
		
		if (!$scope.configuration) {
			// Set all images as primary:false
			for (var i = $scope.model.images.length; i--;) {
				$scope.model.images[i].primary = false;
			}
		
			// Set argument image as primary:true
			image.primary = true;
		
			$scope.update();
		} else {
			$scope.configuration = false
			// Set all images as primary:false
			for (var i = $scope.model.images.length; i--;) {
				$scope.model.images[i].configuration = false;
			}
		
			// Set argument image as primary:true
			image.configuration = true;
		
			$scope.update();
		}
		
		
	};
	
    $scope.$on('$destroy', function () {
        $scope.update();
    });
    
}]);
