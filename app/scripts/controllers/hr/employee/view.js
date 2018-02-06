
angular.module('employeeApp')
.controller('HrEmployeeViewCtrl', ['$scope', 'Employee', 'Notification', '$mdDialog', 'FileUploader', '$log', 'Shift', 'Attendance', '$q', '$timeout',
function ($scope, Employee, Notification, $mdDialog, FileUploader, $log, Shift, Attendance, $q, $timeout) {
    
	var fetching = false;
	$scope.selected_date = null;
	$scope.departments = {
			'tufting': {'en': 'Tufting',
						'th': 'tufting'},
			'woodworking': {'en': 'Woodworking',
					        'th': 'ไม้'},
			'painting': {'en': 'Painting',
						 'th': 'สี'},
			'sewing': {'en': 'Sewing',
					   'th': 'เย็บ'},
			'upholstery': {'en': 'Upholstery',
						   'th': 'หุ้ม'},
			'cutting fabric': {'en': 'Cutting Fabric',
							  'th': 'ตัดผ้า'},
			'foam': {'en': 'Foam',
					 'th': 'ฟองน้ำ'},
			'accounting': {'en': 'Accounting',
						   'th': 'บัญชี'},
			'inventory': {'en': 'Inventory',
						  'th': 'สโตร์'},
			'security': {'en': 'Security',
						 'th': 'ยาม'},
			'technician': {'en': 'Technician',
						   'th': 'ช่าง'},
			'polishing': {'en': 'Polishing',
						  'th': 'ปัดเงา'},
			'housekeeping': {'en': 'Housekeeping',
							 'th': 'แม่บ้าน'},
			'office': {'en': 'Office',
					   'th': 'Office'},
			'packing': {'en': 'Packing',
						'th': 'Packing'},
			'management': {'en': 'Management',
						   'th': 'Management'}
		};
	$scope.headings = {
			'title': {'en': 'Title',
					  'th': 'Title'},
			'name': {'en': 'Name',
					 'th': 'ชื่อ'},
			'id': {'en': 'Government ID',
				   'th': 'ID Card'},
			'nationality': {'en': 'Nationality',
							'th': 'สัญชาติ'},
			'telephone': {'en': 'Telephone',
							'th': 'โทรศัพท์'},
			'company': {'en': 'Company',
						'th': 'บริษัท'},
			'department': {'en': 'Department',
						   'th': 'แผนก'},
			'status': {'en': 'Status',
					   'th': 'สภาพการจ้าง'},
			'location': {'en': 'Location',
						 'th': 'สถานที่ปัจจุบัน'},
			'employment-date': {'en': 'Employment Date',
								'th': 'วันที่เริ่มทำงาน'},
			'card-number': {'en': 'Employee Card Number',
							'th': 'หมายเลขพนักงาน'},
			'bank': {'en': 'Bank',
					 'th': 'ธนาคาร'},
			'account-number': {'en': 'Bank Account Number',
							   'th': 'หมายเลขบัญชี'},
			'shift': {'en': 'Shift',
					  'th': 'เวลาทำงาน'},
			'wage': {'en': 'Pay Rate',
					 'th': 'ค่าจ้าง'},
			'pay-period': {'en': 'Pay Period',
						   'th': 'ประเภทการจ่ายเงิน'},
			'stipend': {'en': 'Stipend',
					 	'th': 'เบี้ยขยัน'},
			'manager': {'en': 'Manager Stipend',
					 	'th': 'ตำแหน่ง'},
			'pay-method': {'en': 'Payment Method',
						   'th': 'วิธีจ่ายเงิน'},
			'time-in': {'en': 'Clock In',
						'th': 'เวลาเข้า'},
			'time-out': {'en': 'Clock Out',
						 'th': 'เวลาออก'},
			'date': {'en': 'Date',
					 'th': 'วันที่'},
			'regular': {'en': 'Regular',
					 	'th': 'เวลาปกติ'}
									
			
		};
	$scope.nationalities = {
			'thai': {'en': 'Thai',
					 'th': 'ไทย'},
			'cambodian': {'en': 'Cambodian',
						  'th': 'ชาวกัมพูชา'},
			'laos': {'en': 'Laotian',
					 'th': 'ลาว'},
			'burmese': {'en': 'Burmese',
					 'th': 'พม่า'},
			'vietnamese': {'en': 'Vietnamese',
					       'th': 'เวียตนาม'}
		}, 
	$scope.lang = 'th';
	$scope.searchMonths = [
		
	]

	var today = new Date();	
	for (var i = 0; i < 36; i++) {
		var d = new Date();
		if (d.getMonth() - 1 >= 0) {
			d.setMonth(d.getMonth() - i);
		} else {
			d.setMonth(Math.abs(d.getMonth() - i));
			d.setFullYear(d.getFullYear() - 1);
		}
		$scope.searchMonths.push(d);
	}

	console.log($scope.searchMonths);

	$scope.overtimes = {};	
	$scope.employees = Employee.query(function() {

	});
	
	//$scope.shifts = Shift.query();
	$scope.shifts = [{"id":1,"start_time":"08:00:00","end_time":"17:00:00"}];

	$scope.getStandardOvertimes = function (a) {

		var deferred = $q.defer();

		/*
		$timeout(function () {
			

			deferred.resolve([]);
		}, 10);
		*/
		deferred.resolve([]);

		return deferred.promise;
	}

	/** 
	var hour = 17;
	var minute = 0;
	
	for (var i = 1; i < 25; i++) {
		
		// Advance to the next hour
		if (i % 2 > 0 && i > 0) {
			hour += 1;
			minute = 0;
		
		// Advance to the next half hour
		} else {
			minute = 30;
			
			if (hour === 24) {
				hour = 0;
			}
		}
		
		var time = new Date(2016, 2, 17, hour, minute, 0);

		$scope.overtimes.push(time);
	}
	*/
    
	// Convert all number strings into numbers
	var re = /^(?!0+[1-9])\d+?(\,d+)(\.\d+)?$/;
	var count = 0;
	function refactor(obj) {
		count++;
		
		for (var key in obj) {
			if (typeof(obj[key]) == 'object') {
				refactor(obj[key]);
			} else {
				if (re.test(obj[key])) {
					obj[key] = Number(obj[key].replace(',', ''));
				} 
			}					
		}
		
		return obj;
	}

	$scope.getNationality = function (nationality) {
		try{
			return $scope.nationalities[nationality][$scope.lang];
		} catch (e) {
			$log.warn(e);
		}
	}

	$scope.getDepartment = function (department) {
		if (department) {
			try{
				return $scope.departments[department][$scope.lang];
			} catch (e) {
				return 'ยังไม่ได้กำหนดแผนก';
			}
		} else {
			return 'ยังไม่ได้กำหนดแผนก';
		}
	}
	
	$scope.canViewPayRate = function (employee) {
		
		/*
		if (employee.department.toLowerCase() == 'management') {
			if (!$scope.currentUser.hasPermission('view_management_pay_rate')) {
				return false;
			}
		}
		
		if (employee.department.toLowerCase() == 'office') {
			if (!$scope.currentUser.hasPermission('view_office_pay_rate')) {
				return false;
			}
		}
		
		if (employee.manager_stiped > 0) {
			if (!$scope.currentUser.hasPermission('view_management_pay_rate')) {
				return false;
			}
		}*/
		
		if (!$scope.currentUser.hasPermission('can_view_pay_rate')) {
			return false;
		}
		
		return true;
	}
	
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
						$mdDialog.hide()
					}, function (resp) {
						$log.error(resp);
						Notification.display('There was an error in creating employee: ' + $scope.employee.name + '.', 0);
					})
				};			
			}
		});
	};
	
	
	/**
	 * Add files to the file uploader. On callback the files are then associated with the acknowledgement.
	 * @public
	 * @param {Array} files - Array of files with raw data
	 * @returns {null}
	 */
	$scope.addImage = function (files, employee) {
	
		/**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image) {
	        //display notification
	        Notification.display('Uploading Image...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "api/v1/employee/image/");
				promise.then(function (result) {
			        
					var data = result.data || result;
					employee.image = data
					Notification.display('Image uploaded.');
					$scope.update(employee);
		
			}, function () {
				$log.error(JSON.stringify(e));
			
				Notification.display(e.message, 0);
	
			});
		}
		
		if (files[0].type === 'image/jpeg' || files[0].type === 'image/png') {
			$mdDialog.show({
		  		templateUrl: 'views/templates/edit-image.html',
				controller: function ($scope, $mdDialog) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};
					
					$scope.imageToEdit = files[0]
					$scope.fileSize = 0;
					
					$scope.$watch('cropper.scale', function () {
						clearTimeout(sizeVar);
						sizeVar = setTimeout(function () {
							$scope.fileSize = $scope.cropper.image.size;
							$scope.$apply();
						}, 500);
					});
				
		            $scope.preview = function (url) {
		                if (url) {
		                    window.open(url);
		                }
		            };
				
					$scope.cancel = function () {
						$mdDialog.hide();
					}
				
					$scope.save = function (image) {
						$mdDialog.hide();
				        uploadImage(image);
					}
				}
		   	});
			
		} else {
			uploadImage(files[0]);
		}
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
					Notification.display('Uploading times....', 0);
					
					var file = $files[0];
					
					var promise = FileUploader.upload(file, "/api/v1/employee/attendance/");
					promise.then(function (result) {
						Notification.display(result.status, 2000);
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
				
				
				
				for (var i = 0; i < resources.length; i++) {
					if ($scope.employees.indexOfById(resources[i].id) == -1) {
						$scope.employees.push(resources[i]);
					}
				}
				
				// Allow new requests
				fetching = false;
				
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
	 * Add a new Attendance
	 * 
	 * @public
	 * @param {Object} employee - employee to add an attendance for
	 */
	$scope.addAttendance = function (employee) {
		$mdDialog.show({
			templateUrl: 'views/templates/add-attendance.html',
      	  	clickOutsideToClose:true,
			locals: {
				shifts: $scope.shifts,
				employee: employee,
				mainOvertimes: $scope.overtimes
			},
			controller: function ($scope, $mdDialog, shifts, employee, mainOvertimes) {
				
				$scope.shifts = shifts;
				
				// Set up default attributes
				$scope.a = new Attendance();
				$scope.a.employee = employee;
				$scope.a.date = new Date();
				$scope.a.start_time = new Date(2016, 2, 18, 8, 0);
				$scope.a.end_time = new Date(2016, 2, 18, 17, 0);
				$scope.a.shift = $scope.shifts[0];

				$scope.overtimes = [];
				$scope.mainOvertimes = mainOvertimes;
				
				var hour = 17;
				var minute = 0;
				
				for (var h = 1; h < 25; h++) {
					
					// Advance to the next hour
					if (h % 2 > 0 && h > 0) {
						hour += 1;
						minute = 0;
					
					// Advance to the next half hour
					} else {
						minute = 30;
						
						if (hour === 24) {
							hour = 0;
						}
					}
					
					var time = new Date($scope.a.date.getFullYear(), $scope.a.date.getMonth(), $scope.a.date.getDate(), hour, minute, 0);
			
					$scope.overtimes.push(time);
				}
				
				$scope.create = function () {
					Notification.display("Creating attendance for " + $scope.a.employee.name + "...", 2000);
					
					// Prepare for POST request
					$scope.a.shift = $scope.a.shift.id;
					$scope.a.employee = $scope.a.employee.id;
					
					$scope.a.$create(function (resp) {
						Notification.display('Attendance created for ' + resp.employee.name, 2000);
						
						// Add to employee attendances
						$scope.employee.attendances = employee.attendances || [];
						$scope.employee.attendances.push(resp);

						$scope.mainOvertimes[getDateCode(resp.date)] = [];
	
						
						var hour = 17;
						var minute = 0;
						
						for (var h = 1; h < 25; h++) {
							
							// Advance to the next hour
							if (h % 2 > 0 && h > 0) {
								hour += 1;
								minute = 0;
							
							// Advance to the next half hour
							} else {
								minute = 30;
								
								if (hour === 24) {
									hour = 0;
								}
							}
							
							var time = new Date(resp.date.getFullYear(), resp.date.getMonth(), resp.date.getDate(), hour, minute, 0);
					
							$scope.mainOvertimes[getDateCode(resp.date)].push(time);
						}
						
					}, function (e) {
						// Default error message
						var message = "There was an error creating an attendance for " + $scope.a.employee.name;

						if (e.status === 400) {
							if ("data" in e) {
								if ("non_field_errors" in e.data) {
									if ("The fields date, employee must make a unique set." === e.data.non_field_errors[0]) {
										var message = "An Attendance for " + $scope.employee.name;
										message += " on " + $scope.a.date + " already exists";
									}
								}
							}
						} else {
							
						}
						console.log(e);
						Notification.display(message, 0);
						$log.error(e);
					});
					$mdDialog.hide();
				};					
					
			}
		});
	};
	
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

			if (typeof(attendance.date) === 'string') {
				attendance.date = new Date(attendance.date);
			}
			
			if (attendance.overtime_request){
				attendance.overtime_request = new Date(attendance.overtime_request);
				console.log(attendance.overtime_request.getHours(), attendance.overtime_request.getMinutes());
			}
			
		}, function (e) {
			Notification.display('Error updating record: ' + e, 0);
		});
	};
	

	/**
	 * Retreive attendances from the server by month
	 */
	$scope.retrieveAttendancesbyMonth = function (date, employee) {
		console.log(date);
		var start_date = new Date(date.getFullYear(), date.getMonth() - 1 >= 0 ? date.getMonth() - 1 : 11, 26);
		var end_date = new Date(date.getFullYear(), date.getMonth(), 25);
		$scope.retrieveAttendances(start_date, end_date, employee);
	}
	/**
	 * Retrieve attendances from the server
	 * @private
	 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
	 * @returns Describe what it returns
	 * @type String|Object|Array|Boolean|Number
	 */
	
	var getDateCode = function (d) {
		if (typeof(d) === "string") {
			var d = Date.parse(d);
		}
		var dateCode = d.getFullYear();
		dateCode += "-";
		dateCode += d.getMonth();
		dateCode += "-";
		dateCode += d.getDate();

		return dateCode;
	};
	$scope.getDateCode = getDateCode;

	$scope.retrieveAttendances = function (start_date, end_date, employee) {
		var options = {};
		
		if (start_date && end_date) {
			options.start_date = start_date;
			options.end_date = end_date;

			options.employee_id = employee.id;
			
			Attendance.query(options, function (resp) {
				
				employee.attendances = resp;

				for (var i = 0; i < employee.attendances.length; i++) {
					var d = employee.attendances[i].date;
					$scope.overtimes[$scope.getDateCode(d)] = [];

					
					var hour = 17;
					var minute = 0;
					
					for (var h = 1; h < 25; h++) {
						
						// Advance to the next hour
						if (h % 2 > 0 && h > 0) {
							hour += 1;
							minute = 0;
						
						// Advance to the next half hour
						} else {
							minute = 30;
							
							if (hour === 24) {
								hour = 0;
							}
						}
						
						var time = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, minute, 0);
				
						$scope.overtimes[$scope.getDateCode(d)].push(time);
					}
				}

				console.log($scope.overtimes);
				
				
			});
		}
		
		
		
		
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
