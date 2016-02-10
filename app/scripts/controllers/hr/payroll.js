'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:HrPayrollCtrl
 * @description
 * # HrPayrollCtrl
 * Controller of the frontendApp
 */
angular.module('employeeApp')
.controller('HrPayrollCtrl', ['$scope', 'Employee', 'Payroll', 'Attendance', 
function ($scope, Employee, Payroll, Attendance) {
    
	$scope.attendances = Attendance.query({
		limit:0, 
		offset:0, 
		page_size:99999,
		start_date: new Date('2014-2-1')
	}, function (resp) {
		console.log(resp);
	});
	
	$scope.employees = Employee.query({
		limit:0, 
		page_size: 99999,
		start_date: new Date('2014-2-1'),
		end_date: new Date('2014-5-30')
	}, function (resp) {
		// Loop through all the employees
		for (var i = 0; i < $scope.employees.length; i++) {
			
			var grossPay = 0;
			var regularHours = 0;
			var overtimeHours = 0;
			var doubleTimeHours = 0;
			var socialSecurityPay = 0;
			
			// Loop through all the attendances
			if ($scope.employees[i].hasOwnProperty('attendances')) {
				
				for (var h = 0; h < $scope.employees[i].attendances.length; h++) {
					
					if ($scope.isSunday($scope.employees[i].attendances[h])) {
						doubleTimeHours += $scope.employees[i].attendances[h].regular_time || 0;
					} else {
						// Calcualte the total regular hours worked
						regularHours += $scope.employees[i].attendances[h].regular_time || 0;
					}
					
					
					// Calcualte the total overtime hours worked
					overtimeHours += $scope.employees[i].attendances[h].overtime || 0;
					
					// Calcualate totals for gross pay
					grossPay += $scope.calculateWage($scope.employees[i].attendances[h]);
					
					// Calcualate totals for social security
					socialSecurityPay += $scope.calculateSocialSecurity($scope.employees[i].attendances[h]);
				}
			
			}
			
			$scope.employees[i].regular_hours_total = regularHours;
			$scope.employees[i].overtime_hours_total = overtimeHours;
			$scope.employees[i].doubletime_hours_total = doubleTimeHours;
			$scope.employees[i].gross_pay = grossPay;
			$scope.employees[i].social_security = socialSecurityPay;
			
		}
	});
	
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
	
}]);
