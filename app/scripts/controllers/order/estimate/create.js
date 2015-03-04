
angular.module('employeeApp')
.controller('OrderEstimateCreateCtrl', ['$scope', 'Estimate', 'Customer', '$filter', '$window', 'Project', '$mdToast', 'FileUploader',
function ($scope, Estimate, Customer, $filter, $window, Project, $mdToast, FileUploader) {
    //Vars
    $scope.showFabric = false;
    $scope.uploading = false;
    $scope.customImageScale = 100;
	
	$scope.projects = Project.query({page_size:99999});
    $scope.estimate = new Estimate();
    
    var uploadTargets = [];
    var storage = window.localStorage;
    
    if (storage.getItem('estimate-create')) {
        angular.extend($scope.estimate, JSON.parse(storage.getItem('estimate-create')));
    }
    
    $scope.estimate.items = $scope.estimate.items || [];
    $scope.employee = {id: $scope.currentUser.id};
    
    $scope.tempSave = function () {
        storage.setItem('estimate-create', JSON.stringify($scope.estimate));
    };
    
    $scope.addCustomer = function (customer) {
        //Set Customer
        $scope.estimate.customer = customer;
        //Hide Customer Panel
        $scope.showCustomers = false;
        $scope.tempSave();
    };
    
    $scope.addItem = function (product) {
        $scope.estimate.items.push(product);
        $scope.tempSave();
    };
    
    $scope.removeItem = function (index) {
        $scope.estimate.items.splice(index, 1);
        $scope.tempSave();
    };
	
	$scope.addFiles = function (files) {
		$scope.estimate.files = $scope.estimate.files || []; 
		
		/* jshint ignore:start */
		for (var i = 0; i < files.length; i++) {
			$scope.estimate.files.push({filename: files[i].name});
			
			var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < $scope.estimate.files.length; h++) {
					if (data.filename == $scope.estimate.files[h].filename) {
						angular.extend($scope.estimate.files[h], data);
					}
				}
			}, function () {
				
			})
		}
		/* jshint ignore:end */
	};
    
    $scope.create = function () {
		$scope.estimate.employee = $scope.currentUser;
        $scope.tempSave();
        try {
            if ($scope.isValidated()) {
				
				$mdToast.show($mdToast
					.simple()
					.position('top right')
					.content("Creating new acknowledgement...")
					.hideDelay(0));
				
				/*
				 * Preps for creation of a new project
				 */
				if ($scope.estimate.newProject) {
					$scope.estimate.project = {codename: $scope.estimate.newProjectName};

					delete $scope.estimate.newProject;
					delete $scope.estimate.newProjectName;

				}
				
                $scope.estimate.$create(function (response) {
					
                   	$mdToast.show($mdToast
						.simple()
						.position('top right')
						.content("Estimate created with ID: " + $scope.estimate.id)
						.hideDelay(2000));
						
                    if (response.pdf) {
						$window.open(response.pdf);
                    }
                    
                    angular.extend($scope.estimate, JSON.parse(storage.getItem('estimate-create')));
					
					delete $scope.estimate.newProject;
					delete $scope.estimate.newProjectName;
					
                }, function (e) {
                    console.error(e);
					$mdToast.show($mdToast
						.simple()
						.content(e)
						.hideDelay(0));
                });
            }
        } catch (e) {
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content(e)
				.hideDelay(0));
        }
    };
    
    $scope.reset = function () {
        $scope.estimate = new Estimate();
        $scope.estimate.items = [];
        storage.removeItem('estimate-create');
    };
    
    //Validations
    $scope.isValidated = function () {
        /*
         * The following are test to see if
         * The property has already been added
         */
        if (!$scope.estimate.customer) {
            throw new TypeError("Please add a customer.");
        } else {
            if (!$scope.estimate.customer.hasOwnProperty('id')) {
                throw new ReferenceError("Missin customer ID");
            }
        }
        
        //Validate ordered Items
        if (!$scope.estimate.items) {
            throw new TypeError("Products is not an array");
        } else {
			//Verifies that there are items ordered
            if ($scope.estimate.items.length <= 0) {
                throw new RangeError("No products added to the order");
            } else {
                for (var i = 0; i < $scope.estimate.items.length; i++) {
					var item = $scope.estimate.items[i];
                    /*
                     * Check that there is a quantity 
                     * for each piece of product
                     */
                    if (!$scope.estimate.items[i].hasOwnProperty('quantity') || !$scope.estimate.items[i].quantity) {
                        throw new RangeError("Expecting a quantity of at least 1 for " + $scope.estimate.items[i].description);
                    }
                    
                    /*
                     * Validates that every item has a price
                     */
                    if (!$scope.estimate.items[i].hasOwnProperty('has_price')) {
                        //throw new ReferenceError("Product missing 'has_price' attribute");
                    } else {
                        if (!$scope.estimate.items[i].has_price) {
                            //throw new TypeError("Product missing price");
                        }
                    }
                    
                    /*
                     * Validates custom items
                     */
                    if (!item.hasOwnProperty('id')) {
						if (!item.is_custom) {
							throw new TypeError("Item without id is not custom. Please contact an Administrator.");
						}
                    }
                }
            }
        }
        
        //Validate Delivery Date
        if (!$scope.estimate.delivery_date) {
            throw new TypeError("Please select a preliminary delivery date.");
        }
        
        //Validate vat
        if ($scope.estimate.vat === undefined || $scope.estimate.vat === null) {
            throw new TypeError("Please set the vat.");
        }
        
        //Return true for form validated
		return true;
	};
        
}]);
