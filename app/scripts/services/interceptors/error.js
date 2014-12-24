
angular.module('employeeApp.services')
.factory('requestError', ['$q', 'Notification', function ($q, Notification) {
	return {
		'response': function (response) {
			return response || $q.when(response);
		},
		'responseError': function (rejection) {
			Notification.display(rejection.data || "An Error Occurred.");
			console.error(rejection);
			return $q.reject(rejection);
		}
	};
	
}]).config(function($httpProvider){
	$httpProvider.interceptors.push('requestError');
});
