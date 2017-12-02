
angular.module('employeeApp')
.controller('AccountingAccountViewCtrl', ['$scope', 'Account', '$mdDialog', 'Notification', '$log', '$timeout',
function ($scope, Account, $mdDialog, Notification, $log, $timeout) {
	$scope.accounts = Account.query();
    var fetching = false;

    //Loads the next set of data
	$scope.loadNext = function () {
		if (!fetching) {
            fetching = true;
            Notification.display("Loading more accounts...", false);
			
			Account.query({
				limit: 50, 
				offset: $scope.accounts.length
			}, function (resources) {
                Notification.hide();
                
				for (var i = 0; i < resources.length; i++) {
					$scope.accounts.push(resources[i]);
                }
                
                fetching = false;
                
			});
		}
    };
    

    /**
     * Update the account when there is a change
     */
    $scope.update = function(account) {
        $timeout.cancel(account.$$temporaryUpdate);
        account.$$temporaryUpdate = $timeout(function () {
            Notification.display("Updating account " + this.code + '...');
            
            this.$update(function(){
                Notification.display("Updated account " + this.code + '.');
            }.bind(this));
        }.bind(account), 5000);
    }


    /**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showAddAccount = function () {
		
		$mdDialog.show({
			templateUrl: 'views/templates/add-account.html',
			controllerAs: 'ctrl',
			locals: {
                accounts: $scope.accounts
			},
			controller: function ($scope, $mdDialog, accounts) {
                $scope.account = new Account();
                
				/**
				 * Save the acknowledgement
				 * 
				 * @public
				 * @param {Object} acknowledgement - The acknowledgement to be saved
				 */
				$scope.add = function () {
					
					Notification.display("Adding a new Account to the Chart of Accounts");
					
					$scope.account.$create(function (resp) {
                        Notification.display("Account " + resp.code + ": " + resp.name_en);
                        accounts.push(angular.copy(resp));
                        $scope.cancel();
					}, function (e) {
                        $log.error(e);
                    });
				};
				
				
				$scope.cancel = function () {
                    $scope.account = new Account();
					$mdDialog.hide();
				}
			},
			clickOutsideToClose: true
		});
	};
}]);
