'use strict';

xdescribe('Controller: ProductInventoryCtrl', function () {

    // load the controller's module
    beforeEach(module('employeeApp'));

    var Ctrl,
        ctrl,
        $http,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $injector) {
        $http = $injector.get('$httpBackend');
        scope = {$on:angular.noop};
        Ctrl = $controller;
        
    }));

    describe('Phase: Initialization', function(){
        it('should set all UI vars', function(){
        	$http.whenGET('/api/v1/customer_user').respond({});
            $http.whenGET('acknowledgement/item?status=inventory').respond([]);
            ctrl = Ctrl("ProductInventoryCtrl", {$scope:scope});
            expect(scope.showAddInventory).toBeFalsy();
        });
        
        it('make HTTP calls to acknowledgement/item?status=inventory', function () {
        	$http.whenGET('/api/v1/customer_user').respond({});
            $http.expectGET('acknowledgement/item?status=inventory').respond([]);
            ctrl = Ctrl("ProductInventoryCtrl", {$scope:scope});
        });
    });
    
    describe('Phase: Adding Inventory', function(){
        beforeEach(function(){
        	$http.whenGET('/api/v1/customer_user').respond({});
            $http.whenGET('acknowledgement/item?status=inventory').respond([]);
            ctrl = Ctrl("ProductInventoryCtrl", {$scope:scope});
        });
        
        it('should make an HTTP post to acknowledgement/item', function(){
            $http.expectPOST('acknowledgement/item').respond({id:2323});
            scope.addInventory({id:12, description:'test', pillows:[{type:'back'}]});
            expect(scope.item.id).not.toBeDefined();
            expect(scope.item.description).toEqual('test');
            expect(scope.item.pillows).toEqual(jasmine.any(Array));
            expect(scope.item.pillows.length).toBe(1);
            expect(scope.item.pillows[0]).toEqual({type:'back'}); 
            
            $http.flush();
            expect(scope.itemList[0].id).toBe(2323);
            expect(scope.itemList[0].description).toEqual('test');
            expect(scope.itemList[0].pillows).toEqual(jasmine.any(Array));
            expect(scope.itemList[0].pillows.length).toBe(1);
            expect(scope.itemList[0].pillows[0]).toEqual({type:'back'}); 
        });
    });
});
