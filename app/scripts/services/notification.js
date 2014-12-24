
angular.module('employeeApp.services')
.factory('Notification', ['$timeout', '$rootScope', function($timeout, $rootScope) {
    function center(target){
        var width = angular.element(window).width();
        var tWidth = angular.element(target).width();
        if (angular.element(target).css('left') === 0) {
            angular.element(target).css('left', width-tWidth);
        } else {
            angular.element(target).css('margin-left', -(tWidth/2));
        }
    }
    
    function Notifier() {
        this.notification = angular.element(document.getElementById('notification'));
        this.promise = null;
    }
    
    
    /*
     * The display function will display a new messge
     * And call a timeout after a certain amount of time
     * to fade out the message. If the message is already displayed,
     * it will just change the message and cancel the old timeout.
     */
    Notifier.prototype.display = function (message, autoHide) {
        
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
    };
    
    Notifier.prototype.hide = function () {
        //Remove Message and 
        this.notification.removeClass('active');
    };
    
    return new Notifier();
}]);
