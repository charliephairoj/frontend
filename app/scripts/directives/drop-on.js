
angular.module('employeeApp')
.directive('dropOn', [function () {
    function emptyStrFilter(element, index, array) {
        return (element !== "");
    }
    /*
     * Function helps get the target object
     * in the scope
     */
    function getTarget(scope, targetString) {
        //Assigns vars
        
        /*
         * Extracts the first string part, which
         * we can expect to exsist. Then we extract
         * the last part, which we check if we need
         * to make
         */
        var preTarget = targetString.split(/\.\w*$/).shift(),
            targetObj = targetString.split(/\./).pop(),
            target;
        //Evaluates against scope
        target = scope.$eval(preTarget);
        //check if obj exsists and create if not
        target[targetObj] = target[targetObj] || {};
        //advances the progressing
        target = target[targetObj];
        //Return 
        return target;
    }
    /*
     * Function returns the data from the drop event
     * and automatically parses it
     */
    function getData(event) {
        return JSON.parse(event.originalEvent.dataTransfer.getData('text/plain'));
    }
    //Prevent Propagation
    function preventPropagation(event) {
        event.stopPropagation();
        event.preventDefault();
        event.originalEvent.dataTransfer.effectAllowed = "copy";
    }
    
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            element.bind('drop', function (event) {
                preventPropagation(event);
                element.removeClass('drag');
                /*
                 * Gets the target and copies
                 * the data from the dragged 
                 * object to it
                 */
                scope.$apply(function () {
                    var target = getTarget(scope, attrs.dropOn);
                    angular.copy(getData(event), target);
                });
                
                
            }).bind('dragover', function (event) {
                preventPropagation(event);
                element.addClass('drag');
            }).bind('dragleave', function (event) {
                preventPropagation(event);
                element.removeClass('drag');
            });
        }
    };
}]);
