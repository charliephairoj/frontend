
angular.module('employeeApp')
.controller('ProjectViewCtrl', ['$scope', 'Project', 'Notification', 'Customer', '$location', '$mdDialog', '$mdToast',
function ($scope, Project, Notification, Customer, $location, $mdDialog, $mdToast) {
    
    //Controlling attributes
    $scope.showAddProject = false;
    
    //Query the server for projects continouosly
    $scope.projects = Project.query();
    $scope.customers = Customer.query();
    
	$scope.showAddProject = function () {
		$scope.project = new Project();
		$mdDialog.show({
			templateUrl: 'views/templates/add-project.html',
			controllerAs: 'ctrl',
			controller: function () {this.parent = $scope;}
		});
	};
	
	$scope.completeAddProject = function  () {
		$mdDialog.hide();
		
		$mdToast.show($mdToast
			.simple()
			.content("Creating project...")
			.hideDelay(0));
			
		$scope.project.$create(function () {
			$mdToast.hide();
			$location.path('/project/'+ $scope.project.id);
		}, function () {
			
		});
	};
	
	$scope.cancelAddProject = function  () {
		$mdDialog.hide();
	};
	
	
	$scope.$watch('query', function (q) {
		if (q) {
			Project.query({limit: q.length, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.projects.indexOfById(resources[i].id) == -1) {
						$scope.projects.push(resources[i]);
					}
				}
				//index = 0;
				//changeSelection(index);
			});
		}
	});
	
    //Create new project
    $scope.create = function () {
        Notification.display('Creating new project...', false);
        var project = new Project();
        angular.extend(project, $scope.project);
        project.$create(function (response) {
            Notification.display('New project created.');
            $scope.projectList.push(response);
            $scope.project = {};
            $scope.showAddProject = false;
        });
    };
    
}]);
