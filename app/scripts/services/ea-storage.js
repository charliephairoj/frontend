
/*
 * Local Storage Service
 * 
 * This Service will keep an active collection that can be 
 * queried via id. The collection will also act as an interface 
 * with the localStorage of the browser. The storage of items
 * in the collection will be entirely based on the id of the.
 * The main function will be a factory that returns a collection
 * for a specified namespace. 
 * 
 * Capabilities:
 * 
 * -main collection for a namespace
 * -Maintain active collection
 * -Get an object from the collection
 * -Save an object to the collection
 *   -check for duplicate id. If found
 *    then updates instead of create a new one
 * -get all objects from the collection
 * -delete an object from the collection
 * -keep collection in sync with localStorage
 * 
 * Public Methods
 * 
 * -query(arg)
 * -save()
 * -get(arg)
 * -remove(arg)
 * 
 * Private Methods
 * 
 * -saveToStorage()
 * -loadFromStorage()
 * 
 */
angular.module('employeeApp.services')
.factory('eaStorage', [function() {
      
	//Factory Function 
	function factory(namespace){
          
		//compare 2 items and see if the first items
		//has the same keys and values of second item
		function compare(item, arg) {
			var aKey;
			for (aKey in arg) {
				if (item.hasOwnProperty(aKey)){
					if (item[aKey] !== arg[aKey]){
						return false;
					}
				} else {
					return false;
				}
			}
              
			return true;
		}
          
		function parseDate(obj){
			if(obj.hasOwnProperty('delivery_date')){
				obj.delivery_date = new Date(obj.delivery_date);
			}
			if(obj.hasOwnProperty('time_created')){
				obj.time_created = new Date(obj.time_created);
			}
			if(obj.hasOwnProperty('last_login')){
				obj.last_login = new Date(obj.last_login);
			}
			return obj;
		}
          
		//Storage initialization
		function storage(namespace) {
			this.namespace = namespace;
			this.collection = this.__loadFromStorage__(this.namespace) || {};
		}
          
		/*
		 * Properties
		*/
          
		/*Disabled*/
		//Get Length of collection
		storage.__defineGetter__("length", function(){
			return 'ok';//Object.keys(this.collection).length; 
		});
		/*
		* Private functions
		*/

		/*
		* Save function
		* 
		* Saves an object with an id property
		* to the collection
		*/
		storage.prototype.__save__ = function(obj){
			//Checks if the obj has an id
			if (obj.hasOwnProperty('id')) {
				this.collection[obj.id] = obj;
			} else {
				//dump(obj);
				//throw new TypeError("Object has no 'id' property");
			}
		};
          
          
		/*
		* Save to Local Storage
		* 
		* Stringifies the item and then saves it to 
		* the local storage as a string. The key is the first
		* variable while the data is the second variable
		*/
		storage.prototype.__saveToStorage__ = function(key, data){
			window.localStorage.setItem(key, JSON.stringify(data));   
		};
          
		/*
		* Load from Local Storage
		* 
		* The function will retrieve an item from the local storage. 
		* The data is then parsed by the JSON module before being
		* returned.
		*/
		storage.prototype.__loadFromStorage__ = function(key){
			return JSON.parse(window.localStorage.getItem(key));
		};
          
		/*
		* Public Methods
		*/
          
		/*
		* Query items form the collection
		* 
		* The argument must be in the form of an
		* object where the keys will be used to compare
		* with keys of objects in the collection
		* and the value compared with the objects' values
		*/
		storage.prototype.query = function(arg){
              
			if(typeof(arg) === 'object') {
				var data = [],
					key;
				for(key in this.collection) {
					if (compare(this.collection[key], arg)) {
						this.collection[key] = parseDate(this.collection[key]);
						data.push(this.collection[key]);
					}
				}
                  
				//Return the data set
				return data;
                  
			} else {
				throw new TypeError('Arguments must be in the form of a key:value object');
			}
              
		};
          
		/*
		* Save Function 
		* 
		* This function will save either and object
		* or an array of objects. Both are saved via
		* a save function
		* 
		* The save inner function checks if the object 
		* or the object in the array has an id property
		* and throws an error if it does not.
		* 
		* After all saves, the entire collection is saved
		* to the local storage
		*/
		storage.prototype.save = function(obj){
			var i;
			if (Object.prototype.toString.call( obj ) === '[object Array]') {
				for (i in obj) {
					this.__save__(obj[i]);
				}
			} else {
				this.__save__(obj);
			}
              
			this.__saveToStorage__(this.namespace, this.collection);
              
		};
          
		//Get an obj by id
		storage.prototype.get = function(id){
			return this.collection[id] ? parseDate(this.collection[id]) : null;
		};
          
		//Iterate through all the items in the collecion
		storage.prototype.iterate = function(callback){
			var key;
			//Loop through all keys
			for (key in this.collection) {
				//check the it is a direct property
				if (this.collection.hasOwnProperty(key)) {
					//call back fn with item as argument
					callback(parseDate(this.collection[key]));
				}
			}
		};
          
		//Delete an object by id
		storage.prototype.remove = function(arg){
			//Establish id or extract it
			var id = typeof(arg) === "object" ? arg.hasOwnProperty('id') ? arg.id : null : arg;
			if (this.collection.hasOwnProperty(id)) {
				delete this.collection[id];
				this.__saveToStorage__(this.namespace, this.collection);
			}
		};
          
		//Returns the namespace based storage
		return new storage(namespace);
	}
      
	//Return Factory Function 
	return factory;
    
}]);
