
angular.module('employeeApp')
.controller('SupplyFabricViewCtrl', ['$scope', 'Fabric', 'Notification', '$log', function ($scope, Fabric, Notification, $log) {

	var fetching = true;
	
	$scope.fabrics = Fabric.query(function () {
		fetching = false;
	});
    
    /*
     * Search the server
     * 
     * The controller will send a GET query to the server
     * with the query string as a paramter whenever the 
     * 'scope.query' changes. 
     * 
     * The results are then added to the '$scope.fabrics', if it 
     * is not already in the list, which is matched by the item id
     */
    $scope.$watch('query', function (q) {
		if (q) {
			Fabric.query({q: q, limit: 5}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.fabrics.indexOfById(resources[i].id) == -1) {
						$scope.fabrics.push(resources[i]);
					}
				}
			});
		}
	});
	
	
	/*
	 * Watch for changes in the status of the fabric
	 */
	$scope.$watch('fabrics', function (newVal, oldVal) {
		
		// Callback to run when the acknowledgement is finished updating
		function postUpdate (resp) {
			var notification = Notification.display('Fabric ' + resp.description +  " status updated to '" + resp.status.toLowerCase() + "'", 2000);
		}
		
		if (newVal && oldVal) {
			
			try{
				for (var i = 0; i < newVal.length; i++) {
					if (newVal[i] && oldVal[i]) {
						if (newVal[i].id === oldVal[i].id) {
							console.log(newVal[i], oldVal[i]);
							if (newVal[i].status != oldVal[i].status) {
							
								var notification = Notification.display('Updating ' + newVal[i].description + ' status...', false);
							
								newVal[i].$update(postUpdate);
							}
						}
					}
				}
			} catch (e) {
				$log.error(e);
			}
			
		}
		
	}, true);
	

	/*
	* Load more fabrics
	* 
	* This function will load more fabrics based on the 
	* current number of fabrics in the list, which becomes the offset. 
	* 
	* Note: The fabrics are not checked for duplicaiton before being added
	* to the list
	*/
    $scope.loadNext = function () {
		if (!fetching) {
			fetching = true;
			Notification.display('Loading more fabrics...', false);
			Fabric.query({
				offset: $scope.fabrics.length,
				limit: 50
			}, function (resources) {
				fetching = false;
				Notification.hide();
				for (var i = 0; i < resources.length; i++) {
					if ($scope.fabrics.indexOfById(resources[i].id) == -1) {
						$scope.fabrics.push(resources[i]);
					}
				}
			}, function (e) {
				fetching = false;
				Noification.display("Unable to load more fabrics.", false);
				$log.error(JSON.stringify(e));
			});
		}
	};
	
	/*
	* Functions to print stickers
	*/
	function setPrint () {				
	    var afterPrint = function() {
	        $(".print").empty();
	    };

	    if (window.matchMedia) {
	        var mediaQueryList = window.matchMedia('print');
	        mediaQueryList.addListener(function(mql) {
	            if (mql.matches) {
	               	angular.noop();
	            } else {
	                afterPrint();
	            }
	        });
	    }

		window.onafterprint = afterPrint;
			
		this.contentWindow.focus();
		this.contentWindow.print();
	}
	
	/**
	 * Print sticker for a fabric
	 * @private
	 * @param {Object} fabric fabric which to print the corresponding label
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.printFabricSticker = function (fabric) {
		var container = $(".print").empty();
		var iframe = document.createElement('iframe');
		iframe.onload = setPrint;
		iframe.src = "api/v1/supply/" + fabric.id + "/sticker/";
		container.append(iframe);
	};
	
}]);
