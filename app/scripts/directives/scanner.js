
angular.module('employeeApp')
.directive('scanner', ['$location', '$rootScope', function ($location, $rootScope) {
	var code = '';
	function dispatch(code) {
		var codes = code.split('-');
		if (codes.length > 1) {
			switch (codes[0]) {
			case 'A':
				$rootScope.$apply(function () {
					$location.path('/order/acknowledgement/' + codes[1]);
				});
				break;
			case 'S':
				$rootScope.$apply(function () {
					$location.path('/order/shipping/' + codes[1]);
				});
				break;
			default:
				break;
			}
		}
	}
    return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			element.keyup(function (e) {
				var key = e.keyCode;
				if ((96 <= key && key <= 105) || (48 <= key && key <= 90)) {
					var letter = String.fromCharCode((96 <= key && key <= 105) ? key - 48 : key);
					code += letter;
				} else {
					switch (key) {
					case 13:
						dispatch(code);
						code = '';
						break;
					case 189:
						code += '-';
						break;
					default:
						break;
					}
				}
			});
		}
	};
}]);
