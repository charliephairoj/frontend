
angular.module('employeeApp')
.controller('ProjectViewCtrl', ['$scope', 'Project', 'Notification', 'Customer', '$location', '$mdDialog', '$mdToast', '$log', '$filter',
function ($scope, Project, Notification, Customer, $location, $mdDialog, $mdToast, $log, $filter) {
    
    //Controlling attributes
    $scope.showAddProject = false;
    $scope.query = {};
    //Query the server for projects continouosly
    $scope.projects = Project.query();
	$scope.customers = Customer.query();
	var fetching = false;
    
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

	$scope.loadNext = function () {
		console.log('scroll end');
		if (!fetching) {
			Notification.display('Loading more projects...', false);
			fetching = true;
			Project.query({
				limit: 50,
				offset: $scope.projects.length
			}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.projects.indexOfById(resources[i].id) == -1) {
						$scope.projects.push(resources[i]);
					}
				}
				$mdToast.hide();
				fetching = false;
			}, function (e) {
				Notification.display('Unable to load more projects...', false);
				$log.error(e);
				fetching = false;
			});
		}
	};
	
	$scope.cancelAddProject = function  () {
		$mdDialog.hide();
	};
	
	
	$scope.$watch('query.$.$', function (q) {
		console.log(q);
		if (q) {
			Project.query({limit: q.length * 2, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.projects.indexOfById(resources[i].id) == -1) {
						$scope.projects.push(resources[i]);
					}
				}
				//index = 0;
				//changeSelection(index);

				console.log($filter('filter')($scope.projects, q));
			});
		}
	});
	
	/*
	 * Navigate to the details page for an acknowledgement
	 */
	$scope.navigate = function (id) {
		$location.path('/project/' + id);
	};
	
	/*
	 * Watch for changes in the status of the project
	 */
	/*
	$scope.$watch('projects', function (newVal, oldVal) {
		
		// Callback to when the acknowledgement is finished updating
		function postUpdate (resp) {
			$mdToast.show($mdToast
						.simple()
						.position('top right')
						.hideDelay(2000)
						.content('Project: ' + resp.codename + " status updated to '" + resp.status.toLowerCase() + "'"));
		}
		
		if (newVal && oldVal) {
			try{
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i].id === oldVal[i].id) {
						if (newVal[i].status.toLowerCase() != oldVal[i].status.toLowerCase()) {
							$mdToast.show($mdToast
											.simple()
											.position('top right')
											.hideDelay(0)
											.content('Updating Project: ' + newVal[i].codename + ' status...'));
							newVal[i].$update(postUpdate);
						}
					}
				}
			} catch (e) {
				$log.error(e);
			}
		}
		
	}, true);
	*/
	function postUpdate (resp) {
		$mdToast.show($mdToast
					.simple()
					.position('bottom right')
					.hideDelay(2000)
					.content('Project: ' + resp.codename + " status updated to '" + resp.status.toLowerCase() + "'"));
	}
	
	$scope.update = function (project) {
		$mdToast.show($mdToast
				.simple()
				.position('bottom right')
				.hideDelay(0)
				.content('Updating Project: ' + project.codename + ' status...'));
		project.$update(postUpdate, function (e) {

			var message = e;
			$log.error(e);
			$mdToast.show($mdToast
				.simple()
				.position('bottom right')
				.hideDelay(2000)
				.content(message));
		});
	};

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
