'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:fabric
 * @description
 * # fabric
 */
angular.module('employeeApp')
.directive('fabric', ['Notification', function (Notification) {
	return {
	  	templateUrl: 'views/templates/fabric.html',
		replace: true,
	  	restrict: 'E',
	  	link: function postLink(scope, element, attrs) {
			var timeoutVar;
			
			scope.switchActive = function () {
				element.toggleClass('active');
			}
			
			scope.addContent = function (newContent) {
				if (newContent) {
					if (newContent.content && newContent.percentage) {
						scope.fabric.content += ' '
						$scope.fiber.content += newContent.content + ':' + newContent.percentage;
					}
				}
				
			};
			
			scope.getContent = function () {
				var contents = scope.fabric.content.split(' ');
				for (var i = 0; i < contents.length; i++) {
					//contents[i] = contents[i].split(':');
				}
				
				return contents;
			};
			
			scope.update = function () {
				clearTimeout(timeoutVar);
				timeoutVar = setTimeout(function () {
					this.fabric.$update(function () {
						Notification.display('Fabric updated.', 2000);
					}, function () {
					
					});
				}.bind(scope), 3000);
				
			}
	  	}
	};
}]);
