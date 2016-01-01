
angular.module('employeeApp')
.controller('HrEmployeeViewCtrl', ['$scope', 'Employee', 'Notification', '$mdDialog',
function ($scope, Employee, Notification, $mdDialog) {
    
	var fetching = false;
	$scope.employees = Employee.query();
    
	$scope.save = function (employee) {
		Notification.display('Updating employee: ' + employee.name + '...', false);
		employee.$update(function () {
			Notification.display('Employee: ' + employee.name + ' updated.');
		});
	};
	
	/*
	* Search mechanism
	* 
	* This function will send a GET request to the server
	* whenever the query string changes and that string will 
	* be sent along as a parameter. 
	*/
	$scope.$watch('query', function (q) {
		if (q) {
			Employee.query({limit: 10, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.employees.indexOfById(resources[i].id) == -1) {
						$scope.employees.push(resources[i]);
					}
				}
			});
		}
	});
	
	/*
	* Load more supplies
	* 
	* This function will load more supplies from the server
	* be using the current number of supplies as the offset
	*/
	$scope.loadNext = function () {
		if (!fetching) {
			Notification.display('Loading more employees...', false);
			Employee.query({
				offset: $scope.employees.length,
				limit: 50,
			}, function (resources) {
				Notification.hide();
				for (var i = 0; i < resources.length; i++) {
					if ($scope.employees.indexOfById(resources[i].id) == -1) {
						$scope.employees.push(resources[i]);
					}
				}
			});
		}
	};
}]);
