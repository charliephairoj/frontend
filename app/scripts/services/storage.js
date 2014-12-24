
angular.module('employeeApp.services')
.factory('$storage', [function() {
    function storageFactory(key){
        //Create the main factory
        function StorageEngine(key){
            //ASSIGNS KEY TO OBJECT
            this.key = key;
            //CHECKS IF SUPPORTS LOCALSTORAGE
            if('localStorage' in window && window.localStorage !== null){
				this.storage = window.localStorage;
				this.getKeys();
            }    
             
        }
        
       
        
        //determines if storage works
        StorageEngine.prototype.isSupported = function(){
            try {
                return 'localStorage' in window && window.localStorage !== null;
            }catch(e){
                return false;
            }
        };
        
        /*
         * The following methods deal with the key and 
         * array of keys that holds the ids for individual 
         * objects under this key.
         */
        
        //Create a key
        StorageEngine.prototype.createKeysArray = function(){
            this.keys = [];
            this.saveKeys();
            return this.keys;
        };
        
        //Save keys
        StorageEngine.prototype.saveKeys = function(){
            typeof(this.keys) === 'object' ? this.storage.setItem(this.key, JSON.stringify(this.keys)) : this.createKeysArray(); // jshint ignore:line
        };
        
        StorageEngine.prototype.createKey = function(){
            key = 'storage-temp'+Date.now();  
            return key;
        };
        
        //Save a key
        StorageEngine.prototype.saveKey = function(arg){
            
            var itemKey = this.key+arg;
            
            //CHECK IF keys is valid
            this.keys = this.keys || this.createKeysArray();
 
            //Checks for duplicates
            if(this.keys.indexOf(itemKey)===-1){
                this.keys.push(itemKey);
                this.saveKeys();
            }
            
            return itemKey;
        };
        
        //Retrieve all keys
        StorageEngine.prototype.getKeys = function(){
            
            //Get keys
            this.keys = JSON.parse(this.storage.getItem(this.key));
            //If keys are not an array, create an array to hold keys
            if(typeof(this.keys) != 'object'){
                //Create an for keys and saves it
                this.createKeysArray();
            } 
           
            return this.keys;
            
        };
        
        //Delete a key
        StorageEngine.prototype.deleteKey = function(key){
            
            //Checks whether keys are valid
            this.keys = this.keys || this.getKeys();
            
            var index = this.keys.indexOf(key);
            if(index!= -1){
                this.keys.splice(index);
                this.saveKeys();
                return true;
            }else{
                return false;
            }
        };
        
        //Clear Keys
        StorageEngine.prototype.clearKeys = function(){
            
            this.keys = [];
            this.storage.setItem(this.key, JSON.stringify(this.keys));
            if (JSON.parse(this.storage.getItem(this.key)).length===0) {
                return true;
            } else {
                return false;
			}
        };
        
        //Get a key
        StorageEngine.prototype.getKey = function(arg){
            //CREATE TEMPORARY KEY
            return this.key + arg;
               
        };
        
        /*
         * The following methods deal with the actual retrieving, storing
         * and delete of the object themselves represented by the keys
         */
        
        //querya all items of name space
        StorageEngine.prototype.query = function(){
            //create array to hold data
            var data = [], i;
            //iterate through all the keys
            this.keys = this.getKeys();   
            for(i in this.keys){
                data.push(JSON.parse(this.storage.getItem(this.keys[i])));
            }
            //return the data
            return data;
            
        };
        
        //Save item into storage
        StorageEngine.prototype.save = function(data){
            var itemKey;
            //Function to save object if it has an id
            function saveFn(obj){ 
                if(obj.hasOwnProperty('id')){
                    var itemKey = this.saveKey(obj.id);
                    this.storage.setItem(itemKey, JSON.stringify(obj));
                    return true;
                }else{
                    return false;
                }
            }
            var saveObject = saveFn.bind(this);
            //Check if the data is valid
            if(data){
                //Checks if an array or not
                if(angular.isArray(data)){
                    //loop through items
                    for(var i=0; i<data.length; i++){
                        //return false if data did not save
                        if(!saveObject(data[i])){
                            return false;
                        }
                    }
                }else{
                    //return false if data did not save
                    return saveObject(data) ? data : false;
                }
            }else{
                //return false if data is not valid
                return false;
            }
        };
        
        //Get an item from storage
        StorageEngine.prototype.get = function(args){
            if(args.hasOwnProperty('id')){  
                var itemKey;
                //CHECKS IF THE ARG
                
                
                itemKey = this.getKey(args.id);
                    
                if(itemKey){
                    return JSON.parse(this.storage.getItem(itemKey));
                }else{
                    return 'itemKey';  
                }    
                
                 
            }else{
                return args;  
            }
            
               
                
        };
        
     
        //Remove an Item from storage
        StorageEngine.prototype.remove = function(args){
            //declare vars
            var itemKey;
            //checks if object has an id
            if(args.hasOwnProperty('id')){
                //get item key from id
                itemKey = this.getKey(args.id);
                //delete item and item key
                this.storage.removeItem(itemKey);
                this.deleteKey(itemKey);
                
                return true;
            //returns false is has no id
            }else{
                return false;
            }
        };
        
        
        //Clear Items
        StorageEngine.prototype.clear = function(){
            
            var index;
            //clear items
            for(index in this.keys){
                this.storage.removeItem(this.keys[index]);
            }
            //clear keys
            this.clearKeys();
            
        };
        
        /*
         * Save and retrieves last modified time for resources
         */
        StorageEngine.prototype.saveLastModified = function(date){
            this.storage.setItem(this.key+"-last_modified", date.toISOString());
        };
        
        StorageEngine.prototype.getLastModified = function(){
            var dateStr = this.storage.getItem(this.key+"-last_modified");
            if(dateStr){
                return new Date(dateStr);
            }else{
                return false;
            }
        };
        
        return new StorageEngine(key);
    }
    
    return storageFactory;
}]);
