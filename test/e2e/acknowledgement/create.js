describe('Acknowledgements', function () {
	
	
	
	/*
	beforeEach(function () {
		
		
		element(by.cssContainingText('a', 'Orders')).click();
		element(by.cssContainingText('a', 'Acknowledgements')).click();
		
		//expect(browser.getCurrentUrl()).toEqual("http://localhost:9001/#/order");
		
		//$httpBackend.expectGET('/api/v1/acknowledgement').respond([{id:1}, {id:2}]);
		
		expect(browser.getCurrentUrl()).toEqual('http://localhost:9001/#/order/acknowledgement');
		
	});*/
	
	
	describe('Acknowledgement View Page', function () {
		
		beforeEach(function () {
			browser.get('/#/order/acknowledgement');
		});
		
		it('should filter results', function () {
			expect(element.all(by.repeater('ack in acknowledgements')).count()).toEqual(20);
			
			browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('f').perform();
			
			expect(element(by.css('.search-bar')).getAttribute('class')).toMatch('focus');
			
			browser.driver.findElement(by.css('.search-bar input')).sendKeys('charliephairoj');
			
			expect(element.all(by.repeater('ack in acknowledgements')).count()).toEqual(20);
		});
	});
	
	describe('Create an new acknowledgement', function () {
			
		beforeEach(function () {
			browser.get('#/order/acknowledgement/create')
		});
		
		describe('The Setup', function () {
			
			
				
			it('should have a list of projects', function () {
				browser.sleep(1000);
				expect(element.all(by.css('.order .details .project option')).count()).toBeGreaterThan(0);
			});
			
			it('should have a list of customers', function () {
				//element(by.cssContainingText('.sidebar div.customer', 'Add Customer')).click();
				expect(element.all(by.css('.customer')).count()).toBeGreaterThan(0);
			
			});
			
			it('should have a list of products', function () {
				//element(by.cssContainingText('.sidebar div.upholstery', 'Add Product')).click();
				var modal = element(by.css('product-selector'));
				
				//expect(modal.findElement(by.cssContainingText('.selector ul li', 'Upholstery')).getAttribute('class')).toMatch('active');
				expect(element.all(by.repeater('upholstery in upholsteries')).count()).toBeGreaterThan(0);
				
				//var tableBtn = modal.findElement(by.cssContainingText('.selector li', 'Table'));
				//tableBtn.click()
				//expect(tableBtn.getAttribute('class')).toEqual('active');
			});
		});
		
		describe("Filling out the form", function () {
			describe('Selecting a customer', function () {
				it('should select a customer by click', function () {
					element(by.cssContainingText('.sidebar div.customer', 'Add Customer')).click();
					var customer = element.all(by.css('li.customer')).get(0);
					var customerName = customer.getText();
					customer.click();
					expect(element(by.binding('ack.customer.name')).getText()).toEqual(customerName);
					browser.sleep(1000);
				});
				
				it('should navigate and select the second customer by keyboard', function () {
					element(by.cssContainingText('.sidebar div.customer', 'Add Customer')).click();
					var customerName = element.all(by.css('li.customer')).get(2).getText();
					browser.actions().sendKeys(protractor.Key.DOWN).perform();
					browser.actions().sendKeys(protractor.Key.DOWN).perform();
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
					expect(element(by.binding('ack.customer.name')).getText()).toEqual(customerName);
					browser.sleep(1000);
				});
			});
			
			describe('Setting the vat', function () {
				it('should set the vat of the acknowledgement', function () {
					element(by.cssContainingText('.sidebar div.vat', 'Set Vat')).click();
					element(by.model('ack.vat')).sendKeys('7');
					browser.actions().sendKeys(protractor.Key.ENTER).perform()
					expect(element(by.binding('ack.vat')).getText()).toEqual('7%');
					browser.sleep(1000);
				});
			});
			
			describe('Setting the Purchase Order Number', function () {
				it('should set the purchase order number of the acknowledgement', function () {
					element(by.css('.sidebar div.po', 'Set Purchase Order')).click();
					element(by.model('ack.po_id')).sendKeys('56-233-555');
					browser.actions().sendKeys(protractor.Key.ENTER).perform()
					expect(element(by.binding('ack.po_id')).getText()).toEqual('56-233-555');
					browser.sleep(1000);
				});
			});
			
			describe('Setting the Delivery Date', function () {
				it('should set the vat of the acknowledgement', function () {
					element(by.cssContainingText('.sidebar div.delivery_date', 'Set Delivery Date')).click();
					var dateElement = element.all(by.css('.ui-datepicker-calendar td[data-event="click"]')).last();
					
					//Create reference date for testing
					var year,
						month,
						day;
					dateElement.getAttribute('data-month').then(function (monthVar) {
						month = monthVar;
					});
					dateElement.getAttribute('data-year').then(function (yearVar) {
						year = yearVar;
					});
					element.all(by.css('.ui-datepicker-calendar td[data-event="click"] a')).last().getText().then(function (dateVar) {
						day = dateVar;
					});
					var promise = browser.wait(function () {
						return month && year && day ? true : false;
					});
					
					promise.then(function () {
						var d = new Date(year, month, day);
						dateElement.click();
						var dateOptions = {year:"numeric", month:'long', day:'numeric', formatMatcher:'basic', weekday:'long'};
						expect(element(by.binding('ack.delivery_date')).getText()).toEqual(d.toLocaleDateString('en-US', dateOptions));
						browser.sleep(1000);
					});
					
				});
			});
			
		});
	});
})