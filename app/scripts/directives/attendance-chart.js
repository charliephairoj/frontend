

angular.module('employeeApp')
.directive('attendanceChart', ['D3', function (D3) {
    return {
      	templateUrl: 'views/templates/attendance-chart.html',
		replace: true,
      	restrict: 'EA',
		scope: {
			data: '=',
			active: '=',
			onSelect: '&'
		},
      	link: function postLink(scope, element, attrs) {
			function activate() {
				var barWidth = element.parents('.suppliers').width() / 2,
					barHeight = 20,
					leftMargin = 90,
					times = [],
					selectedAttendances = [],
					selectedElements = [],
					origin;
					
				//Flags
				var mouseDown = false;

				for (var i = 0; i < scope.data.length; i++) {
					times.push(scope.data[i].total_time);
				}
				var maxTime = D3.max(times);
			
				var chart = D3.select(element[0])
				.append('svg')
				.attr('class', 'chart')
				.attr('width', barWidth)
				.attr('height', 20 * scope.data.length);
			
				var x = D3.scale.linear()
				    .domain([0, D3.max(times)])
				    .range([0, barWidth - leftMargin]);
			
				var bar = chart.selectAll('g')
				.data(scope.data)
				.enter()
				.append('g')
				.attr('transform', function (d, i) {
					return "translate(0," + i * 20 + ")";
				})
				.on('mouseover', function (d) {
					var selectedBar = D3.select(this);
					if (mouseDown) {
						var index = selectedAttendances.indexOfById(d);
						if (index == -1) {
							selectedAttendances.push(d);
							selectedElements.push(this);
							selectedBar.attr('class', 'selected');
							
						}
					} else {
						scope.$apply(function () {
							scope.active = d;
						});
						
						selectedBar.attr('class', 'active');
					
					}
					
					
				})
				.on('mouseout', function (d) {
					var yPos = $(this).offset().top;
					var selectedBar = D3.select(this);
					if (mouseDown) {
						console.log(yPos+" : "+D3.event.y);
						
						var index = selectedAttendances.indexOfById(d);
						if (yPos >= D3.event.y) {
							selectedBar.classed('selected', false);
							selectedAttendances.splice(index, 1);
						} 
					} else {
						selectedBar.classed('active', false);
					}
				})
				.on('mousedown', function (d) {
					mouseDown = true;
					selectedAttendances.push(d);
					var evt = D3.event;
					origin = {x:evt.x, y:evt.y};
					D3.select(this)
					.classed('selected', true)
					.classed('active', false);
				})
				.on('mouseup', function () {
					mouseDown = false;
					
					if (selectedAttendances.length) {
						window.alert(selectedAttendances.length);
						for (var i = 0; i < selectedElements.length; i++) {
							$(selectedElements[i]).removeClass('selected');
						}
						
						selectedAttendances = [];
						selectedElements = [];
					}
				});
				
				
			
				var otRect = bar.append("rect")
				.attr('class', 'overtime')
				.attr("x", leftMargin)
				.attr('width', 0)    
				.attr("height", barHeight - 1);
			
				var regRect = bar.append("rect")
				.attr('class', 'regular-time')
				.attr('x', leftMargin)
				.attr('width', 0)
				.attr('height', barHeight - 1);
			
				var date = bar.append("text")
				.attr('class', 'date')
				.style('width', leftMargin+'px')
				.attr("x", leftMargin - 2)
				.attr("y", 20 / 2)
				.attr("dy", ".35em")
				.text(function (d) {
					var date = new Date(d.date);
					return date.toLocaleDateString('en-us', {year: 'numeric', 'month': 'short', day: 'numeric'});
				});
			
				otRect.transition()
				.duration(2000)
				.delay(function () {
					return Math.random() * 100;
				})
				.attr("width", function (d) {
			    	return d.total_time ? (d.total_time / maxTime) * barWidth - leftMargin : 0;
			    });
			
				regRect.transition()
				.duration(2000)
				.delay(function () {
					return Math.random() * 100;
				})
				.attr("width", function (d) {
			    	return d.regular_time ? (d.regular_time / maxTime || 0) * barWidth - leftMargin : 0;
			    });
				
			}
			
			scope.$watch('data', function (newVal) {
				if (newVal) {
					activate();
				}
			});
		}
    };
}]);
