// Karma configuration

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'karma.conf.js',
			'app/components/jquery/dist/jquery.min.js',
			'app/components/angular/angular.min.js',
			'app/components/angular-cookies/angular-cookies.min.js',
			'app/components/angular-route/angular-route.min.js',
			'app/components/angular-ui/build/angular-ui.js',
			'app/components/angular-ui-date/src/date.js',
			'app/components/angular-resource/angular-resource.js',
			
			'app/components/hammerjs/hammer.min.js',
			
			'app/components/angular-animate/angular-animate.js',
			'app/components/angular-aria/angular-aria.js',
			'app/components/angular-material/angular-material.js',
			'app/components/angular-mocks/angular-mocks.js',
			"app/components/ng-grid/ng-grid-2.0.7.min.js",
			//'app/scripts/*.js',
			'test/mock/**/*.js',
			'app/scripts/**/*.js',
			//'app/views/**/*.html',
			'test/spec/**/*.js',
			'app/views/templates/**/*.html'
	  
		],
		
		reporters: ['dots'],
		
		port:8001,
		
		preprocessors: {
			'app/views/templates/**/*.html': ['ng-html2js']
		},
	
		ngHtml2JsPreprocessor: {
			// strip this from the file path
			stripPrefix: 'app/',
		  
			// setting this option will create only a single module that contains templates
			// from all the files, so you can load them all with module('foo')
			moduleName: 'directives'
		},
		
		// cli runner port
		runnerPort: 9100,
		
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		
		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_DEBUG,
		
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		
		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],
		
		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 40000,
		
		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};

