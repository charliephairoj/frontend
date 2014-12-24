'use strict';

xdescribe('Service: eaStorage', function () {

  // load the service's module
  beforeEach(module('employeeApp.services'));

  // instantiate service
  var eaStorage,
      storage,
      ls;
  beforeEach(inject(function(_eaStorage_) {
      eaStorage = _eaStorage_;
      storage = new eaStorage('customer');
      ls = window.localStorage;
  }));
  
  /*Initialization*/
  it('should create a collection hash', function(){
      var storage = new eaStorage('lumber');
      expect(typeof(storage.collection)).toBe('object');
      expect(!storage.collection).toBeFalsy();
      expect(storage.collection === null).toBeFalsy();
      expect(storage.collection === undefined).toBeFalsy();
  });
  
  it('should do create a collection with a namespace', function () {
      expect(storage.namespace).toBe('customer');
  });
  
  it('should create independent collections based on namespace', function(){
      var storage1 = new eaStorage('user'),
          storage2 = new eaStorage('supply');
      expect(angular.equals(storage1, storage2)).toBeFalsy();
      storage1.save({id:1});
      expect(storage1.collection).not.toEqual(storage2.collection);
      expect(storage1.collection[1]).toEqual({id:1});
      expect(storage2.collection[1]).not.toBeDefined();
  });
  
  it('should load previously saved data from the local storage', function(){
      var storage = new eaStorage('fabric');
      storage.save({id:33, status:'test'});
      var storage2 = new eaStorage('fabric');
      expect(storage2.collection[33]).toBeDefined()
      expect(storage2.collection[33]).toEqual({id:33, status:'test'}); 
  });
  
  /*Properties*/
  //Disabled
  it('should return the number of items in the collection', function(){
      var storage = new eaStorage('webbing');
      storage.save({id:9, status:'test'});
      //expect(storage.length).toEqual(1); 
  });
  
  /*Methods*/
  it('should save an object to the local storage', function(){
      storage.__saveToStorage__('test', {id:'test', status:'test'});
      expect(typeof(ls.getItem('test'))).toEqual('string');
      expect(JSON.parse(ls.getItem('test'))).toEqual({id:'test', status:'test'});
  })
  
  it('should load an object from the local storage', function(){
     storage.__saveToStorage__('test', {id:100, status:'testing'});
     expect(storage.__loadFromStorage__('test')).toEqual({id:100, status:'testing'});
     expect(storage.__loadFromStorage__('test')).toBeDefined();
     expect(storage.__loadFromStorage__('poop')).toBeNull();
  });
  
  it('should add an item to the collection and to the local storage', function(){
      var obj = {id:1, name:'charlie'}
      storage.save(obj);
      expect(storage.collection.hasOwnProperty(1)).toBeTruthy();
      expect(storage.collection[1]).toEqual(obj); 
      var data = JSON.parse(ls.getItem(storage.namespace));
      expect(data[1]).toEqual(obj);
  });
  
  it('should save an array of items to the collection and the local storage', function(){
     var storage = new eaStorage('foam');
     storage.save([{id:1, status:'test'}, {id:2, status:'ok'}]); 
     expect(storage.collection[1]).toEqual({id:1, status:'test'});
     expect(storage.collection[2]).toEqual({id:2, status:'ok'});
     expect(JSON.parse(ls.getItem('foam'))[1]).toEqual({id:1, status:'test'});
     expect(JSON.parse(ls.getItem('foam'))[2]).toEqual({id:2, status:'ok'});
     
  });
  
  beforeEach(function(){
      for (var i=10; i<100; i++) {
          storage.save({id:i, count:'charlie'+i});
      } 
  });
  
  it('should get an item from storage by id', function(){
      expect(storage.get(79)).toEqual({id:79, count:'charlie79'});
  });
  
  it('should remove an item from the collection and storage by id', function(){
      expect(storage.collection.hasOwnProperty(78)).toBeTruthy();
      storage.remove(78);
      expect(storage.collection.hasOwnProperty(78)).toBeFalsy();
      var data = JSON.parse(ls.getItem(storage.namespace));
      expect(data[78]).not.toBeDefined();
  }); 
  
  it('should remove an item from the collection and storage by object with id', function(){
      expect(storage.collection.hasOwnProperty(51)).toBeTruthy();
      storage.remove({id:51});
      expect(storage.collection.hasOwnProperty(51)).toBeFalsy();
      var data = JSON.parse(ls.getItem(storage.namespace));
      expect(data[51]).not.toBeDefined();
  });
  
  it('should query the database and select items with matching keys and values', function(){
      var storage = new eaStorage('group');
      for (var i=0; i<100; i++) {
          if (i<25) {
              storage.save({id:i, status:'ok'});
          } else {
              storage.save({id:i, status:'confirmed'});
          }
      }
      var response = storage.query({status:'ok'});
      expect(response.length).toEqual(25);
      for(var key in response){
          var item = response[key];
          expect(item.hasOwnProperty('status')).toBeTruthy();
          expect(item.status).toEqual('ok');
      }
  })
   
 
  

});
