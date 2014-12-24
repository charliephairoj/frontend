
angular.module('employeeApp')
.controller('AdministratorUserDetailsCtrl', ['$scope', 'Group', 'User', '$routeParams', '$location', '$http', 'Notification',
function ($scope, Group, User, $routeParams, $location, $http, Notification) {
    
    var destroyed = false;
    function indexById(list, item) {
        if (!list.hasOwnProperty('length')) {
            throw new TypeError("Expecting an Array");
        }
        if (typeof(item) == 'object') {
            if (!item.hasOwnProperty('id')) {
                throw new TypeError('Expecting an id property for argument 2');
            }
        }
        
        //Set the id var
        var id = typeof(item) == 'object' ? item.id : item;
        for (var i in list) {
            if (list[i].id == id) {
                return i;
            }
        }
        
        return -1;
    }
    
    function merge(list1, list2) {
        for (var i in list1) {
            for (var h in list2) {
                if (list1[i].id == list2[h].id) {
                    list1[i].$checked = true;
                }
                
            }
        }
    }
  
    $scope.groupList = Group.query({limit: 0}, function () {
        merge($scope.groupList, $scope.user.groups);
    });
    $scope.user = User.get({'id': $routeParams.id}, function () {
        merge($scope.groupList, $scope.user.groups);
    });
    
    /*
	 * Add Profile Image
	 * 
	 * Recieves the image data as an argument. The data is then applied 
	 * to the user and the user is saved
	 */
	$scope.addImage = function (imageData) {
		$scope.showAddImage = false;
		$scope.user.image = imageData.hasOwnProperty('data') ? imageData.data : imageData;
		$scope.user.$update();	
	};
    
    $scope.changePassword = function () {
        var url = "/api/v1/user/" + $scope.user.id + "/change_password";
        $http.post(url, $scope.password).success(function (e) {
            Notification.display('Password successfully changed');
            $scope.password = {};
            $scope.showChangePassword = false;
        }).error(function (err) {
			console.error(err);
		});
    };
    
    $scope.updateGroup = function (group) {
        if (group.$checked) {
            if ($scope.user.groups.indexOfById(group.id) === -1) {
                $scope.user.groups.push(angular.copy(group));
            }
        } else {
			var index = $scope.user.groups.indexOfById(group.id);
            if (index != -1) {
                $scope.user.groups.splice(index, 1); 
            }
        }
        //Save the model
        Notification.display('Updating ' + $scope.user.username + '...', false);
        $scope.user.$update(function (response) {
            Notification.display($scope.user.username + ' updated.');
        });
    };
    
	$scope.remove = function () {
		if ($scope.currentUser.hasPermission('delete_user')) {
			Notification.display('Deleting user ' + $scope.user.username + '...', false);
			$scope.user.$delete(function () {
				Notification.display($scope.user.username + ' deleted.');
				destroyed = true;
				$location.path("/administrator/user");
			});
		}
    };
    
    $scope.update = function () {
        $scope.user.$update();
    };
    
    $scope.$on('$destroy', function () {
		if (!destroyed) {
			$scope.user.$update(); 
		}
    });

}]);
