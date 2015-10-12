
angular.module('employeeApp.services')
.factory('requestError', ['$q', 'Notification', '$log', function ($q, Notification, $log) {
	return {
		'response': function (response) {
			return response || $q.when(response);
		},
		'responseError': function (rejection) {
			Notification.display(rejection.data || "An Error Occurred.");
			$log.error(rejection);
			return $q.reject(rejection);
		}
	};
	
}]).config(function($httpProvider){
	$httpProvider.interceptors.push('requestError');
});
