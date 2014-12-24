
angular.module('employeeApp')
.directive('clickUrl', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind('click', function () {
				scope.category = 'fabric';
                $location.path(attr.clickUrl);
                scope.$apply();
            });
            
        }
    };
}]);
