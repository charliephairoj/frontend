
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
				console.log($window);
				var hash = $window.location.hash;
				console.log(hash);
				var url = '/login';
				console.log((hash !== '' && hash !== '#/' && hash))
				if (hash !== '' && hash !== '#/' && hash) {
					url += '?next=';
					hash = hash.split('#')[1];
					url += hash;

					console.log(url);
				}
				
				
				//$window.location.href = url;
			}

			return $q.reject(rejection);
		}
	};

}]).config(function($httpProvider){
	$httpProvider.interceptors.push('requestError');
});
