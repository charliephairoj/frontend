'use strict';




describe('Directive: upholsteryList', function () {
	var html = '<div class="upholstery-list">\
    <search-bar data-ng-model="query"></search-bar>\
	<div class="container" on-scroll-end="loadNext()">\
        <ul class="upholstery-container">\
            <li class="upholstery" data-ng-repeat="upholstery in upholsteries| filter:query" data-ng-click="select(upholstery)">' 
html += '{{upholstery.description}}</li>\
        </ul>\
    </div>\
</div>'
  	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));
  	
  	var element,
  		scope,
  		rScope,
  		$http;

	beforeEach(inject(function($injector) {
		$http = $injector.get('$httpBackend');
	}));
	
	describe('Phase: Initialization', function() {
	  	
	  	afterEach(function() {
	  		$http.verifyNoOutstandingRequest();
	  		$http.verifyNoOutstandingExpectation();	
	  	});
	  	
	  	it('it should request the template', inject(function ($rootScope, $compile) {
	  		$http.whenGET('/api/v1/upholstery/?limit=20').respond([]);
	  		$http.expectGET('views/templates/upholstery-list.html').respond(html);
	    	element = angular.element('<div upholstery-list></div>');
	    	element = $compile(element)($rootScope);
	    	$http.flush();
	  	}));
	  	
	  	it('should request the upholsteries', inject(function($rootScope, $compile) {
	  		$http.whenGET('views/templates/upholstery-list.html').respond(html);
	  		$http.expectGET('/api/v1/upholstery/?limit=20').respond([{
	  			id:3,
	  			description: 'test sofa'
	  		}, {
	  			id:5,
	  			description: 'test chair'
	  		}]);
	  		element = angular.element('<div upholstery-list></div>');
	  		scope = $rootScope.$new();
	    	element = $compile(element)(scope);
	    	$http.flush();
	    	scope.$digest();
	    	
	    	var elms = element.find('.upholstery');
	    	expect(elms.length).toEqual(2);
	    	expect(elms[0].innerHTML).toEqual('test sofa');
	    	expect(elms[1].innerHTML).toEqual('test chair');
	    	
	    	
	  	}));
  	
  	});
  	
  	describe('Phase: Post-Initialization', function() {
  		beforeEach(inject(function($rootScope, $compile) {
			$http.whenGET('/api/v1/upholstery/?limit=20').respond([{
	  			id:3,
	  			description: 'test dw sofa'
	  		}, {
	  			id:5,
	  			description: 'test dw chair'
	  		}]);
	  		$http.expectGET('views/templates/upholstery-list.html').respond(html);
	    	element = angular.element('<div upholstery-list></div>');

	    	element = $compile(element)($rootScope);
	    	$http.flush();
	    	$rootScope.$digest();
	    	scope = element.isolateScope();
	    	rScope = $rootScope;
		}));
		
		afterEach(function() {
	  		$http.verifyNoOutstandingRequest();
	  		$http.verifyNoOutstandingExpectation();	
	  	});
		
  		describe('Selecting an upholstery', function() {
  			
  			it('should call the select function', function() {
  				var test = jasmine.createSpy('test');
  				rScope.onSelect = test
  				spyOn(scope, 'select');
  				var elm = $(element.find('.upholstery')[0]);
  				elm.click();
		    	expect(scope.select).toHaveBeenCalled();
		    	//expect(test).toHaveBeenCalled();
  			});
  			
  		});
  		
  		describe('Loading more upholsteries', function() {
  			
  			it('should make a request to the server for more upholsteries', function() {
  				$http.expectGET('/api/v1/upholstery/?limit=50&offset=2').respond([
  					{
  						id:100, 
  						description:'bed'}, 
  					{
  						id:300,
  						description:'dining chair'
  				}]);
  				scope.loadNext();
  				$http.flush();
  				
  				var elms = element.find('.upholstery');
  				expect(elms.length).toEqual(4);
  				expect(elms[2].innerHTML).toEqual('bed');
  				expect(elms[3].innerHTML).toEqual('dining chair');
  			});
  		});
  		
  		describe('Search via the search bar', function() {
  			it('should make a request to the server with the query', function() {
  				$http.expectGET('/api/v1/upholstery/?limit=12&q=d').respond([{id:30, description:'DW-1201 Sofa'}]);
  				scope.query = 'd';
  				scope.$digest();
  				$http.flush();
  				scope.$digest();

  				expect(scope.upholsteries.length).toEqual(3);
  				var elms = element.find('.upholstery');
  				expect(elms.length).toEqual(3);
  				expect(elms[2].innerHTML).toEqual('DW-1201 Sofa');
  			});
  		});
  		
  		describe('Rendering the list of upholsteries', function () {
  			it('should creating 2 .upholstery divs', function () {
  				var uphols = element.find('.upholstery');
  				expect(uphols.length).toEqual(2);
  				expect(uphols[0].innerHTML).toEqual('test dw sofa');
  			});
  		});
  	});
});
