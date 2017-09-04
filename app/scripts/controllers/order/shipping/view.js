/*
 * All shipped orders view
 */
angular.module('employeeApp')
.controller('OrderShippingViewCtrl', ['$scope', 'Shipping', '$filter', '$mdToast', '$mdDialog', 'Fabric', 'Upholstery', 'Notification',
function ($scope, Shipping, $filter, $mdToast, $mdDialog, Fabric, Upholstery, Notification) {
	
	/*
	 * Vars and flags
	 */
	var fetching = true;
	
	$mdToast.show($mdToast
		.simple()
		.content('Loading shipping manifests...')
		.hideDelay(0));
	
	/*
	 * Get an array of shipping manifests from the server
	 */
	$scope.shippingList = Shipping.query(function (resources) {
		fetching = false;
		$mdToast.hide();
	});
	
	/*
	 * Search the server 
	 * 
	 * The controller will send a GET request to the server
	 * with the query string whenever the "$scope.query" changes
	 * and when it is not undefined
	 */
	$scope.$watch('query', function (q) {
		if (q) {
			Shipping.query({limit: 5, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.shippingList.indexOfById(resources[i].id) == -1) {
						$scope.shippingList.push(resources[i]);
					}
				}
			});
		}
	});
	
	/*
	 * Load more shipping manifests
	 * 
	 * The function will request more manifests based on the current number 
	 * and the offset. The number of new manifests is limited to 20, which can be 
	 * changed via the parameters. This is intended to be used in conjuction with 
	 * the "on-scroll-end" directive
	 */
	$scope.loadNext = function () {
		if (!fetching) {
			fetching = true;
			$mdToast.show($mdToast
				.simple()
				.content('Loading more shipping manifests...')
				.hideDelay(0));
				
			Shipping.query({
				offset: $scope.shippingList.length,
				limit: 20
			}, function (resources) {
				$mdToast.hide();
				for (var i = 0; i < resources.length; i++) {
					$scope.shippingList.push(resources[i]);
				}

				fetching = false;
			}, function () {
				fetching = false;
			});
		}
	};


	/**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showShipping = function (shipping) {
		
		$mdDialog.show({
			templateUrl: 'views/templates/view-shipping.html',
			controllerAs: 'ctrl',
			locals: {
				//'customers': $scope.customers,
				'shipping': shipping
			},
			controller: function ($scope, $mdDialog, shipping) {
				$scope.shipping = Shipping.get({'id':shipping.id});
				//$scope.customers = customers;
				$scope.tempComponent = {};
				$scope.openAttachment = function (link) {
					window.open(link);
				};
				
				/**
				 * FILES SECTIONs
				 *
				 * This section deals with files that are associated or to be associated with this acknowledgement
				 */

				/**
				 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
				 * @public
				 * @param {Array} files - Array of files with raw data
				 * @returns {null}
				 */
				$scope.addFiles = function (files, acknowledgement) {
					
					$scope.ack.files = ack.files || []; 
				
					/* jshint ignore:start */
					
					Notification.display('Uploading files', 2000);
					
					for (var i = 0; i < files.length; i++) {
						$scope.ack.files.push({filename: files[i].name});
					
						var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
						promise.then(function (result) {
							var data = result.data || result;
							for (var h = 0; h < $scope.ack.files.length; h++) {
								if (data.filename == $scope.ack.files[h].filename) {
									angular.extend($scope.ack.files[h], data);
								}
							}
							
							Notification.display('File Uploaded', 2000);

							$scope.ack.$update(function (resp) {
								Notification.display('Acknowledgement ' + $scope.ack.id + ' saved.', 2000);
								console.log($scope.ack);
							}, function (e){
								Notification.display(e, 0);
							});
							
						}, function (e) {
							$log.error(JSON.stringify(e));
							Notification.display(e.message, 0);
							
						});
					}
				
					/* jshint ignore:end */
				};

				/**
				 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
				 * @public
				 * @param {Array} files - Array of files with raw data
				 * @returns {null}
				 */
				$scope.addImage = function (files, item) {
					
					if (files.length > 0) {
						/* jshint ignore:start */	
						
						Notification.display('Uploading image...');
							
						var promise = FileUploader.upload(files[0], "api/v1/acknowledgement/item/image");
						promise.then(function (result) {
							var data = result.data || result;
							item.image = data
							Notification.display('Image uploaded.');
							
						}, function (e) {
							$log.error(JSON.stringify(e));
							
							Notification.display(e.message, 0);
							
						});
						/* jshint ignore:end */
					}
				};


				/**
				 * FABRIC SECTION
				 * 
				 * This section deals with the product listing and search
				 */
				
				// Inital list of upholsteries
				$scope.fabricSearchText = null;
				$scope.fabrics = Fabric.query({page_size:9999, offset:0, limit:0});
				
				// Watch on productSearchText to get products from the server
				$scope.retrieveFabrics = function (query) {		
					if (query) {
						Fabric.query({q:query}, function (responses) {
							for (var i = 0; i < responses.length; i++) {
								if ($scope.fabrics.indexOfById(responses[i]) === -1) {
									$scope.fabrics.push(responses[i]);
								}
							}
						});
					}
				};
				
				/**
				 * Returns a list of fabric whose description matches the search term
				 *
				 * @public
				 * @param {String} query - Search term to apply against fabric.description
				 * @returns {Array} - An array of fabrics whose description matches the search term
				 */
				$scope.searchFabrics = function (query) {
					var lowercaseQuery = angular.lowercase(query.trim());
					var fabrics = [];
					for (var i = 0; i < $scope.fabrics.length; i++) {
						try{
							if (angular.lowercase($scope.fabrics[i].description).indexOf(lowercaseQuery) !== -1) {
								fabrics.push($scope.fabrics[i]);
							}
						} catch(e) {
							
						}
						
					}
					return fabrics;
				};
				
				$scope.addComponent = function (item, component) {
					item.components.push(angular.copy(component));

					$scope.tempComponent = {};

				}
	
				/**
				 * Save the acknowledgement
				 * 
				 * @public
				 * @param {Object} acknowledgement - The acknowledgement to be saved
				 */
				$scope.update = function (acknowledgement) {
					
					Notification.display("Updating order #" + acknowledgement.id);
					
					acknowledgement.$update(function () {
						Notification.display("Order #" + acknowledgement.id + " updated");
					});
				};
				
				
				$scope.cancel = function () {
					$mdDialog.hide();
				}
			},
			clickOutsideToClose: true
		});
	};
}]);
