
angular.module('employeeApp')
.controller('AdministratorGroupDetailsCtrl', ['$scope', 'Group', 'Permission', '$routeParams', '$location',
function ($scope, Group, Permission, $routeParams, $location) {
  
    /*
     * Return the index of the first
     * occurence of the id in the list
     */
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
    
    /*
     * Marks all items in list1 with $checked = true
     * property if it is in list 2
     */
    function merge(list1, list2) {
        for (var i in list1) {
            for (var h in list2) {
                if (list1[i].id == list2[h].id) {
                    list1[i].$checked = true;
                }
                
            }
        }
    }
    
    /*
     * Calls for updated verions of the resources
     */
    $scope.permissionList = Permission.query({limit: 0}, function () {
        merge($scope.permissionList, $scope.group.permissions);
    });
    $scope.group = Group.get({'id': $routeParams.id}, function () {
        merge($scope.permissionList, $scope.group.permissions);
    });
    
    
    /*
     * Removes or adds a permission to the group
     * permissions based on whether or not 
     */
    $scope.updatePermission = function (permission) {
        
        if (permission.$checked) {
            if (indexById($scope.group.permissions, permission) == -1) {
                $scope.group.permissions.push(angular.copy(permission));
            }
        } else {
            var index = indexById($scope.group.permissions, permission);
            if (index > -1) {
                $scope.group.permissions.splice(index, 1); 
            }
        }
        
        $scope.group.$update(function (response) {

        });
    };
    
    /*
     * Deletes the group
     */
    $scope.remove = function () {
        $scope.group.$delete(function () {
            $location.path("/groups");
        });
    };
    
    $scope.$on('$destroy', function () { 
        $scope.group.$update();
    });
}]);
