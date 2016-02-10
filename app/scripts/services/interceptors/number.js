
angular.module('employeeApp.services')
.factory('number', ['$q', '$log', function ($q, $log) {
	return {
		'response': function (response) {
			
			var re = /^(?!0+[1-9])\d+(\.\d+)?$/;
			var count = 0;
			
			function refactor(obj) {
				count++;
				
				for (var key in obj) {
					if (typeof(obj[key]) == 'object') {
						refactor(obj[key]);
					} else {
						if (re.test(obj[key])) {
							obj[key] = Number(obj[key]);
						} 
					}					
				}
				
				return obj;
			}
			
			try{
				if (typeof(response) == 'object') {
					response = refactor(response);
				}
			} catch (e) {
				$log.warn(count);
			}
			
			
			return response || $q.when(response);
		},
		'responseError': function (rejection) {
			return $q.reject(rejection);
		}
	};
	
}]).config(function($httpProvider){
	$httpProvider.interceptors.push('number');
});
