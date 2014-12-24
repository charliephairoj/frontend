
angular.module('employeeApp')
.controller('EquipmentViewCtrl', ['$scope', 'Equipment', 'Notification', '$filter', 'KeyboardNavigation', '$rootScope', '$location', '$http', 'FileUploader', '$timeout', 
function ($scope, Equipment, Notification, $filter, KeyboardNavigation, $rootScope, $location, $http, FileUploader, $timeout) {
	console.log($scope.types);
	/*
	* Vars and flags
	*/
	var fetching = true,
		index = 0,
		currentSelection,
		activeQueryLoop = false,
		masterList = [],
		q;

	//system message
	Notification.display('Loading supplies...', false);
	
	$scope.scannerMode = false;
	$scope.equipmentList = Equipment.query({'country': $scope.country}, function (resources) {
		fetching = false;
		Notification.hide();
		changeSelection(index);
	});
	
	/*
	*  Focus the list to the active element
	*/
	$scope.focus = function ($element) {
		var container = $('div.outer-container');
		/*
		 * Set new scrollTop to determined by 
		 * - Scroll Top
		 * - offset of element
		 * - mainmenu height 
		 */
		container.animate({
			scrollTop: container.scrollTop() + $element.offset().top - $('.mainMenu').height()
		});
	};
	
	/*
	* Adding image for ipads and iphones
	* 
	* This particular function is intended for the iphone and ipad.
	* It allows the user to directly add an image to the supply from the 
	* device's camera
	*/
	$scope.addImage = function (element, supply) {
		//Upload the file
		var promise = FileUploader.upload(element.files[0], '/api/v1/supply/image');
		
		//Process the file after a successful upload
		promise.then(function (data) {
			Notification.display("Image uploaded");
			
			//Apply the image data and url to the supply, 
			//and then save the supply to the serve
			$scope.safeApply(function () {
				supply.image = data.hasOwnProperty('data') ? data.data : data;
				supply.save();
			});
	
		//Process a failed upload
		}, function (e) {
			console.log(e);
			Notification.display("Unable to upload image", false);
		});
	};

	/*
	* Search mechanism
	* 
	* This function will send a GET request to the server
	* whenever the query string changes and that string will 
	* be sent along as a parameter. 
	*/
	$scope.$watch('query', function (q) {
		/*
		//Set global q to search
		q = queryStr
		
		//checks if the loop is currently active
		//$scope.supplies = filter(masterList);
		$timeout(function () {
			$scope.supplies = filter(masterList);
		}, 1);
		
		var tSwitch = $timeout(function () {
			Supply.query({limit: 10, q: q, 'country': $scope.country}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if (masterList.indexOfById(resources[i].id) == -1) {
						masterList.push(resources[i]);
					}
				}
				$scope.supplies = filter(masterList);
				activeQueryLoop = false;
			});
		}, 1);
		*/
		
		//To Be deprecated in favor of a timeout based
		//query mechanism
		if (q) {
			Supply.query({limit: q.length, q: q, 'country': $scope.country}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.supplies.indexOfById(resources[i].id) == -1) {
						$scope.supplies.push(resources[i]);
					}
				}
				index = 0;
				changeSelection(index);
			});
		}
	});

	
	
	/*
	* Load more supplies
	* 
	* This function will load more supplies from the server
	* be using the current number of supplies as the offset
	*/
	$scope.loadNext = function () {
		if (!fetching) {
			Notification.display('Loading more supplies...', false);
			Equipment.query({
				offset: $scope.equipmentList.length,
				limit: 50,
			}, function (resources) {
				Notification.hide();
				for (var i = 0; i < resources.length; i++) {
					if ($scope.equipmentList.indexOfById(resources[i].id) == -1) {
						$scope.equipmentList.push(resources[i]);
					}
				}
			});
		}
	};
			
	function changeSelection(i) {
				
		$rootScope.safeApply(function () {
			if (currentSelection) {
				currentSelection.$selected = false;
			}
			
			currentSelection = filter($scope.supplies)[i];
			
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
		if (index < filter($scope.supplies).length - 1) {
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
		$rootScope.safeApply(function () {
			$location.path('/supply/' + currentSelection.id);
		});
	};
	
	keyboardNav.enable();
	
	/*
	 * When adding suppliers or supply
	 * disable the keyboard navigation
	 */
	$scope.$watch('showAddSupply', function (val, oldVal) {
		if (val && !oldVal) {
			keyboardNav.disable();
		} else if (!val && oldVal) {
			keyboardNav.enable();
		}
	});
	
	$scope.$watch('showAddSupplier', function (val, oldVal) {
		if (val && !oldVal) {
			keyboardNav.disable();
		} else if (!val && oldVal) {
			keyboardNav.enable();
		}
	});
	
	$scope.$watch('scannerMode', function (val, oldVal) {
		if (val && !oldVal) {
			globalScanner.disable();
			keyboardNav.disable();
		} else if (!val && oldVal) {
			globalScanner.enable();
			keyboardNav.enable();
		}
	});
	
	$scope.$on('$destroy', function () {
		keyboardNav.disable();
	});
	
}]);


