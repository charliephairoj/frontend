
/**
 * @ngdoc directive
 * @name frontendApp.directive:purchaseOrderSummary
 * @description
 * # purchaseOrderSummary
 */
angular.module('employeeApp')
.directive('purchaseOrderSummary', ['D3', '$http', '$filter', function (D3, $http, $filter) {
	
	function createChart(element, data) {
		//Create box charts for summary
		var box = D3.select(element[0]).selectAll('div').data(data).enter().append('div')
		.attr('class', function (d) {
			return d.category.toLowerCase();
		});
		
		//Attach amount
		box.append('h2').text(function (d) {
			return "$" + $filter('number')(d.amount);
		});
		//Attach count
		box.append('h2').text(function (d) {
			return d.category + " " + d.count;
		});
		
		box.transition().duration(2000).ease('cubic-in-out').style('width', function (d) {
			//Calculate bar width
			var value =  ((d.count / d.total) * 100);
			
			//Equalize the values so that all bars are visible
			if (value < 10) {
				value = 10;
			} else if (value > 80) {
				value = 80;
			}
			
			return value + '%';
		});
	}
	
    return {
      	restrict: 'EA',
      	link: function postLink(scope, element, attrs) {
        	
			//Set class for this element
			element.addClass('purchase-order-summary');
			
			//Get Summary data
			var promise = $http.get('/api/v1/purchase-order/stats/');
			promise.then(function (e) {
				e = e.data;
				var total = e.total.count;
				var data = [
					{count:e.processed.count, amount: e.processed.amount, category:'Processed', total:total},
					{count:e.received.count, amount: e.received.amount, category:'Received', total:total},
					{count:e.paid.count, amount: e.paid.amount, category:'Paid', total:total}
				];
				
				//Call fn to create chart
				createChart(element, data);
			});
      	}
    };
}]);
