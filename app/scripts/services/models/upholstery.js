
angular.module('employeeApp.services')
.factory('Upholstery', ['$resource',function ($resource) {
    return $resource('/api/v1/upholstery/:id/', {id:'@id'}, {
		update: {
			method: 'PUT'
        },
        create: {
			method: 'POST'
        }
	});   
}]);
