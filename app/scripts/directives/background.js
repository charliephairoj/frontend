
angular.module('employeeApp')
.directive('background', [function () {
    return {
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
            if (attrs.backgroundImages) {
                
            } else {
                throw new TypeError("Missing Images for Background Directive.");
            }
        }
    };
}]);
