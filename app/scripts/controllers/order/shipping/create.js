
angular.module('employeeApp')
.controller('OrderShippingCreateCtrl', ['$scope', 'Acknowledgement', '$filter', '$mdToast', 'Shipping', '$location', 'scanner', '$log',   
function ($scope, Acknowledgement, $filter, $mdToast, Shipping, $location, scanner, $log) {

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
        $scope.shipping.acknowledgement = {id: ack.id};
        $scope.shipping.customer = ack.customer;
        $scope.shipping.items = ack.items;
        $scope.shipping.delivery_date = new Date(ack.delivery_date);
		
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
		
        //Hide Customer Panel
        $scope.showAck = false;
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
    
    $scope.removeProduct = function (index) {
        $scope.shipping.items.splice(index, 1);
    };
    
    //Validations
    $scope.isValidated = function () {
        /*
         * The following are test to see if
         * The property has already been added
         */
        if (!$scope.shipping.acknowledgement) {
            return false;
        }
        
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
