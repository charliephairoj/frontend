
angular.module('employeeApp')
.controller('OrderShippingCreateCtrl', ['$scope', 'Acknowledgement', '$filter', 'Notification', 'Shipping', '$location', 'scanner',     
function ($scope, Acknowledgement, $filter, Notification, Shipping, $location, scanner) {

	var fetchingAck = true;
	$scope.acknowledgements = Acknowledgement.query({limit: 20}, function () {
		fetchingAck = false;
	});

	$scope.shipping = new Shipping();
    var ack;
    
    scanner.onscan = function (code) {
        var re = new RegExp(/^A\-(s+)?/);
        if (re.test(code)) {
			Notification.display('Retrieving Acknowledgement# ' + code.split('-')[1], false);
            Acknowledgement.get({id: code.split('-')[1]}, function (response) {
                Notification.hide();
                var ack = response;
                $scope.shipping.acknowledgement = {id: ack.id};
                $scope.shipping.customer = ack.customer;
                $scope.shipping.products = ack.products;
                $scope.shipping.delivery_date = new Date(ack.delivery_date);
            },
            function () {
                Notification.display('Unable to locate Acknowledgement#' + code.split('-')[1]);
            });
        }
    };
    
    $scope.addAcknowledgement = function (ack) {
        $scope.shipping.acknowledgement = {id: ack.id};
        $scope.shipping.customer = ack.customer;
        $scope.shipping.items = ack.items;
        $scope.shipping.delivery_date = new Date(ack.delivery_date);
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
            Notification.display('Creating Acknowledgement...', false);
            $scope.shipping.$save(function (resource) {
                Notification.display('Shipping manifest created');
                if (resource.pdf.url) {
					window.open(resource.pdf.url);
                }
                $location.path('/order/shipping');
            }, 
            function () {
                Notification.display('There was an error in creating the shipping manifest', false);
            });
        } else {
            Notification.display('The Order is Not Complete');
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
