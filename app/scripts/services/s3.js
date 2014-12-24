
angular.module('employeeApp')
.factory('s3', [function() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
		someMethod: function() {
			return meaningOfLife;
		}
    };
}]);
