'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:dealEventMessage
 * @description
 * # dealEventMessage
 */
angular.module('employeeApp')
.directive('dealEventMessage', function () {
	var stages = [
		'Opportunity',
		'Qualified',
		'Meeting',
		'Proposal', 
		'Closed Won',
		'Closed Lost',
		'emailed',
		'called',
		'had a meeting with'
	];
	
	function formatEventDescription (description) {
		for (var i = 0; i < stages.length; i++) {
			if (description.indexOf(stages[i])) {
				var replacement = "<b>" + stages[i] + "</b>";
				description = description.replace(stages[i], replacement);
			}
		}
		
		return description;
	}
	
	return {
		restrict: 'E',
		scope: {
			'description': '='
		},
		link: function postLink(scope, element, attrs) {
			var description = scope.description;
			var newDescription = formatEventDescription(description);
			element.html(newDescription);
		}
	};
});
