
angular.module('employeeApp.services')
.factory('scanner', ['$location', '$rootScope', function ($location, $rootScope) {
		
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
		
		
	var check = function (evt) {
		this._check(evt);
	};
    
    function Scanner(identity) {
		this._identity = identity;
		this._activeParse = false;
		this.enabled = false;
		this._onscan = null;
		this.f = check.bind(this);
		Object.defineProperties(this, {
			_code: {
				get: function () {
					return code;
				}
			}
		});
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
		//console.debug(this._identity+' status: '+this.enabled+' / code: '+this._code);
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
    
    Object.defineProperties(Scanner.prototype, {
		standardEnabled: {
			get: function () {
				return parseStandardCodes;
			}
		}
	});
    
    
    
	Scanner.prototype.enable = function () {
		angular.element(document.body).on('keydown', this.f);
		this.enabled = true;
	};
    
	Scanner.prototype.disable = function () {
		angular.element(document.body).off('keydown',this.f);
		this.enabled = false;
	};
    
	Scanner.prototype.disableStandard = function () {
		parseStandardCodes = false;
	};
    
	Scanner.prototype.enableStandard = function () {
		parseStandardCodes = true;
	};
    
	Scanner.prototype.register = function (re, fn) {
		customCodes.push([re, fn]);
	};
    
	Scanner.deregister = function (re) {
		for (var i=0; i<customCodes.length; i++) {
			if (customCodes[i][0] == re) {
				customCodes.splice(i);
			}
		}
	};
	
	Scanner.prototype.destroy = function () {
		this.disable();
	};
    
	Object.defineProperty(Scanner.prototype, 'onscan', {
		set: function (fn) {
			this._onscan = fn;
		}
	});
	
	function ScannerFactory(identity) {
		return new Scanner(identity);
	}
	
	return ScannerFactory;
	
}]);
