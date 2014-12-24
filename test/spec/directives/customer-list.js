'use strict';



describe('Directive: customerList', function () {
	var html = '<div class="customer-list" data-modal>\
    <div class="title">\
        Customers\
    </div>\
    <search-bar data-ng-model="query"></search-bar>\
\
    <div class="container" on-scroll-end="loadNext()">\
        <ul class="customer-container">\
            <li class="customer" ng-click="select(customer)" ng-repeat="customer in customers | filter:query | orderBy:\'name\'">{{customer.name}}</li>\
        </ul>\
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
			$http.verifyNoOutstandingRequest();
			$http.verifyNoOutstandingExpectation();
		});
		it('should make a requst for the html from the server', inject(function($rootScope, $compile) {
			$http.whenGET('/api/v1/customer/?limit=20').respond([]);
			$http.expectGET('views/templates/customer-list.html').respond(html);
			element = angular.element('<div customer-list></div>');
	    	element = $compile(element)($rootScope);
	    	$http.flush();
	    	$rootScope.$digest();
	    	//dump(element);
		}));
		
		it('should make a request to the server for upholstery', inject(function($rootScope, $compile) {
			$http.expectGET('/api/v1/customer/?limit=20').respond([
				{
					id:4,
					name:'Charlie'
				},
				{
					id:5,
					name:'John'
				}
			]);
			$http.whenGET('views/templates/customer-list.html').respond(html);
			element = angular.element('<div customer-list></div>');
	    	element = $compile(element)($rootScope);
	    	$http.flush();
	    	$rootScope.$digest();
	    	
	    	var elms = element.find('.customer');
	    	expect(elms.length).toEqual(2);
	    	expect(elms[0].innerHTML).toEqual('Charlie')
	    	expect(elms[1].innerHTML).toEqual('John');
		}));
	  	
  	});
  	
  	describe('Phase: Post-Initialization', function(){
  		
  		beforeEach(inject(function($compile, $rootScope) {
  			$http.expectGET('/api/v1/customer/?limit=20').respond([
				{
					id:4,
					name:'Charlie'
				},
				{
					id:5,
					name:'John'
				}
			]);
			$http.whenGET('views/templates/customer-list.html').respond(html);
			element = angular.element('<div customer-list></div>');
	    	element = $compile(element)($rootScope);
	    	$http.flush();
	    	$rootScope.$digest();
  		}));
  		
  		describe('Selecting a customer', function() {
  			it('should call a select function', function() {
  				var scope = element.isolateScope();
  				spyOn(scope, 'select');
  				$(element.find('.customer')[0]).click();
  				
  				expect(scope.select).toHaveBeenCalled();
  			});
  		});
  		
  		describe('Loading more customers', function() {
  			it('should request more customers from the server', function() {
  				$http.expectGET('/api/v1/customer/?limit=50&offset=2').respond([{id:100, name:'Carl'}]);
  				var scope = element.isolateScope();
  				scope.loadNext();
  				$http.flush();

  				var elms = element.find('.customer');
  				expect(elms.length).toEqual(3);
  				expect(elms[0].innerHTML).toEqual('Carl');
  			});
  		});
  		
  		describe('Search from the search bar', function() {
  			it('should request customers based on a query', function() {
  				$http.expectGET('/api/v1/customer/?limit=5&q=h').respond([{id:400, name:'Helen'}]);
  				var scope = element.isolateScope();
  				scope.query = 'h';
  				scope.$digest();
  				
  				$http.flush();
  				expect(scope.customers.length).toEqual(3);
  				var elms = element.find('.customer');
  				expect(elms.length).toEqual(3);
  				expect(elms[1].innerHTML).toEqual('Helen');
  				
  				
  			});
  		});
  	});
  	
});
