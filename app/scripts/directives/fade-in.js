
angular.module('employeeApp')
.directive('fadeIn', [function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            element.addClass('fadeIn');
        }
    };
}]);
