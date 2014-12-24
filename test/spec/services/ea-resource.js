'use strict';

xdescribe('Service: eaResource', function () {

  // load the service's module
  beforeEach(module('employeeApp.services'));

  // instantiate service
  var eaResource,
      $http,
      $timeout,
      db,
      dbFactory;
      
  window.localStorage.clear();
  
  beforeEach(inject(function(_eaResource_, eaIndexedDB, $injector) {
      eaResource = _eaResource_;
      $http = $injector.get('$httpBackend');
      $timeout = $injector.get('$timeout');
      dbFactory = eaIndexedDB;
      
  }));
  
  describe('Resouce initialization', function(){

      it('should initialize the resource', function () {
          var resource = new eaResource('customer/:id', {id:'@id'});
          expect(angular.isFunction(resource.get)).toBeTruthy();
          expect(angular.isFunction(resource.query)).toBeTruthy();
          expect(angular.isFunction(resource.save)).toBeTruthy();
          expect(angular.isFunction(resource.remove)).toBeTruthy();     
      });
  
  });
  
  describe('Resouce queries', function(){
      var db;
      beforeEach(function(){
          
          db =  new dbFactory("customer");
          waitsFor(function(){
              return db.ready; 
          }, 2000);
      });
      
      afterEach(function(){
          var flag = false;
          db.clear(function(){
              flag = true;
          });
          
          waitsFor(function(){
              return flag;
          });
      });
      
      it('should perform a GET request via the query', function(){
          var resource = new eaResource('customer/:id', {id:'@id'});
          $http.expectGET('customer').respond([{id:1, name:'charlie'}, {id:2, name:'john'}]);
          resource.query();
      });
      
      it('should return an array of resources', function(){
          var resource = new eaResource('customer/:id', {id:'@id'});
          $http.expectGET('customer').respond([{id:1, name:'charlie'}, {id:2, name:'john'}]);
          var data = resource.query();
          expect(data).toBeDefined();
          expect(angular.isArray(data)).toBeTruthy();
          expect(data.length).toEqual(0);
          $http.flush();
          expect(angular.equals({id:1, name:'charlie'}, data[0])).toBeTruthy();
          expect(angular.equals({id:2, name:'john'}, data[1])).toBeTruthy();
      }); 
      
      it('should returned saved resources from local storage before the server responds', function(){
          var flag = false,
              flag2 = false,
              response;
          
          runs(function(){
              db.save([{id:4, name:"Charlie"}, {id:7, name:"John"}], function(){
                  flag = true;
              });
          
          });
          
          waits(500);
          
          runs(function(){
              var resource = new eaResource('customer/:id', {id:'@id'});
              $http.expectGET('customer').respond();
              response = resource.query(function(){
                  flag2 = true;
              });              
          });
          
          waits(500);
          
          runs(function(){
              expect(response).toBeDefined();
              expect(angular.isArray(response)).toBeTruthy();
              expect(response.length).toEqual(2);
          });
          
      }); 
      
      it('should update the returned resources with data from the server', function(){
          var response,
              flag = false;
              
          runs(function(){
              db.save([{id:8, status:"wired"}, {id:9, status:"tired"}], function(){
                  flag = true;
              });
          });
          
          waits(500);
          
          runs(function(){
              var resource = new eaResource('customer/:id', {id:'@id'});
              $http.expectGET('customer').respond([{id:8, status:'bad'}, {id:9, status:'ok'}, {id:10, status:'home'}]);
              response = resource.query();
          });
          
          waits(500);
          
          runs(function(){
              //Before server response
              expect(response).toBeDefined();
              expect(angular.isArray(response)).toBeTruthy();
              expect(response.length).toEqual(2);
              expect(response[0].status).toEqual("wired");
              expect(response[1].status).toEqual("tired");
              
              $http.flush();
              
              //After server response
              expect(response).toBeDefined();
              expect(angular.isArray(response)).toBeTruthy();
              expect(response.length).toEqual(3);
              expect(angular.equals(response[0], {id:8, status:'bad'})).toBeTruthy();
              expect(angular.equals(response[1], {id:9, status:'ok'})).toBeTruthy();
              expect(angular.equals(response[2], {id:10, status:'home'})).toBeTruthy();
          });
      });
      
  });
  
  describe('Resource get method', function(){
       beforeEach(function(){
          
          db =  new dbFactory("customer");
          waitsFor(function(){
              return db.ready;   
          });
          
      });
      
      afterEach(function(){
          var flag = false;
          db.clear(function(){
              flag = true;
          }); 
          
          waitsFor(function(){
              return flag;
          });
          
      });
      it('should perform a GET request via the get', function(){
          var resource = new eaResource('customer/:id', {id:'@id'});
          $http.expectGET('customer/1').respond({id:1, name:'charlie'});
          resource.get({id:1});
      });
      
      it('should return a resource', function(){
          var resource = new eaResource('customer/:id', {id:'@id'});
          $http.expectGET('customer/3').respond({id:3, name:'Shirley'});
          var data = resource.get({id:3});
          expect(angular.equals(data, {})).toBeTruthy();
          $http.flush();
          expect(angular.equals(data, {id:3, name:'Shirley'})).toBeTruthy();
      });
      
      it('should return a save resource from the local storage', function(){
          var response;
          runs(function(){
            db.save([{id:5, name: 'Rena'}]);
          });
          
          waits(500);
          
          runs(function(){
              var resource = new eaResource('customer/:id', {id:'@id'});
              $http.expectGET('customer/5').respond({});
              response = resource.get({id:5});
          });
          
          waits(500);
          
          runs(function(){
              expect(response).toBeDefined();
              expect(angular.equals(response, {id:5, name:'Rena'}));
              expect(response.id).toEqual(5);
          });
      });
      
      it('should update a preloaded resource with a response from the server', function(){
          var response;
          runs(function(){
              db.save({id:6, name:'John'});
          });
          
          waits(500);
          
          runs(function(){
              var resource = new eaResource('customer/:id', {id:'@id'});
              $http.expectGET('customer/6').respond({id:6, name:'awesome'});
              response = resource.get({id:6});
          });
          
          waits(500);
          
          runs(function(){
              expect(angular.equals(response, {id:6, name:"John"})).toBeTruthy();
              $http.flush();
              expect(angular.equals(response, {id:6, name:'awesome'}));
          });
              
      });
      
  });
  
  describe('Resource polling', function(){
      
      var Supplier;
      
      
      beforeEach(function(){
          window.localStorage.clear();
          Supplier = new eaResource('supplier/:id', {id:'@id'});
      });
      
      it('should poll the server via query', function(){
          $http.expectGET('supplier').respond();
          Supplier.disableLastChecked();
          Supplier.poll().query();
          $http.flush();
          $http.expectGET('supplier').respond();
          $timeout.flush();
          $http.flush();
          $http.expectGET('supplier').respond();
          $timeout.flush();
          $http.flush();
          $http.expectGET('supplier').respond();
          $timeout.flush();
      });
      
      it('should stop polling the server via query', function(){
          $http.expectGET('supplier').respond();
          Supplier.disableLastChecked();
          Supplier.poll().query();
          $http.flush();
          $http.expectGET('supplier').respond();
          $timeout.flush();
          $http.flush();
          $http.expectGET('supplier').respond();
          $timeout.flush();
          
          //Stop the cycle
          Supplier.stopPolling();
          expect(Supplier.$$poll).toBeFalsy();
          $http.flush();
          
          
      });
      
      it('should poll the server via get', function(){
          $http.expectGET('supplier/5').respond({id:5});
          Supplier.disableLastChecked();
          Supplier.poll().get({id:5});
          $http.flush();
          $http.expectGET('supplier/5').respond();
          $timeout.flush();
          $http.flush();
          $http.expectGET('supplier/5').respond();
          $timeout.flush();
          $http.flush();
          $http.expectGET('supplier/5').respond();
          $timeout.flush();
      });
      
      it('should stop polling the server via get', function(){
          $http.expectGET('supplier/5').respond({id:5});
          Supplier.disableLastChecked();
          Supplier.poll().get({id:5});
          $http.flush();
          $http.expectGET('supplier/5').respond();
          $timeout.flush();
          $http.flush();
          $http.expectGET('supplier/5').respond();
          $timeout.flush();
          
          //Stop the cycle
          Supplier.stopPolling();
          expect(Supplier.$$poll).toBeFalsy();
          $http.flush();
      });
      
      it('should poll for newest items', function(){
          var date = new Date();
          $http.expectGET('supplier').respond();
          //Initial request
          var response = Supplier.poll().query();
          $http.flush();
          Supplier.$$last_checked = date;
          
          //Start of next cycle
          $http.expectGET('supplier?last_modified='+date.toISOString()).respond([]);
          //Trigger next request
          $timeout.flush();
          $http.flush();
          expect(angular.isArray(response)).toBeTruthy();
          expect(response.length).toEqual(0);
          Supplier.$$last_checked = new Date(date.setMinutes(date.getMinutes()+1));
          
          //Start of third cycle
          $http.expectGET('supplier?last_modified='+new Date(date).toISOString()).respond([{id:6}, {id:7}]);
          //Trigger next request
          $timeout.flush();
          $http.flush();
          expect(angular.isArray(response)).toBeTruthy();
          expect(response.length).toEqual(2);
      });
      
      it('should poll and update the response with the newest items', function(){
          $http.expectGET('supplier').respond([{id:12, name:'Fabric House'}]);
          //Initial request
          var Supplier = new eaResource('supplier/:id', {id:'@id'});
          var response = Supplier.poll().query();
          expect(angular.isArray(response)).toBeTruthy();
          $http.flush();
          expect(angular.isArray(response)).toBeTruthy();
          expect(response.length).toEqual(1);
          expect(angular.equals(response[0], {id:12, name:'Fabric House'})).toBeTruthy();
          
          
          //Start of next cycle
          expect(Supplier.$$last_checked).toBeDefined();
          expect(typeof(Supplier.$$last_checked)).toEqual('object');
          var date = new Date();
          Supplier.$$last_checked = date;
          $http.expectGET('supplier?last_modified='+date.toISOString()).respond([{id:12, name:'Fabric Land', status:'open'}]);
          //Trigger next request
          $timeout.flush();
          $http.flush();
          expect(angular.isArray(response)).toBeTruthy();
          expect(response.length).toEqual(1);
          expect(angular.equals(response[0], {id:12, name:'Fabric Land', status:'open'}));
          expect(response[0].hasOwnProperty('id')).toBeTruthy();
          expect(response[0].id).toEqual(12);
          expect(response[0].hasOwnProperty('name')).toBeTruthy();
          expect(response[0].name).toEqual('Fabric Land');
          expect(response[0].hasOwnProperty('status')).toBeTruthy();
          expect(response[0].status).toEqual('open');
          
          //Start of third cycle
          expect(Supplier.$$last_checked).toBeDefined();
          expect(typeof(Supplier.$$last_checked)).toEqual('object');
          Supplier.$$last_checked = new Date(date.setMinutes(date.getMinutes()+1));
          $http.expectGET('supplier?last_modified='+new Date(date).toISOString()).respond([{id:6}, {id:7}]);
          //Trigger next request
          $timeout.flush();
          $http.flush();
          expect(angular.isArray(response)).toBeTruthy();
          expect(response.length).toEqual(3);
      });
      
  });
  
  describe('Resource Inheritence', function(){
      
      var Customer;
      
      beforeEach(function(){
          window.localStorage.clear();
          Customer = new eaResource('customer/:id', {id:'@id'});
      });
      
      it("should not pass values from the parent's query request", function(){
          $http.expectGET('customer').respond([{id:1}, {id:2}]);
          var customers = Customer.query();
          $http.flush();
          var customer = customers[0];
          expect(angular.equals(customer, customers)).toBeFalsy();
          expect(angular.equals(customer, {id:1})).toBeTruthy();
          $http.expectPOST('customer/1').respond({id:1, name:'Charles'});
          customer.$save();
          $http.flush();
          expect(typeof(customer)).toEqual('object');
          expect(angular.equals(customer, {id:1, name:'Charles'}));
      });
      
      it('should not pass values between query and get requests', function(){
          $http.expectGET('customer').respond([{id:54, name:'charlie'}, {id:55, name:'john'}]);
          var response1 = Customer.query();
          expect(angular.isArray(response1)).toBeTruthy();
          expect(response1.length).toEqual(0);
          $http.flush();
          expect(angular.isArray(response1)).toBeTruthy();
          expect(response1.length).toEqual(2);
          expect(angular.equals(response1[0], {id:54, name:'charlie'})).toBeTruthy();
          
          //Transition to get method
          $http.expectGET('customer/99').respond({id:99, name:'Jan'});
          var response2 = Customer.get({id:99});
          expect(typeof(response2)).toEqual('object');
          expect(angular.equals(response2, {})).toBeTruthy();
          expect(Customer.$$last_checked).not.toBeDefined();
          $http.flush();
          expect(typeof(response2)).toEqual('object');
          expect(angular.equals(response2, {id:99, name:'Jan'})).toBeTruthy();
          
      });
  });
  
  describe('Child Resource $save method', function(){
      
      var resource;
      
      beforeEach(function(){
          resource = new eaResource('supplier/:id', {id:'@id'}); 
      });
      
      it('should perform a POST request via the save method', function(){
          $http.expectPOST('supplier').respond();
          var supplier = new resource({name:'Zipper World'});
          expect(angular.equals(supplier, {name:'Zipper World'}));
          supplier.$save();
      });
      
      it('should update the resource with the server response', function(){
          $http.expectPOST('supplier').respond({name:'Zipper Plaza', id:10, status:'open'});
          var supplier = new resource({name:'Zipper World'});
          expect(angular.equals(supplier, {name:'Zipper World'})).toBeTruthy();
          supplier.$save();
          $http.flush();
          expect(angular.equals(supplier, {name:'Zipper Plaza', id:10, status:'open'}));
          expect(supplier.hasOwnProperty('id')).toBeTruthy();
          expect(supplier.id).toEqual(10);
          expect(supplier.hasOwnProperty('status')).toBeTruthy();
          expect(supplier.status).toEqual('open');
          expect(supplier.hasOwnProperty('name')).toBeTruthy();
          expect(supplier.name).toEqual('Zipper Plaza');
      });
      
      it('should save the updated resource to the local storage', function(){
          $http.expectPOST('supplier').respond({name:'Zipper House', id:11});
          var supplier = new resource({name:'Zipper World'});
          expect(angular.equals(supplier, {name:'Zipper World'}));
          supplier.$save();
          $http.flush();
          expect(typeof(supplier)).toEqual('object'); 
          expect(angular.equals(supplier, {id:11, name:'Zipper House'})).toBeTruthy();
          expect(supplier.hasOwnProperty('id'));
          expect(supplier.id).toEqual(11); 
          expect(supplier.hasOwnProperty('name'));
          expect(supplier.name).toEqual('Zipper House');
      });
      
      it('should save update a resource with data from the server', function(){
          var supplier = new resource();
          supplier.name = 'Charlie Food World';
          expect(supplier.hasOwnProperty('id')).toBeFalsy();
          $http.expectPOST('supplier').respond({id:100, name:'Charlie Food World'});
          supplier.$save();
          $http.flush();
          expect(supplier.hasOwnProperty('id')).toBeTruthy();
          expect(supplier.id).toEqual(100);
          
           
      });
  
  });
  
  describe('Phase: Multiple Calls', function(){
      
      var resource;
      
      beforeEach(function($injector){
          resource = new eaResource('shipping/:id', {id:'@id'}); 
      });
      
      it('should switch between params without adding a last_modified param', function(){
          $http.expectGET('shipping/5567').respond({id:5567});
          resource.get({id:5567});
          $http.flush();
          $http.expectGET('shipping/5566').respond({id:5566});
          resource.get({id:5566});
         
      });
      
      it('should update from storage and server during repeated calls', function(){
          $http.expectGET('shipping').respond([{id:4}, {id:5}]);
          var list = resource.query()
          $http.flush();
          expect(list.length).toEqual(2);
          $http.expectGET('shipping').respond([]);
          resource.query();
          expect(list.length).toEqual(2);
          $http.flush();
          expect(list.length).toEqual(2);
      })
  
  });
  
    
});
