
angular.module('employeeApp')
.directive('employee', ['$rootScope', '$timeout', 'Notification', 'Attendance',
function ($rootScope, $timeout, Notification, Attendance) {
    return {
      	templateUrl: 'views/templates/employee.html',
		replace: true,
      	restrict: 'EA',
		scope: {
			employee: '=',
			onSelect: '&'
		},
      	link: function postLink(scope, element, attrs) {
			
			scope.fetched = false;
			scope.departments = [
				'carpentry',
				'painting',
				'polishing',
				'sewing',
				'upholstery',
				'foam',
				'management',
				'tufting',
				'shearing',
				'dying',
				'inventory',
				'packing',
				'front office',
				'graphics',
				'accounting',
				'landscaping'
			];
			
			var updateLoopActive = false,
				timeoutPromise,
				cancelWatch = angular.noop(),
				badTypes = ['custom', null];
			
			/*
			 * General Functions
			 */
			
			//Start a watch on the scope for the supply var
			
			function startWatch() {
				
				cancelWatch = scope.$watch('employee', function (newVal, oldVal) {
					if (!updateLoopActive && oldVal.hasOwnProperty('id')) {
						updateLoopActive = true;
						timeoutPromise = $timeout(function () {
							var employee = angular.copy(scope.employee);
							Notification.display('Updating ' + scope.employee.name + '...', false);
							employee.$update(function () {
								updateLoopActive = false;
								Notification.display(scope.employee.name + ' updated');
							}, function () {
								Notification.display("There was an error in updating " + scope.employee.name);
							});
						}, 5000);
					}
				}, true);
			}
			
			scope.activate = function () {
				if (element.hasClass('active')) {
					element.removeClass('active');
					cancelWatch();
				} else {
					element.addClass('active');
					startWatch();
					
					try {
						scope.onSelect({'$element': element});
					} catch (e) {
						console.error(e);
					}
					
					scope.attendances = Attendance.query({
						employee__id:scope.employee.id
					}, function (response) {
						scope.attendances = [];
						scope.attendances.push.apply(scope.attendances, response);
					});	
				}
			};
      	}
    };
}]);
