
angular.module('employeeApp.services')
.factory('indexOfId', ['$q', function($q) {
	function filter(){
		this.worker = new Worker('scripts/workers/index-of-id.js');
	}
   
	filter.prototype._prepare_id = function(arg1){
		if(typeof(arg1) == "object"){
           
		}else if(typeof(arg1) == 'number'){
           
		}
	};
   
	filter.prototype.filter = function(arg1, haystack, callback){
		var needle = this._prepare_id(arg1);
		this.worker.onmessage = function(e){
			(callback || angular.noop)(e.data);
		};
	};
   
   //return new filter();
}]);
