
/*
 * indexedDB Storage
 * 
 * This file implements a indexedDB backend to store objects
 * from the server and the provide them as a cache and other 
 * potential uses. 
 * 
 * Private Methods:
 * - _save()
 * - _get()
 * - _query()
 * - _remove()
 * 
 * Public Methods:
 * -save()
 * -get()
 * -query()
 * -remove()
 * -clear()
 */
angular.module('employeeApp.services')
.factory('DB', ['$q', '$timeout', '$rootScope',  function ($q, $timeout, $rootScope) {
	/*
	 * Private Vars
	 */
	var db,
		version = 1,
		objectStores = [
			{
				'resourceName': 'supply',
				'keyPath': 'id',
				'indexes': ['id', 'supplier']
			},
			{
				'resourceName': 'acknowledgement',
				'keyPath': 'id',
				'indexes': ['id', 'delivery_date']
			}
		];
		
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	
	/*
	 * Private functions 
	 */
	
	/*
	 * Open database
	 */
	function openDatabase() {
		
		var openRequest = indexedDB.open("employee", version),
			objectStore;
		
		//On success
		openRequest.onsuccess = function (e) {
			//Get the database
			db = e.target.result;
		};
		
		//On Error
		openRequest.onerror = function (e) {
			console.log('Error opening indexedDB');
			console.dir(e);
		};
		
		//On Upgrade Needed
		openRequest.onupgradeneeded = function (e) {
			console.log("Upgrading the indexedDB..");
			
			//Get the database
			db = e.target.result;
			
			//Create the object store if it does not exists
			for (var i = 0; i < objectStores.length; i++) {
				var param = objectStores[i];
				
				//Creates the store if not yet created
				if (!db.objectStoreNames.contains(param.resourceName)) {
					objectStore = db.createObjectStore(param.resourceName, {keyPath: param.keyPath});
				} else {
					objectStore = db.transaction.objectStore(param.resourceName);
				}
				
				//Cycle throught the indexes
				for (var h = 0; h < param.indexes.length; h++) {
					var index = param.indexes[h];
					
					//Creates indexes if not yet created
					if (!objectStore.indexNames.contains(index)) {
						objectStore.createIndex(index, index, {unique: false});
					}
				}
			}
		};
	}
	
	function DB(resourceName) {
		this.resourceName = resourceName;
		
		if (!db) {
			openDatabase();
		}
		
		/*
		 * Query
		 * 
		 * Gets all the objects in the object store that 
		 * meets the specified parameters
		 */
		this.query = function () {
			var deferred = $q.defer(),
				objectStore = db.transaction([this.resourceName]);
				
			objectStore.openCursor().onsuccess = function (event) {
				var	data = [], 
					cursor = event.target.result;
				
				//Add object to the array and continue to the next one
				if (cursor) {
					data.append(cursor.value);
					cursor.continue(); //jshint ignore:line
				
				//Resolve the promise
				} else {
					deferred.resolve(data);
				}
			};
			
			return deferred.promise;
		};
		
		this.get = function (id) {
			var deferred = $q.defer(),
				objectStore = db.transaction([this.resourceName]);
			
			var request = objectStore.get(id);
			
			request.onsuccess = function (e) {
				var result = request.result;
				
				deferred.resolve(result);
			};
			
			return deferred.promise;
			
		};
		
		this.create = function (obj) {
			var deferred = $q.defer(),
				objectStore = db.transaction([this.resourceName], 'readwrite');
				
			var request = objectStore.add(object);
			
			request.onsucces = function (e) {
				deferred.resolve();
			};
			
			request.onerror = function (e) {
				console.log(e.target.error.name);
			};
			
			return deferred.promise;
		};
		
		this.update = function (obj) {
			var deferred = $q.defer(),
				objectStore = db.transaction([this.resourceName], 'readwrite');
				
			var request = objectStore.put(object);
			
			request.onsucces = function (e) {
				deferred.resolve();
			};
			
			request.onerror = function (e) {
				console.log(e.target.error.name);
			};
			
			return deferred.promise;
		};
	}
	
    function DBFactory(resourceName) {
		return new DB(resourceName);
    }
    
    return DBFactory;
}]);
