
angular.module('employeeApp')
.controller('HrEmployeeViewCtrl', ['$scope', 'Employee', 'Notification', '$mdDialog', 'FileUploader', '$log', 'Shift', 'Attendance',
function ($scope, Employee, Notification, $mdDialog, FileUploader, $log, Shift, Attendance) {
    
	var fetching = false;
	$scope.employees = Employee.query();
	$scope.shifts = Shift.query();
    
	$scope.update = function (employee) {
		Notification.display('Updating employee: ' + employee.name + '...', false);
		employee.$$saving = true;
		employee.$update(function () {
			employee.$$saving = false;
			Notification.display('Employee: ' + employee.name + ' updated.');
		}, function (e) {
			employee.$$saving = false;
			Notification.display('Error updating employee: ' + employee.name + '. Please contact Charlie.', false);
			$log.error(e);
		})
	};
	
	/**
	 * Show add employee dialog 
	
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.showAddEmployee = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/add-employee.html',
      	  	clickOutsideToClose:true,
			controller: function ($scope, $mdDialog) {
				
				$scope.employee = new Employee();
				$scope.shifts = Shift.query();
				
				$scope.create = function () {
					Notification.display("Creating new employee " + $scope.employee.name + "...");
					$scope.saving = true;
					$scope.employee.$create(function (resp) {
						$scope.saving = false;
						Notification.display('Employee: ' + $scope.employee.name + ' created.');
					}, function (resp) {
						$log.error(resp);
						$mdDialog.hide();
						Notification.display('There was an error in creating employee: ' + $scope.employee.name + '.', 0);
					})
				};			
			}
		});
	};
	
	/**
	 * Show the Download dialog
	 *
	 * @public
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.upload = function () {
		$mdDialog.show({
			templateUrl: 'views/templates/upload-clockin-times.html',
      	  	clickOutsideToClose:true,
			controller: function ($scope, $mdDialog) {
				$scope.uploadTimes = function ($files) {
					
					/* jshint ignore:start */
					Notification.display('Uploading times. This may take a while...', 0);
					
					var file = $files[0];
					
					var promise = FileUploader.upload(file, "/api/v1/employee/attendance/");
					promise.then(function (result) {
						Notification.display("New times uploaded...", 2000);
					}, function (e) {
						$log.error(JSON.stringify(e));
						Notification.display(e, 0);
					});
				
					/* jshint ignore:end */
					$mdDialog.hide();
				};					
			}
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
		if (q) {
			Employee.query({limit: 10, q: q}, function (resources) {
				for (var i = 0; i < resources.length; i++) {
					if ($scope.employees.indexOfById(resources[i].id) == -1) {
						$scope.employees.push(resources[i]);
					}
				}
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
			//Disable new requests
			fetching = true;
			
			Notification.display('Loading more employees...', false);
			Employee.query({
				offset: $scope.employees.length,
				limit: 50,
			}, function (resources) {
				Notification.hide();
				
				// Allow new requests
				fetching = false;
				
				for (var i = 0; i < resources.length; i++) {
					if ($scope.employees.indexOfById(resources[i].id) == -1) {
						$scope.employees.push(resources[i]);
					}
				}
			}, function (e) {
				// Allow new requests
				fetching = false;
			});
		}
	};
	
	
	/**
	 * Check if the attendance provided is Sunday
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope.isSunday = function (attendance) {
		attendance.date = typeof(attendance.date) === 'string' ? new Date(attendance.date) : attendance.date;
		
		return attendance.date.getDay() === 0 ? true : false;
	}
	
	
	/**
	 * Update the an attendance record
	 * @public
	 * @param {Object} attendance - Attendance instance to be updated to the server
	 */
	
	$scope.updateAttendance = function (attendance) {
		Notification.display('Updating record for ' + attendance.date, 0);
		var a = new Attendance(attendance);
		a.$update(function (resp) {
			Notification.display('Updated record for ' + resp.date, 2000);
			angular.extend(attendance, resp);
		}, function (e) {
			Notification.display('Error updating record: ' + e, 0);
		});
	};
	
	/**
	 * Retrieve attendances from the server
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.retrieveAttendances = function (start_date, end_date, employee) {
		var options = {};
		
		if (start_date) {
			options.start_date = start_date;
		}
		
		if (end_date) {
			options.end_date = end_date;
		}
		
		options.employee_id = employee.id;
		
		Attendance.query(options, function (resp) {
			employee.attendances = resp;
		});
	}
	
	/**
	 * Calculate the pay rate
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	$scope._calculatePayRate = function (attendance) {
		attendance.date = typeof(attendance.date) === 'string' ? new Date(attendance.date) : attendance.date;
		
		var payRate = attendance.date.getDay() === 0 ? (attendance.pay_rate || attendance.employee.wage) * 2 : (attendance.pay_rate || attendance.employee.wage);
		
		return payRate;
	}
	
	/**
	 * Calculate regular wage
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope._calculateRegularWage = function (attendance, employee) {
		var wage = 0;
		
		//Calculate the regular time pay
		if (attendance.regular_time) {
			attendance.start_time = typeof(attendance.start_time) === 'string' ? new Date(attendance.start_time) : attendance.start_time;
			attendance.end_time = typeof(attendance.end_time) === 'string' ? new Date(attendance.end_time) : attendance.end_time;
			
			var payRate = $scope._calculatePayRate(attendance);
			
			if (attendance.regular_time >= 8) {
				wage += payRate;
			} else if (attendance.start_time.getHours() ==8 && attendance.start_time.getMinutes() <= 10){
				wage += payRate;
			} else {
				wage += (payRate) * (attendance.regular_time / 8);
			}
		}
		
		return wage
	};	
	
	/**
	 * Calculate overtime
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope._calculateOvertime = function (attendance, employee) {
		var overtimePay = 0;
		// Calculate the over time for the employee
		if (attendance.overtime > 0) {
			overtimePay += (((attendance.pay_rate || employee.wage || 0) / 8) * 1.5) * attendance.overtime;
		}
		
		return overtimePay;
		
	};
	
	/**
	 * Calculates the wage
	 * @public
	 * @param {Object} attendance - attendance to calculate the daily wage for
	 * @param {Object} employee - employee from which to get wage from
	 * @returns {Number} - returns the total pay for the employee
	 */
	
	$scope.calculateWage = function (attendance, employee) {
		
		var wage = $scope._calculateRegularWage(attendance, employee);
		
		wage += $scope._calculateOvertime(attendance, employee);
		
		return wage;
	}
	
	/**
	 * Calculate social security
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	$scope.calculateSocialSecurity = function (attendance, employee) {
		
		var socialSecurity = $scope._calculateRegularWage(attendance, employee) * 0.05;
		
		return socialSecurity || 0;
	};
	
	
	
	
	$scope.$on('$destroy', function () {
		$mdDialog.hide();
	});
}]);
