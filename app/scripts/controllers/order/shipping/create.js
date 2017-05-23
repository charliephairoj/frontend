
angular.module('employeeApp')
.controller('OrderShippingCreateCtrl', ['$scope', 'Acknowledgement', 'Customer', '$filter', '$mdToast', 'Shipping', '$location', 'scanner', '$log',
function ($scope, Acknowledgement, Customer, $filter, $mdToast, Shipping, $location, scanner, $log) {

	var fetchingAck = true;

	$scope.shipping = new Shipping();
    var ack;

    scanner.onscan = function (code) {
        var re = new RegExp(/^A\-(s+)?/);
        if (re.test(code)) {
			$mdToast.show($mdToast
				.simple()
				.content('Retrieving Acknowledgement# ' + code.split('-')[1])
				.delay(0));
			Notification.display('Retrieving Acknowledgement# ' + code.split('-')[1], false);
            Acknowledgement.get({id: code.split('-')[1]}, function (response) {
                $mdToast.hide();
                var ack = response;
                $scope.shipping.acknowledgement = {id: ack.id};
                $scope.shipping.customer = ack.customer;
                $scope.shipping.products = ack.products;
                $scope.shipping.delivery_date = new Date(ack.delivery_date);
            },
            function () {
				$mdToast.show($mdToast
					.simple()
					.content('Unable to locate Acknowledgement#' + code.split('-')[1])
					.delay(0));
            });
        }
    };

	/*
 	 * CUSTOMER SECTION
	 *
	 * This section deals with the customer searching and what happens when a customer is selected
	*/
	
	/**
	 * Customer Variables
	 */
	$scope.customers = Customer.query({page_size:9999, limit:0});
	
	// Watch on customerSearchText to get products from the server
	$scope.retrieveCustomers = function (query) {
		if (query) {
			Customer.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.customers.indexOfById(responses[i]) === -1) {
						$scope.customers.push(responses[i]);
					}
				}
			});
		}
	};
	
	/**
	 * Returns a list of customers whose name matches the query
	 * 
	 * @public
	 * @param {String} query - the string to search against the customer names
	 * @returns {Array} - An array of customes that matches the query
	 */
	
	$scope.searchCustomers = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var customers = [];
		for (var i = 0; i < $scope.customers.length; i++) {
			if (angular.lowercase($scope.customers[i].name).indexOf(lowercaseQuery) !== -1) {
				customers.push($scope.customers[i]);
			}
		}
		
		return customers;
	};
	
	
	/**
	 * Updates the customer name, so that if the customer is a new one, 
	 * a customer object is already in place to accept the new details
	 * 
	 * @public
	 * @param {String} customerName - Name of the Customer
	 * @returns {null} 
	 */
	
	$scope.updateCustomerName = function (customerName) {
		$scope.shipping.customer = $scope.shipping.customer || {name: '', addresses: []};
		
		if (!$scope.shipping.customer.id) {
			try{
				clearRoute();
			} catch (e) {
				$log.warn(e);
			}
			$scope.shipping.customer.name = customerName || '';
		} else {
			if ($scope.shipping.customer.name.indexOf(customerName) == -1) {
				$scope.shipping.customer = {name: customerName, addresses: []};
			}
		}
	};
	
	
	
	//Add customer and hide modal
    $scope.addCustomer = function (customer) {
        //Set Customer and save
        $scope.shipping.customer = customer;
        //$scope.tempSave();
			
		//Reset the map
		/*
		if ($scope.marker) {
			$scope.marker.setMap(null);
		}
		clearRoute();
	 	map.setZoom(9);
		*/
		
		//Set marker for customer
		try {
			var address = customer.addresses[0];
			
			if (address.latitude && address.longitude) {
				$scope.marker = createMarker({address: address, title: $scope.shipping.customer.name, icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"});
				
				calculateRoute(home, $scope.marker.getPosition(), function () {
					clearRoute();
					$scope.marker.setMap(map);
   					map.panTo($scope.marker.getPosition());
   					map.setZoom(17);
				});
							 
			} else {
				$scope.marker = null;
			}
		} catch (e) {
			$log.warn(JSON.stringify(e));
		}
    };


	/*
 	 * Acknowledgement SECTION
	 *
	 * This section deals with the customer searching and what happens when a customer is selected
	*/

	/**
	 * Acknowledgement Variables
	 */
	$scope.acknowledgements = Acknowledgement.query(function () {
		fetching = false;
	});

	// Watch on customerSearchText to get products from the server
	$scope.retrieveAcknowledgements = function (query) {
		if (query) {
			Acknowledgement.query({q:query}, function (responses) {
				for (var i = 0; i < responses.length; i++) {
					if ($scope.acknowledgements.indexOfById(responses[i]) === -1) {
						$scope.acknowledgements.push(responses[i]);
					}
				}
			});
		}
	};

	/**
	 * Returns a list of customers whose name matches the query
	 *
	 * @public
	 * @param {String} query - the string to search against the customer names
	 * @returns {Array} - An array of customes that matches the query
	 */

	$scope.searchAcknowledgements = function (query) {
		var lowercaseQuery = angular.lowercase(query);
		var acknowledgements = [];
		acknowledgements = $filter('filter')($scope.acknowledgements, query);

		return acknowledgements;
	};


    $scope.addAcknowledgement = function (ack) {
		ack = ack || $scope.selectedAcknowledgement;
		console.log(ack);
		console.log($scope.selectedAcknowledgement);
		if (ack) {
			$scope.shipping.acknowledgement = Acknowledgement.get({id: ack.id},
				function (resp) {
					$scope.shipping.acknowledgement = {id: ack.id};

					/* Get Customer from the server
					 */
					$scope.shipping.customer = Customer.get({id: resp.customer.id}, function(resp){
						$scope.selectedCustomer = resp;
					});

					$scope.shipping.items = resp.items;
					$scope.shipping.delivery_date = new Date(resp.delivery_date);

					for (var i = 0; i < $scope.shipping.items.length; i++) {
						try{
							$scope.shipping.items[i].quantity = Number($scope.shipping.items[i].quantity);
							$scope.shipping.items[i].width = Number($scope.shipping.items[i].width || 0);
							$scope.shipping.items[i].depth = Number($scope.shipping.items[i].depth || 0);
							$scope.shipping.items[i].height = Number($scope.shipping.items[i].height || 0);


						} catch (e) {
							$log.warn(e);
						}

					}


				}
			)
		}
    };

    $scope.$watch('query', function (q) {
		if (q) {
			Acknowledgement.query({limit: 5, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
						$scope.acknowledgements.push(resources[i]);
					}
				}
			});
		}
	});

	$scope.loadNext = function () {
		if (!fetchingAck) {
			fetchingAck = true;
			Acknowledgement.query({
				offset: $scope.acknowledgements.length,
				limit: 20
			}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					$scope.acknowledgements.push(resources[i]);
				}
				fetchingAck = false;
			});
		}
	};


	$scope.addItem = function (product) {
		if (product.description) {
			product.width = product.width || 0;
			product.height = product.height || 0;
			product.depth = product.depth || 0;
			$scope.shipping.items = $scope.shipping.items || [];
	        $scope.shipping.items.push(product);
	        //$scope.tempSave();
		
			delete $scope.tempProduct;
			delete $scope.productSearchText;
		}
    };
    
	
	
    $scope.removeItem = function (index) {
        $scope.shipping.items.splice(index, 1);
        //$scope.tempSave();
    };

    $scope.create = function () {

        if ($scope.isValidated()) {
			$mdToast.show($mdToast
				.simple()
				.content('Creating shippping manifest...')
				.hideDelay(0));
            $scope.shipping.$save(function (resource) {
				$mdToast.show($mdToast
					.simple()
					.content('Shipping manifest created')
					.hideDelay(2000));
                if (resource.pdf.url) {
					window.open(resource.pdf.url);
                }
                $location.path('/order/shipping');
            },
            function () {
				$mdToast.show($mdToast
					.simple()
					.content('There was an error in creating the shipping manifest')
					.hideDelay(0));
            });
        } else {
			$mdToast.show($mdToast
				.simple()
				.content('The Order is Not Complete'));
        }

    };

    //Validations
    $scope.isValidated = function () {
        /*
         * The following are test to see if
         * The property has already been added
         */
		/*
        if (!$scope.shipping.acknowledgement) {
            return false;
        }
		*/

        if (!$scope.shipping.delivery_date) {
            return false;
        }
        //Return true for form validated
        return true;
    };

    $scope.$on('$destroy', function () {
        scanner.onscan = null;
    });
}]);
