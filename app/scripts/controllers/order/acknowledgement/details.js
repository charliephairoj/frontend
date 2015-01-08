
angular.module('employeeApp')
.controller('OrderAcknowledgementDetailsCtrl', ['$scope', 'Acknowledgement', '$routeParams', '$http', '$window', '$mdToast',
function ($scope, Acknowledgement, $routeParams, $http, $window, $mdToast) {
	
	//Show system notification
	$mdToast.show($mdToast
		.simple()
		.position('top right')
		.content('Loading acknowledgement...')
		.hideDelay(0));
		
	//Set Vars
	$scope.showCal = false;
	
	//GET request server for Acknowledgements
	$scope.acknowledgement = Acknowledgement.get({'id': $routeParams.id, 'pdf': true}, function  () {
		$mdToast.hide();
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
			
			$mdToast.show($mdToast
				.simple()
				.content(message)
				.hideDelay(0));
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
		
		$mdToast.show($mdToast
			.simple()
			.position('top right')
			.content('Saving acknowledgement...')
			.hideDelay(0));

        $scope.acknowledgement.$update(function (response) {
            
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Acknowledgement ' + $scope.acknowledgement.id + ' saved.'));
				
        }, 
        function () {
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Failed to save acknowledgement ' + $scope.acknowledgement.id));
        });
    };
}]);
