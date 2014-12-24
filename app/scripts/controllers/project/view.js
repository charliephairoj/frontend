
angular.module('employeeApp')
.controller('ProjectViewCtrl', ['$scope', 'Project', 'Notification', 'Customer', '$location',
function ($scope, Project, Notification, Customer, $location) {
    
    //Controlling attributes
    $scope.showAddProject = false;
    
    //Query the server for projects continouosly
    $scope.projects = Project.query();
    $scope.customers = Customer.query();
    
    //Grid options
    $scope.gridOptions = {
        data: 'projectList',
        columnDefs: [{field: 'description', displayName: 'Description'},
                     {field: 'customer.name', displayName: 'customer'},
                     {field: 'type', displayName: 'Type'},
                     {field: 'status', displayName: 'Status'},
                     {field: 'delivery_date', displayName: 'Delivery Date', filter: 'date:"MMMM d, yyyy"'}]
        
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
