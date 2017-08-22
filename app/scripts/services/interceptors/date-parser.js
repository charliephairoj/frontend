
angular.module('employeeApp.services')
.factory('dateParser', ['$q', function($q) {
	var attrs = [
		'delivery_date',
		'time_created',
		'last_login',
		'last_contacted',
		'last_modified',
		'occurred_at',
		'employment_date',
		'receive_date'
	]
	
	function parseObj(data) {
		for (var i in data) {
			if (typeof(data[i]) === 'object') {
				parseObj(data[i]);
			} else if (typeof(data[i]) === 'string') {
				if (attrs.indexOf(i) > -1) {
					data[i] = new Date(data[i]);
				}
			}
		}
	}
	
	
	return {
		'response': function (response) {
			
			var data = response.data;
			
			if(angular.isArray(data)) {
				for(var i=0; i < data.length; i++) {
					parseObj(data[i]);
				}
			} else if(angular.isObject(data)) {
				parseObj(data);
			}
			response.data = data;
			return response || $q.when(response);
		},
		'responseError': function (rejection) {
			return $q.reject(rejection);
		}
	};
	
}]).config(function($httpProvider){
	$httpProvider.interceptors.push('dateParser');
});
