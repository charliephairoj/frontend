
angular.module('employeeApp')
.controller('DialogsAddEmployeeCtrl', ['$scope', 'Employee', '$mdToast',
function ($scope, Employee, $mdToast) {
	
	$scope.employee = new Employee();
	$scope.departments = [
		'carpentry',
		'painting',
		'polishing',
		'sewing',
		'upholstery',
		'foam',
		'management',
		'tufting',
		'shearing',
		'dying',
		'inventory',
		'packing',
		'front office',
		'graphics',
		'accounting',
		'landscaping'
	];
	
	
    $scope.addImage = function (data) {
		
		var image = data.hasOwnProperty('data') ? data.data : data;
		$scope.employee.image = image;
		
    };
	
	$scope.create = function () {
		$mdToast.show($mdToast.simple()
			.hideDelay(0)
			.position('top right')
			.content('Creating employee ' + $scope.employee.first_name + '.'));
		$scope.employee.$create(function () {
			$mdToast.hide();
			$mdToast.show($mdToast.simple()
				.hideDelay(2000)
				.position('top right')
				.content('Employee ' + $scope.employee.first_name + ' created.'));
				
			$scope.reset();
		});
	};
	
	$scope.reset = function () {
		$scope.employee = new Employee();
	};
	
}]);
