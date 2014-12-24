
angular.module('employeeApp')
.factory('AcknowledgementItem', ['$resource', function($resource) {
	return $resource('/api/v1/acknowledgement-item/:id/', {id:'@id'}, {
		update: {method: 'PUT'},
		create: {method: 'POST'}
	});   
}]);
