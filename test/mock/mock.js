
beforeEach(function () {
	module('employeeApp', function ($provide) {
		$provide.factory('CurrentUser', function () {
			return function () {
				
			};
		});
	});
});



angular.module('employeeApp.mocks', [])


.factory('D3', function () {
	var d3 = {
			'max': function () {return 1000;}, 
			'scale': {linear: function () {
				return {
					domain: function () {return this;},
					range: function () {return this;}
				}
			} 
		}},
		actions = ['append', 'attr', 'classed', 'enter', 'data', 'on', 'text',
		'transition', 'delay', 'translation', 'select', 'selectAll', 'style',
		'duration'];

	for (var ii = 0; ii < actions.length; ii++) {
		d3[actions[ii]] = function () {
			return this;
		}
	}

	return d3
})
.factory('Notification', function () {
	function Notification() {
		this.message = '';
		this.hidden = true;
		
		this.display = function (message) {
			this.message = message;
			this.hidden = false;
		};
		
		this.hide = function () {
			this.hidden = true;
		}
	};
	
	return new Notification();
})
.factory('Geocoder', function ($q) {
	return {
		geocode: function () {
			return $q;
		}
	};
})

.factory('$window', function () {
	window.open = jasmine.createSpy('openUrl'); 
	return window;
})

.factory('xscanner', function () {
	var code = '',
		codes = '',
		standardCodes = [
		[/^PO-\d+$/, '/order/purchase_order/'],
		[/^A-\d+$/, '/order/acknowledgement/'],
		[/^AI-\d+$/, '/order/acknowledgement/item/'],
		[/^S-\d+$/, '/order/shipping/']
	],
		customCodes = [],
		parseStandardCodes = true;
		
    function Scanner() {
		this._activeParse = false;
		this._onscan = null;
		this._code = '';
		this.standardEnabled = true
		this.enabled = false;
		this.customCodes = [];	
    }
    
	Scanner.prototype._check = function (evt, customFn) {
		/*
		 * Checks if the character is the start code for the 
		 * scanner. If it is the start code, then turn on the parse
		 * switch to get the successive characters
		 */
		if (evt.keyCode === 76 && evt.altKey) {
			evt.preventDefault();
			this._activeParse = true;
		
		/*
		 * Checks if the character is the end code for the scanner.
		 * If it is, then turn off the parse switch, send the code to dispatch,
		 * and reset the code variable
		 */
		} else if (evt.altKey && evt.keyCode == 71) {
			evt.preventDefault();
			this._activeParse = false;
			this._dispatch(code);
			code = '';
		/*
		 * If the parse switch is on, add the keypressed character to the code string
		 */
		} else {
			if (this._activeParse) {
				evt.preventDefault();
				this._parse(evt);
			}
		}
	};
    
	Scanner.prototype._parse = function (evt) {
		var key = evt.keyCode;
		if ((96 <= key && key <= 105) || (48 <= key && key <= 90)) {
			var letter = String.fromCharCode((96 <= key && key <= 105) ? key - 48 : key);
			code += letter;
		} else if (key === 189) {
			code += '-';
		}
	};

	Scanner.prototype._dispatch = function (code) {
		codes = code.split('-');
		if (parseStandardCodes) {
			for (var i=0; i<standardCodes.length; i++) {
				if (standardCodes[i][0].test(code)) {
					codes = code.split('-');
					/* jshint ignore:start */
					$rootScope.safeApply(function () {
						$location.path(standardCodes[i][1]+codes[1]);
					});
					/* jshint ignore:end */
				}
			}
		}

		for (var h=0; h<customCodes.length; h++) {
			if (customCodes[h][0].test(code)) {
				customCodes[h][1](code);
			}
		}
	};
    
    /*
     * Public API
     * 
     * -enable
     * -disable
     * -onscan
     */

	
	Scanner.prototype.enable = function () {
		this.enabled = true;
	};
	
	Scanner.prototype.disable = function () {
		this.enabled = false;
	};
	
	Scanner.prototype.disableStandard = function () {
		parseStandardCodes = false;
		this.standardEnabled = false;
	};
	
	Scanner.prototype.enableStandard = function () {
		parseStandardCodes = true;
		this.standardEnabled = true;
	};
	
	Scanner.prototype.register = function (re, fn) {
		customCodes.push([re, fn]);
	};
	
	Scanner.prototype.checkIfRegistered = function (re) {
		for (var i=0; i<customCodes.length; i++) {
			if (customCodes[i][0] == re) {
				return true;
			}
		}
		
		return false;
	};
	
	function factory() {
		return new Scanner();
	}
	
	
})
.factory('xKeyboardNavigation', [function () {
	function KeyNav() {
		this.enabled = false;
	}
	
	KeyNav.prototype.enable = function () {
		this.enabled = true;
	};
	
	KeyNav.prototype.disable = function () {
		this.enabled = false;
	};
	
	Object.defineProperties(KeyNav.prototype, {
		onup: {
			set: function () {}
		},
		onleft: {
			set: function () {}
		},
		onright: {
			set: function () {}
		},
		ondown: {
			set: function () {}
		},
		onenter: {
			set: function () {}
		}
	});
	
	return KeyNav;
}]);

