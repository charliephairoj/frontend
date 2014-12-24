
angular.module('employeeApp.directives')
.directive('fadeLoad', [function () {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            element.css('opacity', 0);
            element.bind('load', function () {
                element.fadeTo(1000, 1);
            });
        }
    };
}]);
