'use strict';

xdescribe('Directive: fabricSelector', function () {
	var html = '<div class="fabric-selector">\
	<search-bar data-ng-model="query"></search-bar>\
    <div class="product_container">\
        <div class="product" data-drop-on="product.fabric">\
            <div>{{product.description}}</div>\
            \
            <div class="fabric" ui-if="product.fabric">\
                Fabric:  {{product.fabric.description}}\
                <img ng-src="{{product.fabric.image.url}}" />\
            </div>\
            \
        </div>\
        <div class="pillow" ng-repeat="pillow in product.pillows" data-drop-on="pillow.fabric">\
            <div>{{pillow.type | beautify}} Pillow</div>\
            <div class="fabric">\
                Fabric: {{pillow.fabric.description}}\
                <img ng-src="{{pillow.fabric.image_url}}" />\
            </div>\
        </div>\
    </div>\
    <div class="fabric_container" on-scroll-end="loadNext()">\
        <ul class="fabrics">\
            <li class="fabric" ng-repeat="fabric in fabrics | filter:query " data-drag-on="fabric">\
                <img ng-src="{{fabric.image.url}}" />\
                <div class="details">Pattern: {{fabric.pattern}}<br />Color: {{fabric.color}}</div>\
            </li>\
        </ul>\
    </div>\
    <div class="bottom-bar">\
        <button ng-click="done()">Done</button>\
    </div>\
</div>'

  	beforeEach(module('employeeApp'));
	
 	var element,
 		$http;
 		
 	beforeEach(inject(function($injector) {
 		$http = $injector.get('$httpBackend');
 	}));
 	
 	describe('Phase: Initialization', function() {
 		
 		afterEach(function() {
 			$http.verifyNoOutstandingExpectation();
 			$http.verifyNoOutstandingRequest();	
 		});
 		
 		it('should request the html', inject(function($rootScope, $compile) {
 			$http.expectGET('views/templates/fabric-selector.html').respond(html);
 			$http.whenGET('/api/v1/fabric').respond([]);
 			
 			element = angular.element('<div fabric-selector></div>');
 			$compile(element)($rootScope.$new());
 			$http.flush();
 		}));
 		
 		it('should request the fabric', inject(function($rootScope, $compile) {
 			$http.expectGET('/api/v1/fabric').respond([{id:100, color:'Blue', pattern:'Max'}]);
 			$http.whenGET('views/templates/fabric-selector.html').respond(html);
 			
 			element = angular.element('<div fabric-selector></div>');
 			$compile(element)($rootScope);
 			$http.flush();
 			$rootScope.$digest();
 			
 			var elms = element.find('.fabric');
 			expect(elms.length).toEqual(1);
 			expect($(elms[0]).find('.details')[0].innerHTML).toEqual('Pattern: Max<br>Color: Blue')
 		}));
 	});
 	
 	describe('Phase: Post-Initizliation', function() {
 		
 		beforeEach(inject(function($rootScope, $compile) {
 			$http.expectGET('views/templates/fabric-selector.html').respond(html);
 			$http.expectGET('/api/v1/fabric').respond([
 				{
 					id:100, 
 					description: 'Max Col:Grey'
 				},
 				{
 					id:104,
 					description: 'Max Col:Pink'
 				}
 			]);
 			
 			element = angular.element('<div fabric-selector></div>');
 			$compile(element)($rootScope);
 			$http.flush();
 			$rootScope.$digest();
 		}));
 		
 		afterEach(function() {
 			$http.verifyNoOutstandingExpectation();
 			$http.verifyNoOutstandingRequest();
 		});
 		
 		describe('Load more fabrics', function() {
 			
 			it('should request more fabrics from the server', function() {
 				$http.expectGET('/api/v1/fabric?limit=50&offset=2').respond([{id:100, color:'red', pattern: 'Max'}]);
 				var scope = element.scope();
 				scope.loadNext();
 				
 				$http.flush();
 				scope.$digest();
 				
 				var elms = element.find('.fabric');
 				expect(elms.length).toEqual(3)
 			});
 			
 		});
 		
 		describe('Searching via the search bar', function() {
 			
 			it('should request fabrics along with a query string', function() {
 				$http.expectGET('/api/v1/fabric?limit=5&q=m').respond([{id: 502, color:'red', pattern:'Max'}]);
 				var scope = element.scope();
 				scope.query = 'm';
 				scope.$digest();
 				$http.flush();
 				
 				var elms = element.find('.fabric');
 				expect(elms.length).toEqual(3);
 			});
 		});
 	});

  	
});
