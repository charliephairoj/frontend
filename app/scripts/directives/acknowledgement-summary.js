
/**
 * @ngdoc directive
 * @name frontendApp.directive:purchaseOrderSummary
 * @description
 * # purchaseOrderSummary
 */
angular.module('employeeApp')
.directive('acknowledgementSummary', ['D3', '$http', '$filter', function (D3, $http, $filter) {
	
	function createChart(element, data) {
		//Create box charts for summary
		var box = D3.select(element[0]).selectAll('div').data(data).enter().append('div')
		.attr('class', function (d) {
			return d.category.toLowerCase() == 'partially shipped' ? 'partially-shipped' : d.category.toLowerCase();
		});
		
		//Attach amount
		/*
		box.append('h2').text(function (d) {
			return "$" + $filter('number')(d.amount);
		});*/
		//Attach count
		box.append('h2').text(function (d) {
			return d.category + " " + d.count;
		});
		
		box.transition().duration(2000).ease('cubic-in-out').style('width', function (d) {
			//Calculate bar width
			var value =  ((d.count / d.total) * 100);
			
			//Equalize the values so that all bars are visible
			if (value < 17) {
				value = 17;
			} else if (value > 70) {
				value = 66;
			}
			
			return value + '%';
		});
	}
	
    return {
      	restrict: 'EA',
      	link: function postLink(scope, element, attrs) {
        	
			//Set class for this element
			element.addClass('acknowledgement-summary');
			
			//Get Summary data
			var promise = $http.get('/api/v1/acknowledgement/stats/');
			promise.then(function (e) {
				e = e.data;
				var total = e.total.count;
				var data = [
					{count:e.acknowledged.count, amount: e.acknowledged.amount, category:'Acknowledged', total:total},
					{count:e.partially_shipped.count, amount: e.partially_shipped.amount, category:'Partially Shipped', total:total},
					{count:e.shipped.count, amount: e.shipped.amount, category:'Shipped', total:total},
				];
				
				//Call fn to create chart
				createChart(element, data);
			});
      	}
    };
}]);
