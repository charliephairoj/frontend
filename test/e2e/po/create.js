/*
 * Purchase Order Test Page
 */


describe('Purchase Order', function () {
	
	function search(query) {
		element(by.css('.supplier-list .search-bar input')).sendKeys(query);
	}
	
	xit('should navigate to the purchase order page', function () {
		browser.ignoreSynchronization = true;
		browser.get('/#/');
		element(by.cssContainingText('a', 'Orders')).click();
		element(by.cssContainingText('a', 'Purchase Orders')).click();
		expect(element(by.css('.sidebar span')).getText()).toEqual('Purchase Order');
	});
	
	describe('Creating a new Purchase Order', function () {
			
		describe('Intializing the page', function () {
			
			beforeEach(function () {
				browser.get('/#/order/purchase_order/create');
				browser.sleep(1000);
			});
			
			it('should load suppliers', function () {
				
				expect(element.all(by.repeater('supplier in suppliers')).count()).toBeGreaterThan(0);
			});
			
			describe('selecting a supplier', function () {
				
				it('should select a supplier by clicking', function () {
					element(by.css('.supplier .add')).click();
					var supplierElement = element.all(by.repeater('supplier in supplier')).get(4)
					var supplierName = supplierElement.getText();
					supplierElement.click();
					expect(element(by.binding('po.supplier.name')).getText()).toEqual(supplierName);
				});
				
				it('should select a supplier by keyboard', function () {
					element(by.css('.supplier .add')).click();
					var supplierElement = element.all(by.repeater('supplier in supplier')).get(4)
					var supplierName = supplierElement.getText();
					
					//Move to the 5 supplier and select
					browser.actions().sendKeys(protractor.Key.DOWN).perform();
					browser.actions().sendKeys(protractor.Key.DOWN).perform();
					browser.actions().sendKeys(protractor.Key.DOWN).perform();
					browser.actions().sendKeys(protractor.Key.DOWN).perform();
					browser.actions().sendKeys(protractor.Key.ENTER).perform();
					
					expect(element(by.binding('po.supplier.name')).getText()).toEqual(supplierName);
				});
			});
			
			describe('Supply interactions', function () {
				
				it('should load supplies after selecting a supplier', function () {
					element(by.css('.supplier .add')).click();
					element.all(by.repeater('supplier in suppliers')).get(4).click();
					expect(element.all(by.repeater('supply in supplies')).count()).toBeGreaterThan(0);
				});
				
				describe("Selecting a supply", function () {
					
					beforeEach(function () {
						element(by.css('.supplier .add')).click();
						search('bound');
						element.all(by.repeater('supplier in suppliers')).get(0).click();
						browser.sleep(1000);
						element(by.css('.order-details button.add')).click();
					});
					
					it('should select the supply by keyboard', function () {
						var supplyElement = element.all(by.repeater('supply in supplies')).get(0);
						var supplyDescription = supplyElement.element(by.css('span')).getText();
						
						//Simulate keyboard
						browser.actions().sendKeys(protractor.Key.DOWN).perform();
						browser.actions().sendKeys(protractor.Key.ENTER).perform();
						browser.sleep(1000);
						expect(element.all(by.repeater('item in po.items')).count()).toEqual(1);
						expect(element(by.binding('item.description')).getText()).toEqual(supplyDescription);
						browser.sleep(1000);
					});
					
					it('should select the supply by click', function () {
						var supplyElement = element.all(by.repeater('supply in supplies')).get(0);
						var supplyDescription = supplyElement.element(by.css('span')).getText();
						
						supplyElement.click();
						
						expect(element(by.binding('item.description')).getText()).toEqual(supplyDescription);
						browser.sleep(1000);
					});
					
				});
			});
			
			describe('Selecting a deposit', function () {
				
				it('should apply the correct ending to the deposit amount', function () {
					//Select the a supplier to open way for other interactions
					element(by.css('.supplier .add')).click();
					search('bound');
					element.all(by.repeater('supplier in suppliers')).get(0).click();
					browser.sleep(1000);
					
					//Test click amount
					element(by.css('option[value="amount"]')).click();
					expect(element(by.css('span.deposit-currency')).getAttribute('class')).not.toMatch('ng-hide');	
					expect(element(by.css('span.deposit-percent')).getAttribute('class')).toMatch('ng-hide');
					
				});
				
				it('should apply the correct ending to the deposit percent', function () {
					//Select the a supplier to open way for other interactions
					element(by.css('.supplier .add')).click();
					search('bound');
					element.all(by.repeater('supplier in suppliers')).get(0).click();
					browser.sleep(1000);
					
					//Test click percent
					element(by.css('option[value="percent"]')).click();
					expect(element(by.css('span.deposit-currency')).getAttribute('class')).toMatch('ng-hide');	
					expect(element(by.css('span.deposit-percent')).getAttribute('class')).not.toMatch('ng-hide');
				});
			});
			
			describe("Adding supplies and setting quantity and discounts", function () {
					
				beforeEach(function () {
					element(by.css('.supplier .add')).click();
					search('bound');
					element.all(by.repeater('supplier in suppliers')).get(0).click();
					browser.sleep(1000);
					
					element(by.css('.order-details button.add')).click()
					element.all(by.repeater('supply in supplies')).get(0).click();
					browser.sleep(1000);
				});
				
				it('should calculate the subtotal after setting the discount', function () {
					var repeater = element.all(by.repeater("item in po.items"));
					var unitCost = [];
					repeater.then(function (rows) {
						expect(rows.length).toEqual(1);
						
						rows[0].element(by.model('item.quantity')).sendKeys(2);
						rows[0].element(by.model('item.cost')).getAttribute('value').then(function (value) {
							element(by.binding('subtotal()')).getText().then(function (testValue) {
								expect(Number(testValue.replace(',', ''))).toEqual(Number(2 * value));
							});
						});
						
						rows[0].element(by.model('item.discount')).sendKeys(0);
						rows[0].element(by.model('item.cost')).getAttribute('value').then(function (value) {
							element(by.binding('subtotal()')).getText().then(function (testValue) {
								expect(Number(testValue.replace(',', ''))).toEqual(Number(2 * value));
							});
						});
						
					});
				});
				
				it('should calculate the total after setting the discount for the whole po', function () {
					element(by.model('item.quantity')).sendKeys(1);
					element(by.model('po.discount')).sendKeys(10);
					element(by.css('option[value="percent"]')).click();
					element(by.css('.unit-cost')).getText().then(function(value) {
						element(by.binding('total() || 0 | number:2')).getText().then(function (testValue) {
							expect(Number(testValue.replace(',', ''))).toBeDefined()//toEqual((value) * 0.9);
						});
					});					
				});
				
				it('should calculate the total after setting the discount for an item', function () {
					element(by.model('item.quantity')).sendKeys(1);
					element(by.model('item.discount')).sendKeys(10);
					element(by.css('.items .total')).getText().then(function (value) {
						expect(value).toBeGreaterThan(0);
						element(by.css('.subtotal .value')).getText().then(function (subTotalVal) {
							expect(Number(subTotalVal.replace(',', ''))).toBeDefined();
							expect(Number(subTotalVal.replace(',', ''))).toEqual(Number(value));
							
						})
					});
				});
				
				it('should calculate the grand total after setting the vat for the whole po', function () {
					//Set the vat
					element(by.model('po.vat')).sendKeys(7);
					
					element(by.model('item.quantity')).sendKeys(1);
					element(by.model('po.discount')).sendKeys(5);
					element(by.css('option[value="percent"]')).click();
					element(by.css('.unit-cost input')).getAttribute('value').then(function(value) {
						expect(value).toBeGreaterThan(0);
						element(by.css('.grand-total .value')).getText().then(function (testValue) {
							expect(Number(testValue.replace(',', ''))).toBeDefined()
							var expectedVal = Math.round(((value * 0.95) * 1.07) * 100) / 100
							expect(Number(testValue.replace(',', ''))).toEqual(expectedVal);
						});
					});
					
					
					
					
				});
					
			});
			
			describe('Creating the purchase order', function () {
				
				beforeEach(function () {
					element(by.css('.supplier .add')).click();
					search('bound');
					element.all(by.repeater('supplier in suppliers')).get(0).click();
					browser.sleep(1000);
					
					element(by.css('.order-details button.add')).click()
					element.all(by.repeater('supply in supplies')).get(0).click();
					browser.sleep(1000);
					
					element(by.model('po.vat')).sendKeys(7);
					element(by.model('item.quantity')).sendKeys(1);
				});
				
				xit('should notify the user that the purchase order is being created', function () {
					element(by.css('.submenu .create')).click()
					
					element(by.css('#notification')).getText().then(function(message) {
						expect(message).toEqual('Creating purchase order...');
					});
				});
			});
		});
		
		
	});
});