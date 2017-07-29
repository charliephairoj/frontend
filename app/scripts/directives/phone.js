
angular.module('employeeApp.directives')
.directive('phone', ['$http', '$rootScope', '$log', 'KeyboardNavigation', 'Employee', 'Customer', 'Supplier', 'Acknowledgement',
function ($http, $rootScope, $log, KeyboardNavigation, Employee, Customer, Supplier, Acknowledgement) {
	
	return {
		templateUrl: 'views/templates/phone.html',
		replace: true,
		restrict: 'E',
		link: function postLink(scope, element, attrs) {

			k = KeyboardNavigation();
			k.disable();
			
			k.default = function (num) {
				scope.addNumber(num);
				$rootScope.safeApply();
			};
			k.onbackspace = function () {
				scope.backspace();
			};

			k.onenter = function (e) {
				console.log(e);
				scope.call();
			};
				
				/**
			 * VoIP: Twilio
			 */
			var voip = {
				'status': '',
				'conn': {}
			};
			
			scope.selectedContact = null;
			scope.contactSearchText = '';
			scope.dialpad = false;
			scope.dialedNumber = "";

			$http.get('/api/v1/ivr/token/').then(function (resp) {
				Twilio.Device.setup(resp.data.token, {"debug": true});
				Twilio.Device.ready(function (device) {
					$log.debug(device);
				});


				Twilio.Device.incoming(function(connection) {
					voip.status = 'incoming';
					voip.conn = connection;
					console.log(connection);
					$rootScope.safeApply();
				});

				Twilio.Device.connect(function (conn) {
					voip.status = conn._direction == 'OUTGOING' ? 'active' : 'active';
					voip.conn = conn;
					console.log(conn);
					$rootScope.safeApply();
				});

				Twilio.Device.disconnect(function (conn) {
					scope.hangup();
				});

				scope.activateDialpad = function () {
					k.enable();
					voip.status = 'dialpad'
				};

				/*
				* CUSTOMER SECTION
				*
				* This section deals with the customer searching and what happens when a customer is selected
				*/
				scope.contact = {};
				
				scope.contacts = {};

				var updateList = function (query, list) {
					if (list) {
						for (var i in scope.contacts) {
							if (angular.lowercase(scope.contacts[i].name).indexOf(query) !== -1) {
								if (list.indexOfById(scope.contacts[i].id) === -1) {
									list.push(scope.contacts[i]);
								}
							}
						}

						$rootScope.safeApply();
					}
					
				}

				scope.retrieveContacts = function (query, list) {
					if (query) {
						if (query.length > 2){
							Customer.query({q:query, limit:5}, function (response) {
								for (var i = 0; i < response.length; i++) {
									response[i].type = 'customer';
									scope.contacts[response[i].id] = response[i];
								}

								updateList(query, list);
								
							});
							Supplier.query({q:query, limit:5}, function (response) {
								for (var i = 0; i < response.length; i++) {
									response[i].type = 'supplier';
									scope.contacts[response[i].id] = response[i];
								}

								updateList(query, list);
							});
							Employee.query({q:query, limit:5}, function (response) {
								for (var i = 0; i < response.length; i++) {
									response[i].type = 'employee';
									scope.contacts[response[i].id] = response[i];
								}

								updateList(query, list);
							});
						}
					}
					
					
				};

				scope.searchContacts = function (query) {
					var lowercaseQuery = angular.lowercase(query);
					var customers = [];

					if (query.length > 2){
						scope.retrieveContacts(lowercaseQuery, customers);
					}
					

					for (var i in scope.contacts) {
						if (angular.lowercase(scope.contacts[i].name).indexOf(lowercaseQuery) !== -1) {
							customers.push(scope.contacts[i]);
						}
					}
					
					return customers;
				};

				scope.selectContact = function(selectedContact) {
					scope.contact = angular.copy(selectedContact);
					if (selectedContact.telephone) {
						scope.dialedNumber = selectedContact.telephone;
					}
					

					if (scope.contact.type == 'customer') {
						Acknowledgement.query({q:scope.contact.name}, function (resp) {
							scope.contact.acknowledgements = resp;
						});
					}
				};

				scope.selectContact(scope.contact);
				scope.addNumber = function (num) {
					if(num) {
						scope.dialedNumber += num;
					}
				};

				scope.backspace = function () {
					scope.dialedNumber = scope.dialedNumber.slice(0, -1);
					$rootScope.safeApply();
				};

				scope.call = function () {
					voip.status = 'active';
					if (scope.dialedNumber.charAt(0) === '0') {
						scope.dialedNumber = scope.dialedNumber.replace('0', "+66");
					}
					var params = {"phoneNumber": scope.dialedNumber};
					k.disable();
					Twilio.Device.connect(params);
					$rootScope.safeApply();
				}

				scope.voipStatus = function () {
					return voip.status;
				};

				scope.voipFrom = function () {
					try{
						return status === "calling" ? scope.dialedNumber : voip.conn ? voip.conn.parameters.From : "";
					} catch (e) {

					}
				};

				scope.answer = function () {
					voip.conn.accept();
				};

				scope.hangup = function () {
					try{
						voip.conn.reject();
					} catch (e) {

					}
					Twilio.Device.disconnectAll();
					voip.status = '';
					voip.conn = null;
					scope.contact = null;
					scope.selectedContact = null;
					scope.contactSearchText = '';
					scope.dialedNumber = '';
					k.disable();
					$rootScope.safeApply();

				}
			});
		}
	};

}]);
