
angular.module('employeeApp.services')
.factory('dateParser', ['$q', function($q) {
	function formatter(obj){
		if(obj.hasOwnProperty('delivery_date')){
			obj.delivery_date = new Date(obj.delivery_date);
		}
		if(obj.hasOwnProperty('time_created')){
			obj.time_created = new Date(obj.time_created);
		}
		if(obj.hasOwnProperty('last_login')){
			obj.last_login = new Date(obj.last_login);
		}
		return obj;
	}
	
	return {
		'response': function (response) {
			try {
				var data = response.data;
				if(angular.isArray(data)){
					for(var i=0; i<data.length; i++){
						try{
							data[i] = formatter(data[i]);
						} catch(e) {}
					}
				}else if(angular.isObject(data)){
					data = formatter(data);
				}
				response.data = data;
			} catch(e) {
				console.error(e);
			}
			return response || $q.when(response);
		},
		'responseError': function (rejection) {
			return $q.reject(rejection);
		}
	};
	
}]).config(function($httpProvider){
	$httpProvider.interceptors.push('dateParser');
});
