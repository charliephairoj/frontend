
angular.module('employeeApp')
.controller('OrderEstimateViewCtrl', ['$scope', 'Estimate', '$location', '$filter', 'KeyboardNavigation', '$mdToast', 'Fabric', 'FileUploader', 'Notification', 'Upholstery', 'Acknowledgement', '$log',
function ($scope, Estimate, $location, $filter, KeyboardNavigation, $mdToast, Fabric, FileUploader, Notification, Upholstery, Acknowledgement, $log) {
	
	
	/*
	 * Vars
	 * 
	 * -fetching: this is a switch to see if there is currently a call being made
	 */
	var fetching = true,
		index = 0,
		currentSelection;
		
	var loadingToast = $mdToast.show($mdToast
			.simple()
			.position('top right')
			.content('Loading estimates...')
			.hideDelay(0));

	//Poll the server for acknowledgements
	$scope.estimates = Estimate.query({limit: 20}, function (e) {
		$mdToast.hide();
		fetching = false;
		changeSelection(index);
	});

	$scope.openAttachment = function (link) {
		window.open(link);
	}
	/*
	 * Take the query in the searchbar and then sends 
	 * the query to the server to get more results. The
	 * resuls are then integrated with the current list of
	 * resources;
	 */
	$scope.$watch('query.$.$', function (q) {
		
		if (q) {
			Estimate.query({q: q, limit: q ? q.length : 5}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.estimates.indexOfById(resources[i].id) == -1) {
						$scope.estimates.push(resources[i]);
					}
				}
				index = 0;
				changeSelection(index);
				
			});
		}
	});

	//Loads the next set of data
	$scope.loadNext = function () {
		if (!fetching) {
			fetching = true;
			var moreAckToast = $mdToast.show($mdToast
					.simple()
					.position('bottom right')
					.hideDelay(0)
					.content('Loading more quotations...'));
			Estimate.query({
				limit: 50, 
				offset: $scope.estimates.length
			}, function (resources) {
				fetching = false;
				$mdToast.hide();
				for (var i = 0; i < resources.length; i++) {
					$scope.estimates.push(resources[i]);
				}
			});
		}
	};
	
	function filter(array) {
		return $filter('filter')(array, $scope.query);
	}
			
	function changeSelection(i) {
				
		$scope.safeApply(function () {
			if (currentSelection) {
				currentSelection.$selected = false;
			}
			
			currentSelection = filter($scope.estimates)[i];
			
			if (currentSelection) {
				currentSelection.$selected = true;
			}
		});
	
		var selection = $('.item.selected');
		var container = selection.parents('.outer-container');
		var scrollTop = container.scrollTop();
		var cHeight = container.innerHeight();
		
		
		if (scrollTop > (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		}
				
	}
	
	var keyboardNav = new KeyboardNavigation();
			
	keyboardNav.ondown = function () {
		if (index < filter($scope.estimates).length - 1) {
			index += 1;
			changeSelection(index);
		}
	};
	
	keyboardNav.onup = function () {
		if (index !== 0) {
			index -= 1;
			changeSelection(index);
		}
	};
	
	//keyboardNav.enable();
	
	
    $scope.addItem = function (estimate, product, configs) {
		

		if (product.description) {
			product.width = product.width || 0;
			product.height = product.height || 0;
			product.depth = product.depth || 0;
			product.unit_price = product.price || 0;
	        estimate.items.push(product);
	       
			
		}

		estimate.$$product = null;
		estimate.$$searchText = '';

		console.log(estimate.$$product)
		console.log(estimate.$$searchText)

    };
    
	
	
    $scope.removeItem = function (estimate, index) {
        estimate.items.splice(index, 1);
    };
	
	
	/**
	 * FILES SECTIONs
	 *
	 * This section deals with files that are associated or to be associated with this acknowledgement
	 */

	/**
	 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
	 * @public
	 * @param {Array} files - Array of files with raw data
	 * @returns {null}
	 */
	$scope.addFiles = function (files, quotation) {
	
		quotation.files = quotation.files || []; 

		/* jshint ignore:start */
	
		Notification.display('Uploading files', 2000);
	
		for (var i = 0; i < files.length; i++) {
			quotation.files.push({filename: files[i].name});
	
			var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < quotation.files.length; h++) {
					if (data.filename == quotation.files[h].filename) {
						angular.extend(quotation.files[h], data);
					}
				}
			
				Notification.display('File Uploaded', 2000);
			
			
			}, function (e) {
				$log.error(JSON.stringify(e));
				Notification.display(e.message, 0);
			
			});
		}

		/* jshint ignore:end */
	};

	/**
	 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
	 * @public
	 * @param {Array} files - Array of files with raw data
	 * @returns {null}
	 */
	$scope.addImage = function (files, item) {
	
		if (files.length > 0) {
			/* jshint ignore:start */	
		
			Notification.display('Uploading image...');
			
			var promise = FileUploader.upload(files[0], "api/v1/acknowledgement/item/image");
			promise.then(function (result) {
				var data = result.data || result;
				item.image = data
				Notification.display('Image uploaded.');
			
			}, function (e) {
				$log.error(JSON.stringify(e));
			
				Notification.display(e.message, 0);
			
			});
			/* jshint ignore:end */
		}
	};
	
	
	/**
	 * PRODUCT SECTION
	 * 
	 * This section deals with the product listing and search
	 */
	
	// Inital list of upholsteries
	$scope.upholsteries = Upholstery.query();
	
	// Watch on productSearchText to get products from the server
	$scope.retrieveUpholsteries = function (query) {
		if (query) {
			Upholstery.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.upholsteries.indexOfById(responses[i]) === -1) {
						$scope.upholsteries.push(responses[i]);
					}
				}
			});
		}
	};
	
	/**
	 * Returns a list of upholsteries whose description matches the search term
	 * @public
	 * @param {String} query - Search term to apply against project.codename
	 * @returns {Array} - An array of projects whose codename matches the search term
	 */
	$scope.searchProducts = function (query) {
		var lowercaseQuery = angular.lowercase(query.trim());
		var products = [];
		for (var i = 0; i < $scope.upholsteries.length; i++) {
			if (angular.lowercase($scope.upholsteries[i].description).indexOf(lowercaseQuery) !== -1) {
				products.push($scope.upholsteries[i]);
			}
		}
		
		console.log(lowercaseQuery, products);
		
		return products;
	};


	/**
	 * FABRIC SECTION
	 * 
	 * This section deals with the product listing and search
	 */

	// Inital list of upholsteries
	$scope.fabricSearchText = null;
	$scope.fabrics = Fabric.query({page_size:9999, limit:0});

	// Watch on productSearchText to get products from the server
	$scope.retrieveFabrics = function (query) {		
		if (query) {
			Fabric.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.fabrics.indexOfById(responses[i]) === -1) {
						$scope.fabrics.push(responses[i]);
					}
				}
			});
		}
	};

	/**
	 * Returns a list of fabric whose description matches the search term
	 *
	 * @public
	 * @param {String} query - Search term to apply against fabric.description
	 * @returns {Array} - An array of fabrics whose description matches the search term
	 */
	$scope.searchFabrics = function (query) {
		var lowercaseQuery = angular.lowercase(query.trim());
		var fabrics = [];
		for (var i = 0; i < $scope.fabrics.length; i++) {
			try{
				if (angular.lowercase($scope.fabrics[i].description).indexOf(lowercaseQuery) !== -1) {
					fabrics.push($scope.fabrics[i]);
				}
			} catch (e) {
				
			}
			
		}
		return fabrics;
	};

	$scope.quotationIsValidated = function (quotation) {
		/*
         * The following are test to see if
         * The property has already been added
         */
        if (!quotation.customer) {
            throw new TypeError("Please add a customer.");
        } else {
            if (!quotation.customer.hasOwnProperty('name')) {
                throw new ReferenceError("Missing customer name");
            }
        }

		
		if (!quotation.currency) {
            //throw new TypeError("Please select a currency.");
        }
		

        //Validate ordered Items
        if (!quotation.items) {
            throw new TypeError("Please add products to this order");
        } else {
			//Verifies that there are items ordered
            if (quotation.items.length <= 0) {
                throw new RangeError("Please add products to this order");
            } else {
                for (var i = 0; i < quotation.items.length; i++) {
					var item = quotation.items[i];
                    /*
                     * Check that there is a quantity
                     * for each piece of product
                     */
                    if (!quotation.items[i].hasOwnProperty('quantity') || !quotation.items[i].quantity) {
                        throw new RangeError("Expecting a quantity of at least 1 for " + quotation.items[i].description);
                    }

                    /*
                     * Validates that every item has a price
                     */
                    if (!quotation.items[i].hasOwnProperty('unit_price')) {

					} else {
                        if (!quotation.items[i].unit_price) {
                            throw new TypeError("Product missing unit price");
                        }
                    }
                }
            }
        }

        //Validate Delivery Date
        if (!quotation.delivery_date) {
            throw new TypeError("Please select a preliminary delivery date.");
        }

        //Validate vat
        if (quotation.vat === undefined || quotation.vat === null) {
            throw new TypeError("Please set the vat.");
        }

        //Validate purchase order number
        if (!quotation.po_id) {
            //throw new TypeError("PO# is not defined");
        }


        //Return true for form validated
		return true;
	}

	/**
	 * Save the quotation
	 * 
	 * @public
	 * @param {Object} acknowledgement - The acknowledgement to be saved
	 */
	$scope.update = function (quotation) {
	
		Notification.display("Updating Quotation #" + quotation.id);

		try {
			if ($scope.quotationIsValidated(quotation)) {
				quotation.$update(function () {
					Notification.display("Quotation #" + quotation.id + " updated");
				});
			}
		} catch (e) {
			$log.error(JSON.stringify({message: e, data: quotation}));
			Notification.display(e.message, false);
		}
	
	};

	/**
	 * Create a new Acknowledgement 
	 *
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.createAcknowledgement = function (quotation) {
		
		Notification.display('Creating acknowledgement from quotation #' + quotation.id, 0);
		
		var acknowledgement = new Acknowledgement();
		
		// Assign order details
		acknowledgement.customer = quotation.customer;
		acknowledgement.delivery_date = quotation.delivery_date || 0;
		acknowledgement.discount = quotation.discount || 0;
		acknowledgement.vat = quotation.vat || 0;
		acknowledgement.terms = quotation.terms || 0;
		acknowledgement.po_id = quotation.po_id || 'NA';
		
		// Assign project
		if (quotation.project) {
			acknowledgement.project = quotation.project;
		}
		
		// Assign the room if it exists
		if (quotation.room) {
			acknowledgement.room = quotation.room;
		}
		
		// Assign the phase if it exists
		if (quotation.phase) {
			acknowledgement.phase = quotation.phase;
		}
		
		// Assign items
		acknowledgement.items = quotation.items;
		
		// Prepare items for new creation
		for (var i = 0; i < acknowledgement.items.length; i++) {
			if (!acknowledgement.items[i].hasOwnProperty('model') || acknowledgement.items[i].hasOwnProperty('configuration')) {
				delete acknowledgement.items[i].id;
			}
			
			acknowledgement.items[i].price = acknowledgement.items[i].unit_price || acknowledgement.items[i].price || 0;
		}
		
		acknowledgement.$create(function (resp) {
			Notification.display('Acknowledgement #' + resp.id + ' created from quotation #' + quotation.id, 2000);
			quotation.status = 'ordered';
			quotation.$update();
			
			$scope.safeApply(function () {
				$location.path('/order/acknowledgement/' + resp.id);
			});
			
		}, function (e) {
			Notification.display('Error creating new acknowledgement from quotation #' + quotation.id, 0);
			console.error(e);
		});
		
	}
	
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
}]);
