

describe("Specific Purchase Order (by po number)", function () {
	
	
	
	describe("Selecting purchase order from list", function () {
	
		beforeEach(function () {
			browser.get('/#/order/purchase_order');
			browser.sleep(1000);
		});
		
		it('should change the page to the purchase order details page', function () {
			expect(element.all(by.repeater('po in poList')).count()).toBeGreaterThan(0);
			var poElm = element.all(by.repeater('po in poList')).first(),
				poNumber;
			
			poElm.element(by.css('span.description')).getText().then(function (poId) {
				poNumber = poId
			});
			
			poElm.click();
			
			browser.getCurrentUrl().then(function (url) {
				expect(url.split('#')[1]).toEqual('/order/purchase_order/'+poNumber);
			});
		});
	});
	
	describe('Purchase Order 1000005', function () {
		
		beforeEach(function () {
			browser.get('/#/order/purchase_order/1000005');
		});
		
		describe('Adding a new item to the order', function () {
			
			it('should add a new item list of items', function () {
				expect(element.all(by.repeater('item in po.items')).count()).toEqual(1);
				element(by.css('.add-item-btn')).click();
				element.all(by.repeater("supply in supplies | filter:search:strict | filter:query | orderBy:'description'"))
				.first().click();
				
				expect(element.all(by.repeater('item in po.items')).count()).toEqual(2);
			});
			
			describe("Setting details on the new item", function () {
				
				beforeEach(function () {
					element(by.css('.add-item-btn')).click();
					element.all(by.repeater("supply in supplies | filter:search:strict | filter:query | orderBy:'description'"))
					.first().click();
				});
				
				it('should change the order details when setting the quantity', function () {
					var elm = element.all(by.repeater("item in po.items")).last();
					elm.element(by.css('.quantity input')).sendKeys(10);
					elm.element(by.css('.total')).getText().then(function (total) {
						expect(Number(total)).toEqual(17.3);
					});
					
					//Test Subtotal
					element(by.css('.summary.subtotal .value')).getText().then(function (subtotal) {
						expect(Number(subtotal)).toEqual(19.03);
					});
					
					//Test vat
					element(by.css('.summary.vat .value')).getText().then(function (vat) {
						expect(Number(vat)).toEqual(1.33);
					});
					
					//Test Grand Total
					element(by.css('.summary.grand-total .value')).getText().then(function (grandTotal) {
						expect(Number(grandTotal)).toEqual(20.36);
					});
				});
				
				it('should change the order details when changing the discount', function () {
					var elm = element.all(by.repeater("item in po.items")).last();
					elm.element(by.css('.quantity input')).sendKeys(10);
					elm.element(by.css('.discount input')).sendKeys(5);
					
					elm.element(by.css('.total')).getText().then(function (total) {
						expect(Number(total)).toEqual(16.435);
					});
					
					//Test Subtotal
					element(by.css('.summary.subtotal .value')).getText().then(function (subtotal) {
						expect(Number(subtotal)).toEqual(18.17);
					});
					
					//Test vat
					element(by.css('.summary.vat .value')).getText().then(function (vat) {
						expect(Number(vat)).toEqual(1.27);
					});
					
					//Test Grand Total
					element(by.css('.summary.grand-total .value')).getText().then(function (grandTotal) {
						expect(Number(grandTotal)).toEqual(19.44);
					});
				});
			});
		});
		
		describe('Setting changing purchase order details', function () {
			
			it('should update the total and grand total when the discount is changed', function () {
			
				element(by.css('.details .discount')).sendKeys(5);
				
				//Test Subtotal
				element(by.css('.summary.subtotal .value')).getText().then(function (subtotal) {
					expect(Number(subtotal)).toEqual(1.73);
				});
				
				//Test discount
				element(by.css('.summary.discount .value')).getText().then(function (discount) {
					expect(Number(discount)).toEqual(-0.09)
				});
				
				//Test Total
				element(by.css('.summary.total .value')).getText().then(function (discount) {
					expect(Number(discount)).toEqual(1.64)
				});
				
				//Test vat
				element(by.css('.summary.vat .value')).getText().then(function (vat) {
					expect(Number(vat)).toEqual(0.12);
				});
				
				//Test Grand Total
				element(by.css('.summary.grand-total .value')).getText().then(function (grandTotal) {
					expect(Number(grandTotal)).toEqual(1.76);
				});
			});
		});
	});
});









