
angular.module('employeeApp')
.controller('OrderEstimateDetailsCtrl', ['$scope', 'Estimate', '$routeParams', '$http', '$window', '$mdToast', 'FileUploader',
function ($scope, Estimate, $routeParams, $http, $window, $mdToast, FileUploader) { 
	
	//Show system notification
	$mdToast.show($mdToast
		.simple()
		.position('top right')
		.content('Loading estimate...')
		.hideDelay(0));
		
	//Set Vars
	$scope.showCal = false;
	
	//GET request server for Acknowledgements
	$scope.estimate = Estimate.get({'id': $routeParams.id, 'pdf': true}, function  () {
		$mdToast.hide();
	});
	
	//Grid Options
	$scope.gridOptions = {
		data: 'acknowledgement.products',
		columnDefs: [{field: 'image', displayName: 'Image'}]
	};

	

	//Request log data for acknowledgement
	/*
    $scope.viewLog = function () {
        $http.get("acknowledgement/" + $scope.estimate.id + "/log").success(function (data) {
			angular.forEach(data, function (log) {
				$scope.logs = $scope.logs || [];
				$scope.logs.push(log);
				$scope.showLog = true;
			});
		});
	};
    */
	
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
				$scope.estimate.$update();
				
			}, function () {
				
			})
		}
		/* jshint ignore:end */
		
	};
	
    //Save updates to the server
    $scope.save = function () { 
		
		$mdToast.show($mdToast
			.simple()
			.position('top right')
			.content('Saving acknowledgement...')
			.hideDelay(0));

        $scope.estimate.$update(function (response) {
            
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Acknowledgement ' + $scope.estimate.id + ' saved.'));
				
        }, 
        function () {
			$mdToast.show($mdToast
				.simple()
				.position('top right')
				.content('Failed to save acknowledgement ' + $scope.estimate.id));
        });
    };
}]);
