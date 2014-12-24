
angular.module('employeeApp.directives')
.directive('equipment', ['$http', 'Equipment', '$rootScope', 'Notification', '$timeout', '$window', 'scanner', 'D3', '$compile',
function ($http, Equipment, $rootScope, Notification, $timeout, $window, scanner, D3, $compile) {
	
	var subHTML;
	var brands = [
		'Maktec',
		'Red King',
		'King',
		'DMax',
		'Puma',
		'Ken',
		'Jumbo',
		'Makita',
		'Bosch',
		'BEC',
		'Unknown'
	];
	var statuses = [
		'checked in',
		'checked out',
		'repair',
		'out of service'
	];
	var promise = $http.get('views/templates/supply-details.html');
	promise.then(function (response) {
		subHTML = response.data || response;
	}, function () {
		
	});
	
	function createChart(data, property, largestSize, className) {
		var box = D3.select('div.'+className+' .chart').selectAll('div').data(data).enter().append('div')
		.attr('class', 'price-box').style('left', function (d, i) {return ((i * 6) + i) + 'em';})
		.attr('class', function (d, i) {
			try {
				if (Number(data[i+1][property]) > Number(d[property])) {
					return 'price-box green';
				} else if (Number(data[i+1][property]) < Number(d[property])) {
					return 'price-box red';
				} else {
					return 'price-box black';
				}
			} catch (e) {
				return 'price-box black';
			}
	
		});

		var costSpans = box.append('span').text(function (d) {return d[property];}).attr('class', 'price');
		var dateSpans = box.append('span').attr('class', 'date')
		.text(function (d) {
			var date = new Date(d.timestamp);
			return date.toLocaleDateString('en-us', {year: 'numeric', 'month': 'short', day: 'numeric'});
		});

		D3.select('div.'+className).transition().duration(1000).style('border', '1px solid #CCC').style('height', '10em');
		box.transition().duration(2000).delay(1000).style('height', function (d) { return (((d[property]) / largestSize) * 8) + 'em';});
	}
	
	return {
  		templateUrl: 'views/templates/equipment.html',
		replace: true,
  	  	restrict: 'EA',
		scope: {
			equipment: '=',
			onSelect: '&'
		},
  	  	link: function postLink(scope, element, attrs) {
			
			var fullCompiled = false;
			scope.fetched = false;
			scope.brands = brands;
			scope.statuses = statuses;
			var updateLoopActive = false,
				timeoutPromise,
				cancelWatch = angular.noop(),
				badTypes = ['custom', null];
			
			/*
			 * General Functions
			 */
			
			//Start a watch on the scope for the supply var
			function startWatch() {
				cancelWatch = scope.$watch(function () {
					var equipment = angular.copy(scope.equipment);
					var attrsToRemove = ['last_modified', 'image', 'supplier', 'sticker'];
					for (var i = 0; i < attrsToRemove.length; i++) {
						delete equipment[attrsToRemove[i]];
					}
					return equipment;
				}, function (newVal, oldVal) {
					if (oldVal.hasOwnProperty('id')) {
						
						$timeout.cancel(timeoutPromise);
						
						timeoutPromise = $timeout(function () {
							equipment = angular.copy(scope.equipment);
							Notification.display('Saving DRE-' + scope.equipment.id + '...', false);
							equipment.$update(function () {
								Notification.display('DRE-' + scope.equipment.id + ' saved');
							}, function () {
								Notification.display("There was an error in saving DRE-" + scope.equipment.id);
							});
						}, 1250);
						
					}
				}, true);
			}
			
			function prepareData(response, attrName) {
				var data = response.data || response;
				var subData = [];
				for (var i = 0; i < data.length; i++) {
					subData.push(data[i][attrName]);
				}
				
				largest = Math.max.apply(Math, subData);
				
				return {'largest': Math.max.apply(Math, subData),
						'data': data};
			}
			
			scope.activate = function () {
				
				/*
				if (!fullCompiled) {
					var html = $compile(subHTML)(scope);
					angular.element(element.find('.supply-details')).html(html);
					fullCompiled = true;
				}
				*/
				if (element.hasClass('active')) {
					element.removeClass('active');
					cancelWatch();
				} else {
					element.addClass('active');
					
					try {
						scope.onSelect({'$element': element});
					} catch (e) {
						console.error(e);
					}

					Equipment.get({id:scope.equipment.id}, function (response) {
						angular.extend(scope.equipment, response);
						startWatch();
						scope.fetched = true;
						
					});
				}
			};
			
  	  	}
	};
}]);
