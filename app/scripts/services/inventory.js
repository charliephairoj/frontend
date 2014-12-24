
angular.module('employeeApp')
.factory('inventory', [function() {
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
