
angular.module('employeeApp')
.controller('OrderAcknowledgementDetailsCtrl', ['$scope', 'Acknowledgement', '$routeParams', '$http', '$window', 'Notification', 'FileUploader', 'Project', '$mdDialog', 'Fabric',
function ($scope, Acknowledgement, $routeParams, $http, $window, Notification, FileUploader, Project, $mdDialog, Fabric) { 
	
	//Show system notification
	var notification = Notification.display('Retrieving acknowledgement...', false);
		
	//Set Vars
	$scope.showCal = false;
	
	//GET request server for Acknowledgements
	$scope.ack = Acknowledgement.get({'id': $routeParams.id, 'pdf': true}, function  () {
		notification.hide();
		
		//Reconcile the project so that it is shown to the user
		if ($scope.projects.length > 0 && $scope.acknowledgement.project) {
			var index = $scope.projects.indexOfById($scope.acknowledgement.project.id);
			$scope.acknowledgement.project = $scope.projects[index];
		}
	});
	
	$scope.projects = Project.query({limit:0, page_size:1000}, function () {
		
		//Reconcile the project so that it is shown to the user
		if ($scope.acknowledgement.id && $scope.acknowledgement.project) {
			var index = $scope.projects.indexOfById($scope.acknowledgement.project.id);
			$scope.acknowledgement.project = $scope.projects[index];
		}
	});

	//get all fabrics
	$scope.fabrics = Fabric.query({limit:0, page_size:1000});
	
	//Help determine if an event occured for the given acknowledgement
	$scope.hasEvent = function (ack, e) {
		for (var i in ack.logs) {
			if (ack.logs[i].hasOwnProperty('message')) {
				if (ack.logs[i].message.indexOf(e) > -1) {
					return true;
				}
			}
			
		}
		
		return false;
	};
	
	//Request pdf for acknowledgements from server
    $scope.getPDF = function (type) {
		try {
			var address = $scope.acknowledgement.pdf[type.toLowerCase()];
			$window.open(address);
		} catch (e) {
			var message = "Missing " + type + " pdf for Acknowledgement #" + $scope.acknowledgement.id;
			
			Notification.display(message, false);
	
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
	
	// Change Fabric
	$scope.changeFabric = function ($index) {
		
		$mdDialog.show({
			templateUrl: 'views/templates/change-fabric.html',
			controllerAs: 'ctrl',
			locals: {item: $scope.acknowledgement.items[$index],
					 fabrics: $scope.fabrics},
			controller: 'DialogsChangeFabricCtrl',
			bindToController: true,
		});
	
	};
	
    //Save updates to the server
    $scope.save = function () { 
		
		var notification = Notification.display('Saving acknowledgement...', false);

        $scope.acknowledgement.$update(function (response) {
            notification.hide();
			Notification.display('Acknowledgement ' + $scope.acknowledgement.id + ' saved.', 2000);
			
				
			//Reconcile the projects so that the differences are shown the user
			var index = $scope.projects.indexOfById($scope.acknowledgement.project.id);
			$scope.acknowledgement.project = $scope.projects[index];
				
			//Convert string into numbers for quantity and unit_price and fabric quantity
			for (var i = 0; i < $scope.acknowledgement.items.length; i++) {
				$scope.acknowledgement.items[i].quantity = Number($scope.acknowledgement.items[i].quantity);
				$scope.acknowledgement.items[i].unit_price = Number($scope.acknowledgement.items[i].unit_price);
				$scope.acknowledgement.items[i].fabric_quantity = Number($scope.acknowledgement.items[i].fabric_quantity);
			
				//Convert string into numbers for pillow fabric quantity
				for (var h = 0; h < $scope.acknowledgement.items[i].pillows.length; h++) {
					$scope.acknowledgement.items[i].pillows[h].fabric_quantity = Number($scope.acknowledgement.items[i].pillows[h].fabric_quantity);
				}
			}
        }, 
        function () {
			Notification.display('Failed to save acknowledgement ' + $scope.acknowledgement.id, false);
        });
    };
}]);
