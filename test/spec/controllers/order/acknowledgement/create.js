'use strict';

describe('Controller: OrderAcknowledgementCreateCtrl', function () {

    // load the controller's module
    beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));
	beforeEach(module('material.components.toast', 'ngAnimateMock'));

    var OrderAcknowledgementCreateCtrl,
        scope,
        Database,
        db,
        $http,
        ctrl, 
		Ctrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $injector) {
        scope = {$on:angular.noop,
        		 currentUser: {id:1}};
        $http = $injector.get('$httpBackend');
        Ctrl = $controller;
    }));
    
    afterEach(function() {
    	$http.verifyNoOutstandingRequest();
    	$http.verifyNoOutstandingExpectation();
    });
  
    describe("Initial Load Phase", function(){
        
        describe('No stored acknowledgement', function() {
        	
        	it('should create predefined variables', function() {
				$http.expectGET('/api/v1/project/?page_size=99999').respond([]);
        		ctrl = Ctrl('OrderAcknowledgementCreateCtrl', {
        			$scope:scope
        		});
        		
        		expect(scope.ack).toEqual(jasmine.any(Object));
        		expect(scope.ack['id']).not.toBeDefined()
        		expect(scope.ack['items']).toBeDefined()
        		expect(scope.ack.items).toEqual(jasmine.any(Array));
        	})
        });
        
        describe('With stored acknowledgement', function() {
        	
        	it('should restore a saved acknowledgement as the ack', function() {
	        	var obj = {id: 4, items: [{id:5}]}
	        	window.localStorage.setItem('acknowledgement-create', JSON.stringify(obj));
	        	$http.whenGET('/api/v1/customer_user/').respond({});
				$http.expectGET('/api/v1/project/?page_size=99999').respond([]);
	        	ctrl = Ctrl('OrderAcknowledgementCreateCtrl', {
	        		$scope:scope
	        	});
	        	
	        	expect(scope.ack).toEqual(jasmine.any(Object));
	        	expect(scope.ack['id']).toBeDefined();
	        	expect(scope.ack.id).toEqual(4);
	        	expect(scope.ack['items']).toBeDefined();
	        	expect(scope.ack.items).toEqual(jasmine.any(Array));
	        	expect(scope.ack.items[0]).toBeDefined();
	        	expect(scope.ack.items[0].id).toEqual(5);
        	});
        });
        
        
    });
    
    describe('Phase: Post-Initialization', function() {
    	
    	beforeEach(function() {
    		window.localStorage.clear();
			$http.expectGET('/api/v1/project/?page_size=99999').respond([]);
    		ctrl = Ctrl('OrderAcknowledgementCreateCtrl', {$scope:scope});
    	});
    	
    	afterEach(function() {
    		window.localStorage.clear();
    	});
    	
	    describe("Adding Customer Phase", function(){
	      
	        beforeEach(function(){
	        	window.localStorage.clear();
	        });
	        
	        it('should add a customer to the acknowledgement', function(){
	        	var customer = {id:10, name:'Joan'}
	            scope.addCustomer(customer);
	            expect(scope.ack['customer']).toBeDefined();
	            expect(scope.ack.customer).toEqual(jasmine.any(Object));
	            expect(angular.equals(scope.ack.customer, {id:10, name:'Joan'})).toBeTruthy();
	        });
	        
	        it('should save a snapshot of the order after adding the acknowledgement', function() {
	        	var preSaveObj = JSON.parse(window.localStorage.getItem('acknowledgement-create'));
	        	expect(preSaveObj).toBeNull();
	        	
	        	var customer = {id:10, name:'Joan'}
	        	scope.addCustomer(customer);
	        	
	        	var postSaveObj = JSON.parse(window.localStorage.getItem('acknowledgement-create'));
	        	expect(postSaveObj).not.toBeNull();
	        	expect(postSaveObj['customer']).toBeDefined();
	        	expect(postSaveObj.customer.id).toEqual(10);
	        	expect(postSaveObj.customer.name).toEqual('Joan');
	        });
	    });
	    
	    describe('Add and remove items from the acknowledgement', function() {
	    	
	    	beforeEach(function() {
	    		window.localStorage.clear();
	    	});
	    	
	    	it('should add a product to the acknowledgements items list', function() {
	    		expect(scope.ack.items.length).toEqual(0);
	    		var product = {id:9, description: 'AC-1 Sofa'};
	    		scope.addItem(product);
	    		
	    		expect(scope.ack.items).toBeDefined();
	    		expect(scope.ack.items).toEqual(jasmine.any(Array));
	    		expect(scope.ack.items.length).toEqual(1);
	    		expect(scope.ack.items[0].id).toEqual(9);
	    		expect(scope.ack.items[0].description).toEqual('AC-1 Sofa');
	    	});
	    	
	    	it('should remove a product form the acknowledgement item list', function() {
	    		scope.ack.items = [{id:8}, {id:1}, {id:5}];
	    		expect(scope.ack.items.length).toEqual(3);
	    		scope.removeItem(1);
	    		
	    		expect(scope.ack.items.length).toEqual(2);
	    		expect(scope.ack.items[0].id).toEqual(8);
	    		expect(scope.ack.items[1].id).toEqual(5);
	    		
	    	});
	    	
	    	it('should save the ack to the local storage', function() {
	    		var preSaveObj = JSON.parse(window.localStorage.getItem('acknowledgement-create'));
	    		expect(preSaveObj).toBeNull();
	    		scope.ack.items = [{id:8}];
	    		
	    		//Tests save after adding item
	    		scope.addItem({id:9});
	    		var postSaveObj = JSON.parse(window.localStorage.getItem('acknowledgement-create'));
	    		expect(postSaveObj).not.toBeNull();
	    		expect(postSaveObj['items']).toBeDefined();
	    		expect(postSaveObj.items).toEqual(jasmine.any(Array));
	    		expect(postSaveObj.items.length).toEqual(2);
	    		expect(postSaveObj.items[0].id).toEqual(8);
	    		expect(postSaveObj.items[1].id).toEqual(9);
	    		
	    		//Tests save after removing item
	    		scope.removeItem(0);
	    		var postSaveObj = JSON.parse(window.localStorage.getItem('acknowledgement-create'));
	    		expect(postSaveObj).not.toBeNull();
	    		expect(postSaveObj['items']).toBeDefined();
	    		expect(postSaveObj.items).toEqual(jasmine.any(Array));
	    		expect(postSaveObj.items.length).toEqual(1);
	    		expect(postSaveObj.items[0].id).toEqual(9);
	    	});
	    	
	    });
	    
	    describe("Validation Phase", function(){
	        beforeEach(function(){
	            window.localStorage.clear(); 
				
				$http.expectGET('/api/v1/project/?page_size=99999').respond([]);
	            ctrl = Ctrl("OrderAcknowledgementCreateCtrl", {$scope: scope});
	            scope.reset();
	            
	            scope.addCustomer({id:10, name:'Charles'});
	            var product = {id:1100, description:'AC-1100 Sofa'};
	            product.quantity = 1;
	            scope.addItem(product);
	            scope.ack.vat = 0;
	            scope.ack.delivery_date = new Date();
	            scope.ack.po_id = '44-223-3323';
	        });
	        
	        afterEach(function(){
	            scope.reset();
	            window.localStorage.clear();
	        });
	        
	        it('should validate', function(){
	            expect(scope.isValidated()).toBeTruthy(); 
	        });
	        
	        it('should not validate if missing a customer', function(){
	            expect(scope.isValidated()).toBeTruthy();
	            delete scope.ack.customer;
	            expect(function(){scope.isValidated()}).toThrow(new TypeError("Please add a customer."));
	            scope.create();
	        });
	        
	        it('should not validate if missing products but array is present', function(){
	            expect(scope.isValidated()).toBeTruthy();
	            scope.ack.items = [];
	            expect(function(){scope.isValidated()}).toThrow(new RangeError("No products added to the order"));
	            scope.create();
	        });
	        
	        it('should not validate if missing products', function(){
	            expect(scope.isValidated()).toBeTruthy();
	            delete scope.ack.items;
	            expect(function(){scope.isValidated()}).toThrow(new TypeError("Products is not an array"));
	            scope.create();
	        });
	        
	        it('should not validate if a product is missing a quantity', function(){
	            expect(scope.isValidated()).toBeTruthy();
	            delete scope.ack.items[0].quantity;
	            expect(function(){
	                scope.isValidated();
	            }).toThrow(new RangeError("Expecting a quantity of at least 1 for AC-1100 Sofa"));
	            scope.create();
	        });
	        
	        it('should not validate if missing vat', function(){
	            expect(scope.isValidated()).toBeTruthy();
	            delete scope.ack.vat;
	            expect(function(){scope.isValidated()}).toThrow(new TypeError("Please set the vat."));
	            scope.create();
	        });
	        
	        it('should not validate if missing delivery date', function(){
	            expect(scope.isValidated()).toBeTruthy();
	            delete scope.ack.delivery_date;
	            expect(function(){scope.isValidated()}).toThrow(new TypeError("Please select a preliminary delivery date.")); 
	            scope.create();
	        });
	    });
	    
	    describe("Temporary save", function(){
	        var date = new Date();
	        beforeEach(function(){
	            $http.expectGET('/api/v1/project/?page_size=99999').respond([]);
	            ctrl = Ctrl("OrderAcknowledgementCreateCtrl", {$scope: scope});
	            scope.ack.customer = {id:100, name:'Charlie'};
	            scope.ack.items.push({id:12, description:'AC-1100', wholesale_price:100});
	            scope.ack.vat = 0;
	            scope.ack.delivery_date = date;
	            scope.ack.po_id = '44-223-3323';
	        });
	        
	        afterEach(function(){
	            window.localStorage.clear(); 
	        });
	        it('should temporary save to local storage', function(){
	            expect(window.localStorage.getItem('acknowledgement-create')).toBeNull();
	            scope.tempSave();
	            var ack = JSON.parse(window.localStorage.getItem('acknowledgement-create'));
	            expect(ack).toBeDefined();
	            expect(ack).toEqual(jasmine.any(Object));
	            expect(angular.equals(ack.customer, {id:100, name:'Charlie'})).toBeTruthy();
	            expect(angular.equals(ack.items, [{id:12, description:'AC-1100', wholesale_price:100}])).toBeTruthy();
	            expect(ack.vat).toEqual(0);
	            expect(new Date(ack.delivery_date)).toEqual(date);
	            expect(ack.po_id).toEqual('44-223-3323');
	        });
	        
	        it('should restore the temporarily saved ack', function(){
	            expect(window.localStorage.getItem('acknowledgement-create')).toBeNull(); 
	            scope.tempSave();
	            expect(window.localStorage.getItem('acknowledgement-create')).toBeDefined();
	            
	            delete scope.ack;
	            
	            expect(scope.ack).not.toBeDefined();
				
	            $http.expectGET('/api/v1/project/?page_size=99999').respond([]);
	            ctrl = Ctrl("OrderAcknowledgementCreateCtrl", {$scope:scope});
	
	            expect(scope.ack).toBeDefined();
	            expect(scope.ack).toEqual(jasmine.any(Object));
	            expect(angular.equals(scope.ack.customer, {id:100, name:'Charlie'})).toBeTruthy();
	            expect(angular.equals(scope.ack.items, [{id:12, description:'AC-1100', wholesale_price:100}])).toBeTruthy();
	            expect(scope.ack.vat).toEqual(0);
	            expect(new Date(scope.ack.delivery_date)).toEqual(date);
	            expect(scope.ack.po_id).toEqual('44-223-3323');
	        });
	    });
	    
	    describe("Creating Acknowledgement Phase", function(){
	        beforeEach(function(){
	            var date = new Date();
				
	            $http.expectGET('/api/v1/project/?page_size=99999').respond([]);
	            ctrl = Ctrl("OrderAcknowledgementCreateCtrl", {$scope: scope});
	            var customer = {id:100, name:'Charlie'}
	            scope.addCustomer(customer);
	            scope.ack.items.push({id:12, description:'AC-1100', wholesale_price:100, has_price:true, quantity:1});
	            scope.ack.vat = 0;
	            scope.ack.delivery_date = date;
	            scope.ack.po_id = '44-223-3323';
	        });
	        
	        it('should make a post call to the server', function(){
	        	expect(scope.ack.customer).toBeDefined();
	            $http.expectPOST('/api/v1/acknowledgement/').respond({id:1043, pdf:{
	            	acknowledgement: false,
	            	production: false
	            }});
	            scope.create();
	            $http.flush();
	            expect(scope.ack.hasOwnProperty('id')).toBeTruthy();
	            expect(scope.ack.id).toEqual(1043);
	        });
	    });
	    
	    describe('Resetings the order', function() {
	    	
	    	beforeEach(function() {
	    		var obj = {id: 4, items: [{id:5}]}
	        	window.localStorage.setItem('acknowledgement-create', JSON.stringify(obj));
	    	});
	    	it('should create a new acknowledgemnt', function() {
	    		expect(scope.ack).toEqual(jasmine.any(Object));
	    		expect(scope.ack['id']).not.toBeDefined();
	    		expect(scope.ack.items).toEqual(jasmine.any(Array));
	    		expect(scope.ack.items.length).toEqual(0);
	    	});
	    	
	    	it('should remove the stored ack in the local storage', function() {
	    		var preResetAck = JSON.parse(window.localStorage.getItem('acknowledgement-create'));
	    		expect(preResetAck).toBeDefined();
	    		expect(preResetAck).toEqual(jasmine.any(Object));
	    		
	    		scope.reset();
	    		var postResetAck = window.localStorage.getItem('acknowledgement-create');
	    		expect(postResetAck).toBeNull();
	    	});
	    });
    });
    
    
    

  
});
