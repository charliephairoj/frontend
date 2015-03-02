
angular.module('employeeApp')
.controller('OrderAcknowledgementDetailsCtrl', ['$scope', 'Acknowledgement', '$routeParams', '$http', '$window', '$mdToast', 'FileUploader',
function ($scope, Acknowledgement, $routeParams, $http, $window, $mdToast, FileUploader) { 
	
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
    
	$scope.addFiles = function (files) {
		$scope.acknowledgement.files = $scope.acknowledgement.files || []; 
		
		/* jshint ignore:start */
		for (var i = 0; i < files.length; i++) {
			$scope.acknowledgement.files.push({filename: files[i].name});
			
			var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
			promise.then(function (result) {
				var data = result.data || result;
				for (var h = 0; h < $scope.acknowledgement.files.length; h++) {
					if (data.filename == $scope.acknowledgement.files[h].filename) {
						angular.extend($scope.acknowledgement.files[h], data);
					}
				}
				$scope.acknowledgement.$update();
				
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
