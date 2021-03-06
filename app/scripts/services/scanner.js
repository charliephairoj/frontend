
angular.module('employeeApp.services')
.factory('scanner', ['$location', '$rootScope', '$timeout', function ($location, $rootScope, $timeout) {
	/**
	 * Scanner module
	 * 
	 * Var 'code' is the primary string of characters to test again when a barcode is scanned.
	 */

	var code = '',
		codes = '',
		unparsedStr = '',
		standardCodes = [ 
			[/^PO-\d+$/, '/order/purchase_order/'],
			[/^A-\d+$/, '/order/acknowledgement/'],
			[/^AI-\d+$/, '/order/acknowledgement/item/'],
			[/^S-\d+$/, '/order/shipping/']
		],
		customCodes = [],
		parseStandardCodes = true,
		timeoutVar = 0,
		re = /^METROLOGICK07[A-Z]\-\d+$/,
		codeRe = /[A-Z]\-\d+$/,
		stream = '';
		
		
	var check = function (evt) {
		this._check(evt);
	};
    
    function Scanner(identity) {
		this.stream = '';
		this._identity = identity;
		this._activeParse = false;
		this._timeoutParse = null;
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
    
	Scanner.prototype.stringCheck = function (evt) {
		
		//Cancel previously set timeout
		$timeout.cancel(timeoutVar);
		
		//Get the letter
		var key = evt.keyCode;
		var letter;
		
		if ((96 <= key && key <= 105) || (48 <= key && key <= 90)) {
			letter = String.fromCharCode((96 <= key && key <= 105) ? key - 48 : key);
			//Add to unparsed string
			unparsedStr += letter;
		} else if (key === 189) {
			letter = '-';
			//Add to unparsed string
			unparsedStr += letter;
		}
		
		
		
		//Restart the time to check the string
		timeoutVar = $timeout(function () {
			if (re.test(unparsedStr)) {
				codes = codeRe.exec(unparsedStr);
				if (codes) {
					code = codes[0];
					this._dispatch(code);
				}
				unparsedStr = '';
				
				
			}
		}.bind(this), 500, false);
	};
	
	
	Scanner.prototype._check = function (evt, customFn) {
		
		/*
		 * Checks if the string matches the preset prefix and suffix 
		 * of the scanner
		 */
		this.stringCheck(evt);
		
		startCode = /]C0$/
		barcode = /]C0(.+)(\r)?/
		safetyCode1 = /](.)?(.)?$/
		safetyCode2 = /]C0.+$/
		
		/**
		 * Add the new read charatcter to the stream
		 */

		switch (evt.keyCode){
			case 189:
				this.stream = this.stream + '-';
				break;
			case 221:
				this.stream = this.stream + ']';
				break;
			default:
				var letter =  String.fromCharCode(evt.keyCode);
				this.stream = this.stream + letter;
				break;
		}

		if (!safetyCode1.test(this.stream) && !safetyCode2.test(this.stream) && this.stream.length > 30) {
				this.stream = '';
		} else if (startCode.test(this.stream)) {
			this._activeParse = true;
		} else if (this._activeParse && evt.keyCode === 13) {
			// Extract the code from the stream
			var code = barcode.exec(this.stream)[1] || '';
			console.debug(code);
			this._dispatch(code);
			this.stream = '';
			this._activeParse = false;
		}
		console.debug(evt.keyCode, evt.altKey);
		console.debug(this.stream);
		console.debug(code);
		/*
		 * Checks if the character is the start code for the 
		 * scanner. If it is the start code, then turn on the parse
		 * switch to get the successive characters
		 */
		if (evt.keyCode === 76 && evt.altKey) {
			console.debug("Start code detected for scanner.");
			evt.preventDefault();
			this._activeParse = true;

			this._timeoutParse = $timeout(function () {
				this._activeParse = false;
				console.debug("Active parse timed out");

			}.bind(this), 1000, false);

			console.debug("scanner " + this._identity + " activated.");

		/*
		 * Checks if the character is the end code for the scanner.
		 * If it is, then turn off the parse switch, send the code to dispatch,
		 * and reset the code variable
		 */
		} else if (evt.altKey && evt.keyCode == 71) {
			console.debug("End code detected for scanner.");
			$timeout.cancel(this._timeoutParse);
			evt.preventDefault();
			this._activeParse = false;
			this._dispatch(code);
			code = '';
			console.debug("scanner " + this._identity + " deactivated.");
			
		/*
		 * If the parse switch is on, add the keypressed character to the code string
		 */
		} else {
			if (this._activeParse) {
				// Cancel original timeout
				$timeout.cancel(this._timeoutParse);
				
				// Extend timeout as characters have been pressed
				this._timeoutParse = $timeout(function () {
					this._activeParse = false;
					console.debug("Active parse timed out");
	
				}.bind(this), 1000, false);		

				console.debug("Add character: " + code);
				evt.preventDefault();
				this._parse(evt);
			}
		}
	};
    
	Scanner.prototype._parse = function (evt) {
		var key = evt.keyCode;
		console.debug(key);
		if ((96 <= key && key <= 105) || (48 <= key && key <= 90)) {
			var letter = String.fromCharCode((96 <= key && key <= 105) ? key - 48 : key);
			code += letter;
		} else if (key === 189) {
			code += '-';
		}
		console.debug(code);
	};

	Scanner.prototype._dispatch = function (code) {
		console.debug(code);
		if (code) {
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
			console.log(customCodes);
			for (var h=0; h<customCodes.length; h++) {
				if (customCodes[h][0].test(code)) {
					customCodes[h][1](code);
				}
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
