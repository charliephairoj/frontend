
angular.module('employeeApp')
.controller('OrderPurchaseOrderViewCtrl', ['$scope', 'PurchaseOrder', '$filter', 'KeyboardNavigation', '$location', 'Notification', 'Supply', 'Supplier', '$log', '$mdDialog', 'Acknowledgement',
function ($scope, PurchaseOrder, $filter, KeyboardNavigation, $location, Notification, Supply, Supplier, $log, $mdDialog, Acknowledgement) {
	
	//Flags and variables
	var fetching = true,
		index = 0,
		currentSelection,
		search = $location.search();
		
	//System wide message
	Notification.display('Loading purchasing orders...');
		
	//Poll Server for pos
	$scope.poList = PurchaseOrder.query({limit: 20}, function () {
		for (var i = 0; i < $scope.poList.length; i++) {
			var rD = $scope.poList[i].receive_date;
			var pD = $scope.poList[i].paid_date;
			$scope.poList[i].receive_date = rD ? new Date(rD) : rD; 
			$scope.poList[i].paid_date = pD ? new Date(pD) : pD; 
		}
		
		fetching = false;
		changeSelection(index);
	}, function () {
		fetching = false;
	});

	$scope.supplies = [];
	$scope.acknowledgements = Acknowledgement.query({page_size:10, limit:0});
	
	$scope.openAttachment = function (link) {
		window.open(link);
	}
	
	/**
	 * Get the total from a list of deals that has a certain status
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.getTotal = function (stage) {
		var total = 0;
		
		for (var i = 0; i < $scope.poList.length; i++) {
			if ($scope.poList[i].status.toLowerCase() === stage.toLowerCase()) {
				var amount;
				
				amount = $scope.poList[i].total;
				/*
				if ($scope.acknowledgements[i].currency.toLowerCase() === 'thb') {
					amount = $scope.acknowledgements[i].grand_total;
				} else {
					switch($scope.acknowledgements[i].currency.toLowerCase()) {
						case 'eur':
							amount = $scope.acknowledgements[i].grand_total * 40;
						case 'usd': 
							amount = $scope.acknowledgements[i].grand_total * 35;
					}
						
				}
				*/
				total += amount;
			}
		}
		
		return total;
	};


	/**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showPurchaseOrder = function (po) {
		
		$mdDialog.show({
			templateUrl: 'views/templates/view-purchase-order.html',
			controllerAs: 'ctrl',
			locals: {
				'suppliers': $scope.suppliers,
				'po': po,
				'supplies': $scope.supplies,
				'acknowledgements': $scope.acknowledgements
			},
			controller: function ($scope, $mdDialog, suppliers, po, supplies, acknowledgements) {
				$scope.po = PurchaseOrder.get({'id':po.id}, function (resp) {
					if ($scope.po.acknowledgement) {
						$scope.selectedAck = $scope.po.acknowledgement;
						if ($scope.acknowledgements.indexOfById($scope.po.acknowledgement) === -1) {
							$scope.acknowledgements.push($scope.po.acknowledgement);
						}
					}
					
				});
				$scope.suppliers = suppliers;
				$scope.supplies = supplies;
				$scope.acknowledgements = acknowledgements;
				$scope.tempComponent = {};
				$scope.openAttachment = function (link) {
					window.open(link);
				};
				
				/**
				 * ACKNOWLEDGEMENT SECTION
				 *
				 * Describes the projects, room and phases
				 */
				
				// Watch on supplierSearchText to get products from the server
				$scope.retrieveAcks = function (query) {
					console.log(query);
					if (query) {
						Acknowledgement.query({q:query}, function (responses) {
							for (var i = 0; i < responses.length; i++) {
								if ($scope.acknowledgements.indexOfById(responses[i]) === -1) {
									$scope.acknowledgements.push(responses[i]);
								}
							}
						});
					}
				};

				/**
				 * Returns a list of projects whose codename matches the search term
				 * @public
				 * @param {String} query - Search term to apply against project.codename
				 * @returns {Array} - An array of projects whose codename matches the search term
				 */
				$scope.searchAcks = function (query) {
					console.log(query);
					var lowercaseQuery = angular.lowercase(query);
					var acks = [];
					
					/*
					for (var i = 0; i < scope.acknowledgements.length; i++) {
						if (angular.lowercase(scope.acknowledgements[i].id).indexOf(lowercaseQuery) !== -1) {
							acks.push(scope.acknowledgements[i]);
						}
					}
					*/

					var acks = $filter('filter')($scope.acknowledgements, query);
					return acks;
				};

				$scope.addAck = function (acknowledgement) {
					if (acknowledgement) {
						$scope.po.acknowledgement = acknowledgement;
					}
					
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
				$scope.addFiles = function (files, po) {
					
					$scope.po.files = po.files || []; 
				
					/* jshint ignore:start */
					
					Notification.display('Uploading files', 2000);
					
					for (var i = 0; i < files.length; i++) {
						$scope.po.files.push({filename: files[i].name});
					
						var promise = FileUploader.upload(files[i], "/api/v1/acknowledgement/file/");
						promise.then(function (result) {
							var data = result.data || result;
							for (var h = 0; h < $scope.po.files.length; h++) {
								if (data.filename == $scope.po.files[h].filename) {
									angular.extend($scope.po.files[h], data);
								}
							}
							
							Notification.display('File Uploaded', 2000);

							$scope.po.$update(function (resp) {
								Notification.display('Purchase Order ' + $scope.po.id + ' saved.', 2000);
								console.log($scope.po);
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
				 * PRODUCT SECTION
				 *
				 * This section deals with the product listing and search
				 */

				// Watch on productSearchText to get products from the server
				$scope.retrieveSupplies = function (query) {
					$scope.supplies = $scope.supplies || [];
					var options = {};
					if (query) {
						options.q = query;
					}

					if ($scope.po.supplier) {
						if ($scope.po.supplier.id) {
							options.supplier_id = $scope.po.supplier.id;
						}
					}

					Supply.query(options, function (responses) {
						for (var i = 0; i < responses.length; i++) {
							if ($scope.supplies.indexOfById(responses[i]) === -1) {
								console.log(responses[i]);
								$scope.supplies.push(responses[i]);
							}
						}
					});
				};

				/**
				 * Returns a list of supplies whose description matches the search term
				 * @public
				 * @param {String} query - Search term to apply against supply.description
				 * @returns {Array} - An array of supplies whose description matches the search term
				 */
				$scope.searchSupplies = function (query) {
					var lowercaseQuery = angular.lowercase(query.trim());
					var supplies = [];
					$scope.supplies = $scope.supplies || [];

					for (var i = 0; i < $scope.supplies.length; i++) {

						if (lowercaseQuery) {
							if (angular.lowercase(String($scope.supplies[i].description)).indexOf(lowercaseQuery) !== -1) {
								supplies.push($scope.supplies[i]);
							}
						} else {
							supplies.push($scope.supplies[i]);
						}

					}
					return supplies;
				};


				/*
				* Add an item to the purchase order
				*/
				$scope.addItem = function (item) {
					
					if (item.description) {
						$scope.po.items = $scope.po.items || [];
						var purchasedItem = angular.copy(item);
			
						delete purchasedItem.quantity;
			
						/*
						* Apply the items unit cost or cost from supplier to the supply cost
						*/
						purchasedItem.cost = Number((purchasedItem.cost || purchasedItem.unit_cost) || 0);
			
						if (!purchasedItem.cost && purchasedItem.hasOwnProperty('suppliers') && $scope.po.supplier) {
							if ($scope.po.supplier.id) {
								for (var i = 0; i < purchasedItem.suppliers.length; i++) {
									if (purchasedItem.suppliers[i].supplier.id === $scope.po.supplier.id) {
										purchasedItem.cost = Number(purchasedItem.suppliers[i].cost);
										purchasedItem.purchasing_units = purchasedItem.suppliers[i].purchasing_units;
										purchasedItem.suppliers[i].supplier = {id: $scope.po.supplier.id};
									}
								}
							}
						}
			
						// Update the specific supplier information for this item
						if (purchasedItem.suppliers) {
							for (var h = 0; h < purchasedItem.suppliers.length; h++) {
								if ($scope.po.supplier && purchasedItem.suppliers[h].supplier) {
									if (purchasedItem.suppliers[h].supplier.id === $scope.po.supplier.id) {
										purchasedItem.suppliers[h].purchasing_units = purchasedItem.purchasing_units;
									}
								}
			
							}
						}
			
			
						//Add new supply to the list of items for the purchase order
						$scope.po.items.push(purchasedItem);
					}
			
				};

				/**
				 * Remove item
				 */

				 $scope.removeItem = function ($index) {
					 $scope.po.items.splice($index, 1);
				 }

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
				 * Check if a supply is new for a supplier
				 *
				 * @public
				 * @param {String|Object|Array|Boolean|Number} supply - supply to be check
				 * @param {String|Object|Array|Boolean|Number} supplier - supplier to be checked against
				 * @returns {Boolean} - a boolean indicating if this is a new supply or not
				 */
				$scope.isNewSupply = function (supply, supplier) {
					if (supply.id && supplier && supply.suppliers) {
						for (var i = 0; i < supply.suppliers.length; i++) {
							if (supply.suppliers[i].supplier.id === supplier.id) {
								return false;
							}
						}
					}

					return true;
				};

			
				/*
				* Verfication of order
				*/
				$scope.validatePurchaseOrder = function (purchaseOrder) {
					purchaseOrder = purchaseOrder || $scope.po;

					if (!purchaseOrder.hasOwnProperty('supplier')) {
						throw new Error("Please select a supplier");
					}

					if (!purchaseOrder.receive_date instanceof Date ||
						!purchaseOrder.receive_date) {
						throw new Error("Please select a 'Receiving Date' for the order");
					}

					//if (!purchaseOrder.currency) {
						//throw new TypeError("Please select a currency for this order");
					//}

					if (purchaseOrder.items.length <= 0) {
						throw new Error("Please add items to the purchase order");
					}

					if (purchaseOrder.items) {
						for (var i = 0; i < (purchaseOrder.items.length ||[]); i++) {
							if (!purchaseOrder.items[i].quantity || purchaseOrder.items[i].quantity <= 0) {
								throw new Error(purchaseOrder.items[i].description + " is missing a quantity");
							}
						}
					} else {
						throw new TypeError("Please add items to purchase before creating");
					}
					

					return true;
				};

				//Check the progress of customer, project creation
				$scope._checkProgress = function (progress, callback) {

					for (var key in progress) {
						if (progress[key] === false) {
							return false;
						} else if (progress[key] === 'error') {
							throw new Error();
						}
					}
					(callback || angular.noop)();
				};

				/**
				 * Create or update the supplier
				 *
				 * @private
				 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
				 * @returns Describe what it returns
				 * @type String|Object|Array|Boolean|Number
				 */

				$scope._prepareSupplier = function (purchaseOrder, progress, callback) {
					//Checks if customer exists and creates if not
					if (!purchaseOrder.supplier.id && purchaseOrder.supplier.name) {
						progress.supplier = false;

						var supplier = new Supplier();
						angular.extend(supplier, purchaseOrder.supplier);

						supplier.$create(function (resp) {
							angular.extend(purchaseOrder.supplier, resp);
							progress.supplier = true;

							callback();
						}, function () {
							progress.supplier = 'error';
						});
					} else if (purchaseOrder.supplier.id) {
						progress.supplier = false;

						var supplier = new Supplier();
						angular.extend(supplier, purchaseOrder.supplier);

						supplier.$update(function (resp) {
							angular.extend(purchaseOrder.supplier, resp);
							progress.supplier = true;

							callback();

						}, function () {
							progress.supplier = 'error';
						});
					}
				};


				/**
				 * Create a new supply
				 *
				 * @private
				 * @param {Object} supply - supply object to create
				 * @param {Object} supplier - supplier to be associated with the supply
				 * @returns Describe what it returns
				 * @type String|Object|Array|Boolean|Number
				 */

				$scope._createSupply = function (supply, supplier, progress, callback) {

					// Add progress check
					progress[supply.description] = false;

					console.log(supplier);
					// Associate this supplier with the supply
					supply.suppliers = [supplier];
					supply.suppliers[0].supplier = {id: supplier.id};
					supply.suppliers[0].cost = supply.unit_cost || supply.cost;

					var resource = new Supply(supply);
					console.log(resource);
					// Create a new supply
					resource.$create(function (response) {

						angular.extend(supply, response);

						// Move supply id location to avoid item update
						// instead of item creation
						supply.supply = {id: supply.id};
						delete supply.id;

						// Check the progress
						progress[supply.description] = true;
						$scope._checkProgress(progress, callback);

					}, function (reason) {
						$log.error(reason);
					});

				};

				/**
				 * Update and existing supply
				 *
				 * @private
				 * @param {Object} supply - supply object to create
				 * @param {Object} supplier - supplier to be associated with the supply
				 * @returns Describe what it returns
				 * @type String|Object|Array|Boolean|Number
				 */

				$scope._updateSupply = function (supply, supplier, progress, callback) {

			

					// Update supply with new supplier
					if ($scope.isNewSupply(supply, supplier)) {
						var supplierData = angular.copy(supplier);
						supplierData.cost = supply.unit_cost || supply.cost;

						// Move the supplier id
						supplierData.supplier = {'id': supplierData.id};
						delete supplierData.id;

						// Add new supplier
						supply.suppliers = supply.suppliers || [];
						supply.suppliers.push(supplierData);

						// Add progress check
						progress[supply.id] = false;

						var resource = new Supply(supply);

						resource.$update(function (response) {
							angular.extend(supply, response);

							// Move supply id location to avoid item update
							// instead of item creation
							supply.supply = {id: supply.id};
							delete supply.id;

							// Check the progress
							progress[supply.supply.id] = true;
							$scope._checkProgress(progress, callback);

						}, function (reason) {
							$log.error(reason);
						});

					} else {
						// Update the specific supplier information for this item
						for (var h = 0; h < supply.suppliers.length; h++) {
							if (supplier && supply.suppliers[h].supplier) {
								if (supply.suppliers[h].supplier.id === supplier.id) {
									supply.suppliers[h].purchasing_units = supply.purchasing_units;
								}
							}

						}

						var resource = new Supply(supply);

						resource.$update(function (response) {
							angular.extend(supply, response);

							// Move supply id location to avoid item update
							// instead of item creation
							supply.supply = {id: supply.id};
							delete supply.id;

							// Check the progress
							progress[supply.supply.id] = true;
							$scope._checkProgress(progress, callback);

						}, function (reason) {
							$log.error(reason);
						});
					}
				};

				/**
				 * Prepare the purchase order for creation. Creates supplier, project, room, and phase
				 * if they are respectively new
				 *
				 * @private
				 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
				 * @param {Function} callback - Function to call if the creations are successful
				 */

				$scope._preparePurchaseOrder = function (purchaseOrder, callback) {

					// Prepare the supplies and projects and makes final callback to create po
					// To be passed into prepare supplier callback
					function prepareSuppliesAndProjects() {
						//Checks if the project exists and create if not
						if (purchaseOrder.project) {
							if (!purchaseOrder.project.id && purchaseOrder.project.codename) {
								progress.project = false;
								var project = new Project();
								angular.extend(project, purchaseOrder.project);

								project.$create(function (resp) {
									angular.extend(purchaseOrder.project, resp);
									progress.project = true;
									$scope._checkProgress(progress, callback);
								}, function () {
									progress.project = 'error';
								});
							}
						}

						//Check if items are custom
						for (var i = 0; i < purchaseOrder.items.length; i++) {
							if (purchaseOrder.items[i].hasOwnProperty('id')) {
								// Update the supply
								$scope._updateSupply(purchaseOrder.items[i], purchaseOrder.supplier, progress, callback);
							} else {
								// Create a new supply
								$scope._createSupply(purchaseOrder.items[i], purchaseOrder.supplier, progress, callback);
							}
						}

						// Signal to progress check that supplies preparation has passed
						progress.supplies = true;
						$scope._checkProgress(progress, callback);
					}

					//Object used to track progress of sub-resource creations
					var progress = {supplies:false};
					$scope._prepareSupplier(purchaseOrder, progress, prepareSuppliesAndProjects);

				};

				$scope._sendCreateRequest = function () {

					if (!$scope.creating) {
						$scope.creating = true;

						purchaseOrder = this || $scope.po;


						purchaseOrder.$update(function (response) {
							$scope.creating = false;
							Notification.display('Purchase order updated.');

							angular.extend(purchaseOrder, response);
							//Change page to newly saved purchase order page
							//$location.path("/order/purchase_order/" + response.id);

						}, function (e) {
							$scope.creating = false;
							$log.error(JSON.stringify(e));
							Notification.display("There was an error in updating the purchase order. A report has been sent to Charlie");

						});

					}

				};

				/*
				* Save the purchase order to the server
				*/
				$scope.xupdate = function (purchaseOrder) {
					purchaseOrder = purchaseOrder || $scope.po;
					try {
						if ($scope.validatePurchaseOrder(purchaseOrder)) {

							Notification.display('Updating purchase order...');
							
							$scope._preparePurchaseOrder(purchaseOrder, $scope._sendCreateRequest.bind(purchaseOrder));
						}
					} catch (e) {
						$log.error(JSON.stringify(e));
						Notification.display(e.message);
					}
				};
				/**
				 * Save the po
				 * 
				 * @public
				 * @param {Object} po - The acknowledgement to be saved
				 */
				$scope.update = function (po) {
					
					Notification.display("Updating order #" + po.id);
					
					po.$update(function () {
						Notification.display("Order #" + po.id + " updated");
					});
				};
				
				
				$scope.cancel = function () {
					$mdDialog.hide();
				}
			},
			clickOutsideToClose: true
		});
	};


	$scope.updateStage = function (po, status) {

		if (po.status.toLowerCase() == "approved" && po.approval_pass || 1==1) {
			console.log(po);
			console.log(status);
			var index = $scope.poList.indexOfById(po);
			console.log(index);
			if (index > -1) {
				if (!$scope.poList[index].items) {
					PurchaseOrder.get({id:po.id}, function (resp) {
						console.log(resp);
						console.log(index);
						console.log($scope.poList[index]);
						$scope.poList[index] = resp;
						$scope.poList[index].status = status;
						$scope.poList[index].$update();
					});
				} else {
					$scope.poList[index].status = status;
					$scope.poList[index].$update();
				}
				
				
			}
		}
    };
	

	/*
	 * Search Mechanism
	 * 
	 * a wartch is put on the query model. 
	 * whenever it changes a request is made to the server 
	 * with the query
	 * 
	 * The resources are then integrated with the list of 
	 * PO's so that there are no duplicates
	 */
	$scope.$watch('query.$.$', function (q) {
		if (q) {
			$location.search('q', q);
			PurchaseOrder.query({limit: q ? 10 * q.length : 5, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					var rD = resources[i].receive_date;
					var pD = resources[i].paid_date;
					resources[i].receive_date = rD ? new Date(rD) : rD; 
					resources[i].paid_date = pD ? new Date(pD) : pD; 
				
					if ($scope.poList.indexOfById(resources[i].id) == -1) {
						$scope.poList.push(resources[i]);
					}
				}
				index = 0;
				changeSelection(index);				
			});
		}
	});
	
	/* 
	 * Set default search from search url
	 */
	if (search.q) {
		$scope.query = {$: {$: search.q}};
		$scope.safeApply();
	}
	
	/**
	 * PRODUCT SECTION
	 * 
	 * This section deals with the product listing and search
	 */
	
	// Watch on productSearchText to get products from the server
	$scope.retrieveSupplies = function (query) {
		$scope.supplies = $scope.supplies || [];
		var options = {};
		if (query) {
			options.q = query;
		} 
		
		/*
		if ($scope.po.supplier) {
			if ($scope.po.supplier.id) {
				//options.supplier_id = $scope.po.supplier.id;
			}
		}
		*/
		
		Supply.query(options, function (responses) {
			for (var i = 0; i < responses.length; i++) {
				if ($scope.supplies.indexOfById(responses[i]) === -1) {
					$scope.supplies.push(responses[i]);
				}
			}
		});
	};
	
	/**
	 * Returns a list of supplies whose description matches the search term
	 * @public
	 * @param {String} query - Search term to apply against supply.description
	 * @returns {Array} - An array of supplies whose description matches the search term
	 */
	$scope.searchSupplies = function (query) {
		var lowercaseQuery = angular.lowercase(query.trim());
		var supplies = [];
		$scope.supplies = $scope.supplies || [];
		
		for (var i = 0; i < $scope.supplies.length; i++) {
			
			if (lowercaseQuery) {
				if (angular.lowercase(String($scope.supplies[i].description)).indexOf(lowercaseQuery) !== -1) {
					supplies.push($scope.supplies[i]);
				}
			} else {
				supplies.push($scope.supplies[i]);
			}
			
		}
		return supplies;
	};
	
	/*
	 * Cancel adding a item 
	 */
	$scope.cancelAddPhase = function () {
		$mdDialog.hide();
		$scope.phase = undefined;
	};
	
    /*
	 * Add an item to the purchase order
	 */
	$scope.addItem = function (po, item) {
		console.log(po, item);
		if (item.description) {
			po.items = po.items || [];
			var purchasedItem = angular.copy(item);
		
			delete purchasedItem.quantity;
		
			/*
			 * Apply the items unit cost or cost from supplier to the supply cost
			 */
			purchasedItem.cost = Number((purchasedItem.cost || purchasedItem.unit_cost) || 0);
		
			if (!purchasedItem.cost && purchasedItem.hasOwnProperty('suppliers') && po.supplier) {
				if (po.supplier.id) {
					for (var i = 0; i < purchasedItem.suppliers.length; i++) {
						if (purchasedItem.suppliers[i].supplier.id === po.supplier.id) {
							purchasedItem.cost = Number(purchasedItem.suppliers[i].cost);
							purchasedItem.purchasing_units = purchasedItem.suppliers[i].purchasing_units;
							purchasedItem.suppliers[i].supplier = {id: po.supplier.id};
						}
					}
				}
			}
		
			//Add new supply to the list of items for the purchase order
			po.items.push(purchasedItem);
		}
		
	};
	
	/*
	 * Remove an item fro the purchase order
	 */
	$scope.removeItem = function (po, index) {
		po.items.splice(index, 1);
		
		if (po.items.length === 0) {
			po.items = [];
		}
	};
	
	
	$scope.loadNext = function () {
		if (!fetching) {
			//System wide message
			Notification.display('Loading more purchasing orders...');
			fetching = true;
			
			var config = {
				limit:20,
				offset: $scope.poList.length
			};
			
			try{
				if ($scope.query.$.$) {
					config.q = $scope.query.$.$;
					config.offset = $filter('filter')($scope.poList, config.q).length; 
				
				}
			} catch (e) {
				
			}
			
			
			PurchaseOrder.query(config, function (resources) {
				fetching = false;
				for (var i = 0; i < resources.length; i++) {
					if ($scope.poList.indexOfById(resources[i].id) == -1) {
						$scope.poList.push(resources[i]);
					}
				}
			});
		}
	};
	
	function filter(array) {
		return $filter('filter')(array, $scope.query);
	}
			
	function changeSelection(i) {
				
		$scope.safeApply(function () {
			if (currentSelection) {
				currentSelection.$selected = false;
			}
			
			currentSelection = filter($scope.poList)[i];
			
			if (currentSelection) {
				currentSelection.$selected = true;
			}
		});
	
		var selection = $('.item.selected');
		var container = selection.parents('.outer-container');
		var scrollTop = container.scrollTop();
		var cHeight = container.innerHeight();
		
		
		if (scrollTop > (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		} else if ((scrollTop + cHeight) < (selection.outerHeight() * i)) {
			container.scrollTop(selection.outerHeight() * i);
		}
				
	}
	
	var keyboardNav = new KeyboardNavigation();
			
	keyboardNav.ondown = function () {
		if (index < filter($scope.poList).length - 1) {
			index += 1;
			changeSelection(index);
		}
	};
	
	keyboardNav.onup = function () {
		if (index !== 0) {
			index -= 1;
			changeSelection(index);
		}
	};
	
	keyboardNav.onenter = function () {
		/*
		$scope.safeApply(function () {
			$location.path('/order/purchase_order/' + currentSelection.id);
		});
		*/
	};
	
	keyboardNav.enable();
	
	
	/**
	 * Check if a supply is new for a supplier
	 *
	 * @public
	 * @param {String|Object|Array|Boolean|Number} supply - supply to be check
	 * @param {String|Object|Array|Boolean|Number} supplier - supplier to be checked against
	 * @returns {Boolean} - a boolean indicating if this is a new supply or not
	 */
	$scope.isNewSupply = function (supply, supplier) {
		if (!supply.suppliers) {
			return false;
		}
		
		if (supply.id && supplier) {
			for (var i = 0; i < supply.suppliers.length; i++) {
				if (supply.suppliers[i].supplier.id === supplier.id) {
					return false;
				}
			}
		} 
		
		return true;
	};
	
	
	//Check the progress of customer, project creation
	$scope._checkProgress = function (progress, callback) {
		
		for (var key in progress) {
			if (progress[key] === false) {
				return false;
			} else if (progress[key] === 'error') {
				throw new Error();
			}
		}
		(callback || angular.noop)();
	};
	
	/**
	 * Create or update the supplier
	 *
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope._prepareSupplier = function (purchaseOrder, progress, callback) {
		//Checks if customer exists and creates if not
		if (!purchaseOrder.supplier.id && purchaseOrder.supplier.name) {
			progress.supplier = false;
			var supplier = new Supplier();
			angular.extend(supplier, purchaseOrder.supplier);

			supplier.$create(function (resp) {
				angular.extend(purchaseOrder.supplier, resp);
				progress.supplier = true;
				$scope._checkProgress(progress, callback);
			}, function () {
				progress.supplier = 'error';
			});
		} else if (purchaseOrder.supplier.id) {
			progress.supplier = false;
			purchaseOrder.supplier = new Supplier(purchaseOrder.supplier);
			purchaseOrder.supplier.$update(function (resp) {
				angular.extend(purchaseOrder.supplier, resp);
				progress.supplier = true;
				$scope._checkProgress(progress, callback);
			}, function () {
				progress.supplier = 'error';
			});
		}
	};
	
	
	/**
	 * Create a new supply 
	 *
	 * @private
	 * @param {Object} supply - supply object to create
	 * @param {Object} supplier - supplier to be associated with the supply
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope._createSupply = function (supply, supplier, progress, callback) {
		
		// Add progress check
		progress[supply.description] = false;
		
		// Associate this supplier with the supply
		supply.suppliers = [supplier];
		supply.suppliers[0].supplier = {id: supplier.id};
		supply.suppliers[0].cost = supply.cost;
		
		var resource = new Supply(supply);
		
		// Create a new supply
		resource.$create(function (response) {
			
			angular.extend(supply, response);
			
			// Move supply id location to avoid item update 
			// instead of item creation
	  		supply.supply = {id: supply.id};
			delete supply.id;
			
			// Check the progress
			progress[supply.description] = true;
			$scope._checkProgress(progress, callback);
			
		}, function (reason) {
			$log.error(reason);
		});
		
	};

	/**
	 * Update and existing supply 
	 *
	 * @private
	 * @param {Object} supply - supply object to create
	 * @param {Object} supplier - supplier to be associated with the supply
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope._updateSupply = function (supply, supplier, progress, callback) {
		
		// Update supply with new supplier
		if ($scope.isNewSupply(supply, supplier)) {
			var supplierData = angular.copy(supplier);
			supplierData.cost = supply.cost || supply.unit_cost;
			
			// Move the supplier id
			supplierData.supplier = {'id': supplierData.id};
			delete supplierData.id;
			
			// Add new supplier
			supply.suppliers.push(supplierData);
			
			// Add progress check
			progress[supply.id] = false;
			
			var resource = new Supply(supply);
			
			resource.$update(function (response) {
				angular.extend(supply, response);
				
				// Move supply id location to avoid item update 
				// instead of item creation
		  		supply.supply = {id: supply.id};
				delete supply.id;
				
				// Check the progress
				progress[supply.supply.id] = true;
				$scope._checkProgress(progress, callback);
				
			}, function (reason) {
				$log.error(reason);
			});
		}
	};
	
	/**
	 * Prepare the purchase order for creation. Creates supplier, project, room, and phase 
	 * if they are respectively new
	 *
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @param {Function} callback - Function to call if the creations are successful
	 */
	
	$scope._preparePurchaseOrder = function (purchaseOrder, callback) {
		
		//Object used to track progress of sub-resource creations
		var progress = {supplies:false};
		//$scope._prepareSupplier(purchaseOrder, progress, callback);
				
		//Checks if the project exists and create if not
		/*
		if (purchaseOrder.project) {
			if (!purchaseOrder.project.id && purchaseOrder.project.codename) {
				progress.project = false;
				var project = new Project();
				angular.extend(project, purchaseOrder.project);
				
				project.$create(function (resp) {
					angular.extend(purchaseOrder.project, resp);
					progress.project = true;
					$scope._checkProgress(progress, callback);
				}, function () {
					progress.project = 'error';
				});
			}
		}
		*/
				
		//Check if items are custom
		for (var i = 0; i < purchaseOrder.items.length; i++) {
			if (purchaseOrder.items[i].hasOwnProperty('id')) {
		  		// Update the supply
				$scope._updateSupply(purchaseOrder.items[i], purchaseOrder.supplier, progress, callback);
			} else {
				// Create a new supply
				$scope._createSupply(purchaseOrder.items[i], purchaseOrder.supplier, progress, callback);
			}
		}
		
		// Signal to progress check that supplies preparation has passed
		progress.supplies = true;
		$scope._checkProgress(progress, callback);
	};
	
	$scope._sendUpdateRequest = function () {
		purchaseOrder = this;
		
		purchaseOrder.$update(function (response) {
			Notification.display('Purchase order ' + purchaseOrder.id + ' created.');
								
			angular.extend(purchaseOrder, response);
			//Change page to newly saved purchase order page
			//$location.path("/order/purchase_order/" + response.id);
		
		}, function (e) {
			$log.error(JSON.stringify(e));
			Notification.display("There was an error in updating the purchase order. A report has been sent to Charlie");
			
		});
	};
	
	
	/**
	 * Save the purchase order
	 *
	 * @public
	 * @param {Object} purchaseOrder - Purchase Order to be updated
	 */
	
	$scope.update = function (purchaseOrder) {
		Notification.display("Updating purchase order #" + purchaseOrder.id);
		try {
			$scope._preparePurchaseOrder(purchaseOrder, $scope._sendUpdateRequest.bind(purchaseOrder));
		} catch (e) {
			console.error(e);
		}
		
	};
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
}]);
