'use strict';

describe('Directive: addSupplier', function () {
	
	beforeEach(module('employeeApp'));
  	beforeEach(module('employeeApp.mocks'));
	beforeEach(module('directives'));
	
	var element,
		$http,
		compile, 
		scope,
		notification;
	
	beforeEach(inject(function ($rootScope, $compile, $injector) {
		$http = $injector.get('$httpBackend');
		notification = $injector.get('Notification')
	}));
	
	describe('Phase: Post-Initialization', function () {
		
		beforeEach(inject(function ($rootScope, $compile) {
			element = angular.element('<div add-supplier="test" on-add="testAdd($supplier)"></div>');
			$rootScope.test = true;
			$rootScope.testAdd = function () {};
			
			element = $compile(element)($rootScope);
			$rootScope.$digest();
			scope = element.isolateScope();
		}));
		
		afterEach(function () {
			$http.verifyNoOutstandingRequest();
			$http.verifyNoOutstandingExpectation();
		});
		
		describe('Adding a contact', function () {
			
			it('should add a contacts to the contacts array', function () {
				expect(scope.supplier.contacts).not.toBeDefined();
				/*
				element.find('input.contact-name').val('Charlie');
				expect(element.find('input.contact-name').val(), 'Charlie');
				element.find('input.contact-email').val('test@yahoo.com');
				expect(element.find('input.contact-email').val(), 'test@yahoo.com');
				element.find('input.contact-tel').val(1234);
				expect(element.find('input.contact-tel').val(), 1234);
				scope.$digest();
				*/
				scope.contact = {
					name: 'Charlie',
					email: 'test@yahoo.com',
					telephone: 1234
				}
				element.find('div.add-contact-btn').click();
				
				expect(scope.supplier.contacts).toBeDefined();
				expect(scope.supplier.contacts.length).toEqual(1);
				var contact = scope.supplier.contacts[0];
				expect(contact.name).toEqual('Charlie');
				expect(contact.email).toEqual('test@yahoo.com');
				expect(contact.telephone).toEqual(1234);
				expect(contact.primary).toBeTruthy();
			});
			
			it('should show a list of contacts added', function () {
				scope.supplier.contacts = [
					{name:'Joe', email:'joe@test.com', telephone:'1122'},
					{name:'Jen', email:'jen@test.com', telephone: 2233}
				];
				scope.$digest();
				expect(element.find('div.contact').length).toEqual(2);
				expect(element.find('div.primary.not-primary').length).toEqual(2);
			});
			
			it('should mark the initial the contact as the primary contact', function () {
				scope.contact = {name:'test', email:'test', telephone:'test'};
				scope.addContact(scope.contact);
				expect(scope.supplier.contacts.length).toEqual(1);
				expect(scope.supplier.contacts[0].hasOwnProperty('primary')).toBeTruthy();
				expect(scope.supplier.contacts[0].primary).toBeDefined();
				expect(scope.supplier.contacts[0].primary).toBeTruthy();
				scope.$digest();
				var contactPrimaryDiv = element.find('div.contact').find('div.primary');
				expect(contactPrimaryDiv.hasClass('not-primary')).toBeFalsy();
			});
		});
		
		describe('Saving the new supplier', function () {
			it('should make a POST request to the server', function () {
				$http.expectPOST('/api/v1/supplier/').respond({
					name: 'Zippers RUS'
				});
				expect(notification.hidden).toBeTruthy();
				scope.form.$valid = true;
				scope.add();
				
				$http.flush();
		
			});
			
			xit('should call the onAdd link function', inject(function ($rootScope) {
				$http.expectPOST('/api/v1/supplier/').respond({id:8, name: 'Yay'});
				scope.form.$valid = true;

				//spyOn($rootScope, 'testAdd').andCallThrough();
				//spyOn(scope, 'onAdd').andCallThrough();
				
				scope.add();
				$http.flush();
				
				expect(scope.onAdd).toHaveBeenCalled();
				expect($rootScope.testAdd).toHaveBeenCalled();
			}));
		});
	});
});
