
angular.module('employeeApp.services')
.factory('KeyboardNavigation', ['$rootScope', '$log', function KeyboardNavigation($rootScope, $log) {
	function KeyboardNavigationFactory(configs) {
		
		var currentIndex = 0,
			enabled = false,
			scope = configs ? configs.scope ? configs.scope  : $rootScope.$new() : $rootScope.$new(),
			onleft,
			onright, 
			onup,
			ondown,
			onenter;
			
		configs = configs || {};
			
		function changeIndex(valInc){
			if (configs.array) {
				scope.$apply(function() {
					currentIndex += valInc;
				});
			}
		}
		
		function directionHandler(evt, fn) {
			evt.preventDefault();
			evt.stopPropagation();
			fn();
		}
		
		function parseKeydown(evt) {
			
			
			switch(evt.which) {
				case 37:
					if (onleft) {directionHandler(evt, onleft);}
					break;
				case 38:
					changeIndex(-1);
					if (onup) {directionHandler(evt, onup);}
					break;
				case 39:
					if (onright) {directionHandler(evt, onright);}
					break;
				case 40:
					changeIndex(1);
					if (ondown) {directionHandler(evt, ondown);}
					break;
				case 13:
					if (onenter) {directionHandler(evt, onenter);}
					break;
			
			}
		}
		
		function disable() {
			if (enabled) {
				$(window).off('keydown', parseKeydown);
				enabled = false;
			}
		}
		
		function enable() {
			if (!enabled) {
				$(window).on('keydown', parseKeydown);
				enabled = true;
			}
		}
		
		function KeyboardNav() {
			
			enable();
			
			if (configs.scope) {
				configs.scope.$on('$destroy', function () {
					disable();
				});
			}
		}
		
		KeyboardNav.prototype.disable = function () {
			disable();
		};
		
		KeyboardNav.prototype.enable = function () {
			enable();
		};
		
		Object.defineProperties(KeyboardNav.prototype, {
			onup: {
				set: function (fn) {
					onup = fn;
				}
			},
			ondown: {
				set: function (fn) {
					ondown = fn;
				}
			},
			onleft: {
				set: function (fn) {
					onleft = fn;
				}
			},
			onright: {
				set: function (fn) {
					onright = fn;
				}
			},
			onenter: {
				set: function (fn) {
					onenter = fn;
				}
			}
		});
		
		return new KeyboardNav();
	}
	
	return KeyboardNavigationFactory;
}]);
