
angular.module('employeeApp.filters')
.filter('exclude', [function () {
    //function to compare
	return function (array, key, value) {
          
        if (!(array instanceof Array)) {
			return [];
        }
       
        var filtered = [];
        
        for (var i in array) {
            if (array[i][key] != value) {
                filtered.push(array[i]);
            }
        }
        
        return filtered;
	};
}]);
