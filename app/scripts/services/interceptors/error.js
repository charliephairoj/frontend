
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
				var hash = $window.location.hash;
				var url = '/login';
				if (hash !== '' && hash !== '#/' && hash) {
					url += '?next=';
					hash = hash.split('#')[1];
					url += hash;

				}
				
				
				//$window.location.href = url;
			}

			return $q.reject(rejection);
		}
	};

}]).config(function($httpProvider){
	$httpProvider.interceptors.push('requestError');
});
