
angular.module('employeeApp')
.controller('ProjectDetailsCtrl', ['$scope', 'Project', '$routeParams', 'Room', 'Notification', 'FileUploader', '$http', '$timeout', "PurchaseOrder", 'Acknowledgement', '$mdDialog', 'Phase', '$q', '$rootScope',
function ($scope, Project, $routeParams, Room, Notification, FileUploader, $http, $timeout, PurchaseOrder, Acknowledgement, $mdDialog, Phase, $q, $rootScope) {
    
	var timeoutPromise;
    $scope.showAddRoom = false;
    $scope.flag = false;
    $scope.project = Project.get({id: $routeParams.id});
    $scope.room = {};
	$scope.purchaseOrders = PurchaseOrder.query({limit:0, project_id:$routeParams.id});
	$scope.acknowledgements = Acknowledgement.query({limit:0, project_id:$routeParams.id});
	$scope.room = new Room();
    $scope.roomTypes = [
    	'Bedroom',
		'Dining Room',
		'Formal Dining Room',
		'Guest Bedroom',
		'Guest Bathroom',
		'Kitchen',
		'Living Room',
		"Maid's Quaters",
		'Master Bathroom',
		'Master Bedroom',
		'Pantry'
    ];
	$scope.updateVars = {};
	
	$scope.addCustomer = function (customer) {
		$scope.showCustomers = false;
		$scope.project.customer = customer;
	};
	
	/*
	 * Create dialog to add phase
	 */
	$scope.showAddPhase = function () {
		$scope.phase = new Phase();
		$mdDialog.show({
			templateUrl: 'views/templates/add-phase.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	/*
	 * Complete adding item process and close the dialog 
	 */
	$scope.completeAddPhase = function () {
		$mdDialog.hide();
		var phase = angular.copy($scope.phase);
		phase.project = $scope.project.id;
		$scope.phase = undefined;
		phase.$create(function (resp) {
			$scope.project.phases.push(resp);
		});
	};
	
	/*
	 * Cancel adding a item 
	 */
	$scope.cancelAddPhase = function () {
		$mdDialog.hide();
		$scope.phase = undefined;
	};
	
	/*
	 * Create dialog to add room
	 */
	$scope.showAddRoom = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/add-room.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	/*
	 * Complete adding room process and close the dialog 
	 */
	$scope.completeAddRoom = function () {
		$mdDialog.hide();
		var room = angular.copy($scope.room);
		room.project = $scope.project;
		$scope.room = new Room();
		room.$create(function (resp) {
			$scope.project.rooms.push(resp);
		});
	};
	
	/*
	 * Cancel adding a room 
	 */
	$scope.cancelAddRoom = function () {
		$mdDialog.hide();
		$scope.room = new Room();
	};
	 
	$scope.addSupply = function ($supply) {
		
		$scope.showAddSupply = false;
		var supply = angular.copy($supply);
		supply.quantity = 0;
		$scope.project.supplies = $scope.project.supplies || [];
		$scope.project.supplies.push(supply);
		
		//Notify the user
		//Notification.display("Adding "+$supply.description+" to "+$scope.project.codename);
		
		//$scope.project.$update(function () {
		//	Notification.display($supply.description+" added to "+$scope.project.codename + ".");
		//});
		
	};
	
	$scope.removeSupply = function ($index) {
		$scope.project.supplies.splice($index, 1);
	};
	
    $scope.addImage = function (files) {
        /**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image, fn) {
	        //display notification
	        Notification.display('Uploading Project Image...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "/api/v1/project/image/");
			promise.then(function (dataObj) {
				$scope.project.files.push(dataObj.data);
		
					//$scope.update();
		
					//$scope.images = null;
		
				(fn || angular.noop)();
			}, function () {
		        Notification.display('Error uploading image', false);
	
			});
		}

		function setDataURL(f) {
			var reader = new FileReader();
		
			// Closure to capture the file information.
			reader.onload = function (e) {
				$rootScope.safeApply(function () {
					f.url = e.target.result;
				});
			}
		
			// Read in the image file as a data URL.
			reader.readAsDataURL(f);			

		}
		
		// Create image attribute if does not exist
		$scope.project.files = $scope.project.files || [];

		if (files[0].type === 'image/jpeg') {
			$mdDialog.show({
				templateUrl: 'views/templates/edit-image.html',
				locals: {'update': $scope.update},  
				controller: function ($scope, $mdDialog, update) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};

					$scope.images = [];
					for (var i=0; i < files.length; i++) {
						$scope.images.push(files[i]);
						setDataURL($scope.images[i]);
					}

					$scope.imageToEdit = $scope.images[0];
					$scope.currentIndex = 0;
					$scope.fileSize = 0;
					$scope.saveProgress = {};
					$scope.update = update;
									
					

					$scope.setImage = function ($index) {
						var img = $scope.cropper.getImage();

						angular.copy(img, $scope.images[$scope.currentIndex]);
						setDataURL(img);
						img.name = $scope.images[$scope.currentIndex].name;
						$scope.images[$scope.currentIndex] = img;						
						$scope.imageToEdit = $scope.images[$index];
						$scope.currentIndex = $index;
						$scope.cropper.setImage($scope.imageToEdit);
					};
					
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
						//Set current image in list of images
						image.name = $scope.images[$scope.currentIndex].name;
						$scope.images[$scope.currentIndex] = image;

						for (var h=0; h<$scope.images.length; h++) {
							$timeout(function () {
								$scope.saveProgress[this.index] = false;
								
								uploadImage($scope.images[this.index], function () {
									$scope.saveProgress[this.k] = true;
	
									if (Object.values($scope.saveProgress).indexOf(false) == -1) {
										Notification.display('Images uploaded');
										$scope.images = null;
										$scope.saveProgress = {};
										$scope.update();
										$mdDialog.hide();
										
									} 
								}.bind({'k':this.index}));
							}.bind({'index':h}), 100 * h);
							
						}
						
					}

					
					
						  

				}
		   	});
			
		} else {
			uploadImage(files[0], function () {
				
			});
		}
	};


	/*
		Make Primary Image
	
		Set all the images in the set primary:false and then set the image supplied in the 
		argument as primary:true
	*/
	$scope.makePrimaryImage = function (image) {
		
		// Set all images as primary:false
		for (var i = $scope.project.files.length; i--;) {
			$scope.project.files[i].primary = false;
		}
	
		// Set argument image as primary:true
		image.primary = true;
	
		$scope.update();
	
		
		
	};

	
	/**
	 * Describe what this method does
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.removeImage = function ($index) {
		$scope.project.files.splice($index, 1);
		
		$scope.update();
	}

    
    $scope.addSchematic = function (files) {
        var file = angular.isArray(files) ? files[0] : files;
        var promise = FileUploader.upload(file, '/api/v1/project/image/');
        promise.then(function (response) {
            $scope.room.schematic = response; 
        });
    };
    
    $scope.addRoom = function () {
        Notification.display('Adding ' + $scope.room.description, false);
        var room = new Room();
        angular.extend(room, $scope.room);
        room.project = {id: $scope.project.id};
        room.$save(function (response) {
            Notification.display($scope.room.description + " added.");
            $scope.showAddRoom = false;
            $scope.project.rooms.push(room);
        }, function (e) {
            $scope.flag = true; 
        });
    };
	
	/*
	 * Create dialog to add packing list
	 */
	$scope.showCreatePacking = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/add-packing-list.html',
			controllerAs: 'ctrl',
			locals: {project: $scope.project},
			controller: 'DialogsCreatePackingListCtrl',
			bindToController: true,
		});
	};
	
	/*
	 * Watches the project for changes in order to autosave
	 *
    $scope.$watch('project.supplies', function (newVal, oldVal) {
    	
		if (oldVal) {
	    	$timeout.cancel(timeoutPromise);
	
			timeoutPromise = $timeout(function () {
				Notification.display('Saving...', false);
				var project = angular.copy($scope.project);
				project.$update(function () {
					Notification.display('Project ' + $scope.project.codename + ' saved');
				});
			}, 750);
		}
		
	}, true);
	*/
	
	$scope.update = function () {
		
		function updateProject () {
	        Notification.display('Saving Project...', false);
			var project = angular.copy($scope.project);
			
	        project.$update(function (resp) {
				Notification.display('Project Updated');
				//var images = resp['files'];
				//delete resp['images'];

				angular.extend($scope.project, resp);

				
	        }, function (e) {
	        	Notification.display('Unable to update project because ' + e);
	        });
		}
		
		$timeout.cancel($scope.updateVar); 
		$scope.updateVar = $timeout(updateProject, 1500);
        
    };
	
	$scope.$on('$destroy', function () {
        $scope.update();
	});
	
}]);
