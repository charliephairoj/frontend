
angular.module('employeeApp.services')
.factory('Notification', ['$timeout', '$rootScope', '$mdToast', function($timeout, $rootScope, $mdToast) {
    function center(target){
        var width = angular.element(window).width();
        var tWidth = angular.element(target).width();
        if (angular.element(target).css('left') === 0) {
            angular.element(target).css('left', width-tWidth);
        } else {
            angular.element(target).css('margin-left', -(tWidth/2));
        }
    }
    
	function spawnNotification(message, autoHide) {
		
		var notification = new Notification(message);
		
		if (autoHide) {
			setTimeout(function () {
				this.close();
			}.bind(notification), autoHide);
		}
		
		function close() {
			notification.close();
		}
		
		return {
			hide: close,
			close: close
		};
	}
	
	function spawnToast(message, autoHide) {
		
		autoHide = autoHide === undefined ? 2000 : autoHide;
		
		var promise = $mdToast.show($mdToast
							.simple()
							.action('CLOSE')
							.position('bottom right')
							.content(message)
							.hideDelay(autoHide));
		
		return {
			hide: $mdToast.hide,
			close: $mdToast.hide
		};
	}
	
	function spawnSimpleNotification(message, autoHide) {
        //Change message and 
		
        $rootScope.safeApply(function () {
            this.notification.html(message);
            center(this.notification);
            this.notification.addClass('active');
        }.bind(this));
        
        
        //Cancels the fadingout and 
        //removal of message
        if(this.promise){
            $timeout.cancel(this.promise);
        }
        
        if(autoHide !== false){
           
            this.promise = $timeout(function () {
                this.hide();
                
            }.bind(this), 1000);
        }
		
		
		var close = function () {
			this.notification.removeClass('active');
		}.bind(this);
		
		return {
			hide: close,
			close: close
		};
	}
	
    function Notifier() {
		
        this.notification = angular.element(document.getElementById('notification'));
        this.promise = null;
		this._display = spawnToast;
		
		//Determine which notification system to use
		if (!("Notification" in window)) {
			this._display = spawnSimpleNotification;
		} else if (Notification.permission === 'granted') {
				this._display = spawnToast;
		} else {
			Notification.requestPermission(function (permission) {
			
				if (permission === 'granted') {
					this._display = spawnNotification;
				} else {
					this._display = spawnSimpleNotification;
				}
			});
		}
    }
    
    
    /*
     * The display function will display a new messge
     * And call a timeout after a certain amount of time
     * to fade out the message. If the message is already displayed,
     * it will just change the message and cancel the old timeout.
     */
    Notifier.prototype.display = function (message, autoHide) {
        
		var notification = this._display(message, autoHide);
		
		return notification;
		
    };
    
    Notifier.prototype.hide = function () {
        //Remove Message and 
        this.notification.removeClass('active');
		
		$mdToast.hide();
    };
    
    return new Notifier();
}]);
