
angular.module('employeeApp.directives')
.directive('checkmark', [function () {
    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {
            if (!attrs.checkmark) {
                throw new TypeError("Missing expression to evaluate.");
            }
            var check = angular.element('<span class="checkmark">✓</span>');
            
            scope.$watch(attrs.checkmark, function (val) {
                if (val) {
                    element.append(check);
                } else {
                    check.remove();
                }
            });
        }
    };
}]);
