
angular.module('employeeApp.services')
.factory('CurrentUser', ['$http', function($http) {
	//Create the initial object
	function User() { 
		//Declare flags and array holder for fns
		this.ready = false;
		this._onready = [];

		//Get information about the current user
		
		var promise = $http.get('/api/v1/current_user');
		promise.then(function (response) {
			angular.extend(this, response.data || {});
			this.ready = true;
			for (var i=0; i<this._onready.length; i++) {
				this._onready[i](response.data);
			}
		}.bind(this));
		
    }
    
    //checks if user has a permission
    User.prototype.hasPermission = function(permStr){
        //If the permissions are not yet
        //loaded then false is returnd
        return this.modules ? this.permissions.indexOf(permStr) !== -1 ? true :false : false;
    };
    
    //Checks if user has a module
    User.prototype.hasModule = function(moduleStr){
        //If the permissions are not yet
        //loaded then false is returnd
        return this.modules ? this.modules.indexOf(moduleStr) !== -1 ? true :false : false;
    };
    
    Object.defineProperties(User.prototype, {
		onready: {
			set: function (fn) {
				if (typeof(fn) == 'function') {
					this._onready.push(fn);
				}
			}
		}
	});
    //return the user
    return User;
}]);
