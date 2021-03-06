
angular.module('employeeApp')
.controller('OrderAcknowledgementViewCtrl', ['$scope', 'Acknowledgement', '$location', '$filter', 'KeyboardNavigation', 'Notification', '$log', 'Fabric', 'FileUploader', '$mdDialog',
function ($scope, Acknowledgement, $location, $filter, KeyboardNavigation, Notification, $log, Fabric, FileUploader, $mdDialog) {
	
	$scope.test = function () {
		window.alert('hi');
	};
	/*
	 * Vars
	 * 
	 * -fetching: this is a switch to see if there is currently a call being made
	 */
	var fetching = true,
		index = 0,
		currentSelection,
		search = $location.search();
	
	var notification = Notification.display('Retrieving acknowledgements...', false);
	$scope.tempComponent = {};
	$scope.query = {};
	$scope.fabrics = [];

	/* 
	 * Set default search from search url
	 */
	if (search.q) {
		$scope.safeApply(function () {
			$scope.query = {$: {$: search.q}};
		});
	}
	if (search.status) {
		$scope.safeApply(function () {
			$scope.query.status = search.status;
		});
	} 
	
	
	//Poll the server for acknowledgements
	$scope.acknowledgements = Acknowledgement.query({limit: 20}, function (e) {
		notification.hide();
		fetching = false;
		changeSelection(index);
		
		for (var i = 0; i < $scope.acknowledgements.length; i++) {
			for (var h = 0; h < $scope.acknowledgements[h].length; h++) {
				
			}
		}

		$scope.fabrics = Fabric.query({page_size:9999, offset:0, limit:0});
	});


	/**
	 * Get the total from a list of deals that has a certain status
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.getTotal = function (stage) {
		var total = 0;
		
		for (var i = 0; i < $scope.acknowledgements.length; i++) {
			if ($scope.acknowledgements[i].status === stage) {
				var amount;
				
				amount = $scope.acknowledgements[i].total;
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


	$scope.updateStage = function (ack, status) {
		console.log(ack);
		console.log(status);
		var index = $scope.acknowledgements.indexOfById(ack);
		console.log(index);
		if (index > -1) {
			if (!$scope.acknowledgements[index].items) {
				Acknowledgement.get({id:ack.id}, function (resp) {
					console.log(resp);
					console.log(index);
					console.log($scope.acknowledgements[index]);
					$scope.acknowledgements[index] = resp;
					$scope.acknowledgements[index].status = status;
					$scope.acknowledgements[index].$update();
				});
			} else {
				$scope.acknowledgements[index].status = status;
				$scope.acknowledgements[index].$update();
			}
			
			
		}
    };
	
	/**
	 * Shows the dialog to add a new deal
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.showAcknowledgement = function (ack) {
		
		$mdDialog.show({
			templateUrl: 'views/templates/view-acknowledgement.html',
			controllerAs: 'ctrl',
			locals: {
				'customers': $scope.customers,
				'acknowledgement': ack,
				'fabrics': $scope.fabrics
			},
			controller: function ($scope, $mdDialog, customers, acknowledgement, fabrics) {
				$scope.fabrics = fabrics;
				$scope.ack = Acknowledgement.get({'id':acknowledgement.id});
				$scope.customers = customers;
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
				//$scope.fabrics = Fabric.query({page_size:9999, offset:0, limit:0});
				
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
	
	
	/**
	 * Activate the acknowledgement
	 * @private
	 * @param {Object} acknowledgement Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.activate = function (acknowledgement) {
		acknowledgement.$$active = true;
		
		Notification.display('Retrieving Acknowledgement...', false);
		Acknowledgement.get({'id': acknowledgement.id}, function (resp) {
			angular.merge(acknowledgement, resp);
			Notification.hide();
		}, function (e) {
			Notification.display(e);
		});
	}
	
	
	/**
	 * Deactivate the acknowledgement
	 * @private
	 * @param {Object} acknowledgement Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.deactivate = function (acknowledgement) {
		acknowledgement.$$active = false;
	};
	
	
	$scope.openAttachment = function (link) {
		window.open(link);
	};
	
	/**
	 * Show the Download dialog
	 *
	 * @public
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.download = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/download-acknowledgements.html',
      	  	clickOutsideToClose:true,
			controller: function ($scope, $mdDialog) {
				$scope.download = function (start, end) {
					$mdDialog.hide();
					url = '/api/v1/acknowledgement/download/?start=';
					url += start.toISOString();
					url += '&end=' + end.toISOString();
					window.open(url);
				};					
			}
		});
	};

	$scope.setCategory = function ($category) {
		$scope.safeApply(function () {
			$scope.query.status = $category;
		});
		
		//Set search paramters in url
		$location.search('status', $category);
		
		//Determines the paramters for the GET request
		var params = {limit:20, status: $category};
		try {
			if ($scope.query.$.$ ) {
				params.q = $scope.query.$.$;
			}
		} catch (e) {
			
		}
		
		
		//Make a GET request to the acknowledgement server
		Acknowledgement.query(params, function (resources) {
			for (var i = 0; i < resources.length; i++) {
				if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
					$scope.acknowledgements.push(resources[i]);
				}
			}
			
			//createAcknowledgementMarkers()
			
		});
	};
	
	/*
	 * Take the query in the searchbar and then sends 
	 * the query to the server to get more results. The
	 * resuls are then integrated with the current list of
	 * resources;
	 */
	$scope.$watch('query.$.$', function (q) {
		if (q) {
			$location.search('q', q);
			Acknowledgement.query({q: q, limit: q ? q.length * q.length : 5}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.acknowledgements.indexOfById(resources[i].id) == -1) {
						$scope.acknowledgements.push(resources[i]);
					}
				}
				index = 0;
				changeSelection(index);
				
			});
		}
	});
	
	//Loads the next set of data
	$scope.loadNext = function () {
		if (!fetching) {
			// prevents duplicate loading next requests
			fetching = true;
			
			// Notify User
			var moreAN = Notification.display('Retrieving more acknowledgements...', false);
	
			//Determine parameters for the GET call	
			var params = {
				limit: 50,
				offset: $scope.acknowledgements.length
			};
			if ($scope.query.status) {
				params.status = $scope.query.status;
			}
			//Set q if searching field filled
			try{
				if ($scope.query.$.$) {
					params.q = $scope.query.$.$;
				}
			} catch (e) {

			}
			
			//Make a GET request to the server
			Acknowledgement.query(params, function (resources) {
				
				try {
					for (var i = 0; i < resources.length; i++) {
						if ($scope.acknowledgements.indexOfById(resources[i]) === -1) {
							$scope.acknowledgements.push(resources[i]);
						}
					}
				} catch (e) {

				}
				
				fetching = false;
				moreAN.hide();
			}, function (e) {
				// Register Error
				$log.error(e);
				moreAN.hide();
				
				// Notify User
				Notification.display('There was an error in retrieving acknowledgements.', 3000);

				// Resume ability to load more quotations
				fetching = false;
			});
		}
	};
	
	//Help determine if an event occured for the given acknowledgement
	$scope.hasEvent = function (ack, e) {
		for (var i in ack.logs) {
			if (ack.logs[i].hasOwnProperty('message')) {
				if (ack.logs[i].message.indexOf(e) > -1) {
					return true;
				}
			}
			
		}
		
		return false;
	};
	
	
	/*
	 * Navigate to the details page for an acknowledgement
	 */
	$scope.navigate = function (id) {
		$location.path('/order/acknowledgement/' + id);
	};
	
	function filter(array) {
		return $filter('filter')(array, $scope.query);
	}
			
	function changeSelection(i) {
				
		$scope.safeApply(function () {
			if (currentSelection) {
				currentSelection.$selected = false;
			}
			
			currentSelection = filter($scope.acknowledgements)[i];
			
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
		if (index < filter($scope.acknowledgements).length - 1) {
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
			$location.path('/order/acknowledgement/' + currentSelection.id);
		});
		*/
	};
	
	keyboardNav.enable();
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
	
	
	
}]);
