
angular.module('employeeApp.filters')
.filter('groupBy', [function () {
    //function to compare


    var dict = {};
	return function (array, key, value) {

        for (var i in array) {
            if (array[i][key]) {
                dict[array[i][key]] = dict[array[i][key]] ? dict[array[i][key]] : [];
                dict[array[i][key]].push(array[i]);
            }
            
        }
        var list = [];

        for (var k in dict) {
            console.log(dict[k]);
            list.push(dict[k]);
        }
        console.log(list);
        return list;
	};
}]);
