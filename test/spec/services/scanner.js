'use strict';

describe('Service: scanner', function () {
	
	beforeEach(module('employeeApp.services'));
	
	var scanner,
		$window
		
	function keypress(keycode, alt) {
		var evt = jQuery.Event('keydown');
		evt.which = keycode;
		evt.keyCode = keycode;
		if (alt) {
			evt.altKey = true;
		} else {
			evt.altKey = false;
		}
		$(document.body).trigger(evt);
	}
	
	beforeEach(inject(function (_scanner_, $injector) {
		scanner = new $injector.get('scanner')();
		$window = $injector.get('$window');
		scanner.enable();
	}));
	
	describe('Capturing scans', function () {
		
		it('should start active parsing on the start code', function () {
			expect(scanner._activeParse).toBeFalsy();
			keypress(76, true);
			expect(scanner._activeParse).toBeTruthy();
		});
		
		it('should capture keypresses', function () {
			globalScanner.disable();
			expect(scanner._activeParse).toBeFalsy();
			keypress(76, true);
			expect(scanner._activeParse).toBeTruthy();
			keypress(97);
			expect(scanner._code).toEqual('1');
		});
		
		it('should stop active parsing on the end code', function () {
			expect(scanner._activeParse).toBeFalsy();
			keypress(76, true);
			expect(scanner._activeParse).toBeTruthy();
			keypress(71, true);
			expect(scanner._activeParse).toBeFalsy();
		});
	});
});
