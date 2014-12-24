
angular.module('employeeApp')
.controller('OrderAcknowledgementDetailsCtrl', ['$scope', 'Acknowledgement', '$routeParams', 'Notification', '$http', '$window',
function ($scope, Acknowledgement, $routeParams, Notification, $http, $window) {
	
	//Show system notification
	Notification.display('Loading Acknowledgement...', false);
	
	//Set Vars
	$scope.showCal = false;
	
	//GET request server for Acknowledgements
	$scope.acknowledgement = Acknowledgement.get({'id': $routeParams.id, 'pdf': true}, function  () {
		Notification.display('Acknowledgement Loaded');
	});
	
	//Grid Options
	$scope.gridOptions = {
		data: 'acknowledgement.products',
		columnDefs: [{field: 'image', displayName: 'Image'}]
	};

	//Request pdf for acknowledgements from server
    $scope.getPDF = function (type) {
		try {
			var address = $scope.acknowledgement.pdf[type.toLowerCase()];
			$window.open(address);
		} catch (e) {
			var message = "Missing " + type + " pdf for Acknowledgement #" + $scope.acknowledgement.id;
			Notification.display(message);
			throw new Error(message);
		}
	};

	//Request log data for acknowledgement
    $scope.viewLog = function () {
        $http.get("acknowledgement/" + $scope.acknowledgement.id + "/log").success(function (data) {
			angular.forEach(data, function (log) {
				$scope.logs = $scope.logs || [];
				$scope.logs.push(log);
				$scope.showLog = true;
			});
		});
	};
    
    //Save updates to the server
    $scope.save = function () { 
        Notification.display('Saving Acknowledgement...', false);
        $scope.acknowledgement.$update(function (response) {
            
            Notification.display('Acknowledgement ' + $scope.acknowledgement.id + ' saved.');
        }, 
        function () {
            Notification.display('Failed to save acknowledgement ' + $scope.acknowledgement.id, false);
        });
    };
}]);
