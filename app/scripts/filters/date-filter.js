
angular.module('employeeApp.filters')
.filter('dateFilter', [function () {
    function filter(item, target, comparison, success) {
        switch (comparison) {
        case "equals":
            if ((item.getMonth() == target.getMonth()) && (item.getYear() == target.getYear()) && (item.getDate() == target.getDate())) {
                return true;
            }
            break;
        case "greater":
            if (item.getTime() >= target.getTime()) {
                return true;
            }
            break;
        case "less":
            if (item.getTime() <= target.getTime()) {
                return true;
            }
            break;
        default:
            if ((item.getMonth(item) == target.getMonth()) && (item.getYear() == target.getYear()) && (item.getDate() == target.getDate())) {
                return true;
            }
            break;
        }
        return false;
            
    }
    return function (array, key, date, comparison) {
        var predicates = [];
        angular.forEach(array, function (item) {      
            if (item.hasOwnProperty(key)) {
                if (typeof(item[key]) == 'object') {
                    if (filter(item[key], date, comparison)) {
                        predicates.push(item);
                    }
                } else if (typeof(item[key]) == "string") {
                    var testDate = new Date(item[key]);
                    filter(testDate, date, comparison, function (verifiedObj) {
                        predicates.push(verifiedObj); 
                    });
                }
            } 
        });
        return predicates;
    };
}]);
