
angular.module('employeeApp.services')
.factory('requestError', ['$q', '$window', function ($q, $window) {
	return {
		'response': function (response) {
			return response || $q.when(response);
		},
		'responseError': function (rejection) {
			if (rejection.status > 400) {
				var msg = "AJAX failed. status: " + rejection.status + ". response: " + rejection.statusText;
				var promise = $.ajax({
					type: 'POST',
					url: '/api/v1/client/log/',
					data: {'type': 'error', 'message': msg},
					processData: true
				});
			}

			if (rejection.status === 403) {
				console.log(rejection);
				$window.location.href = '/login';
			}

			return $q.reject(rejection);
		}
	};

}]).config(function($httpProvider){
	$httpProvider.interceptors.push('requestError');
});
