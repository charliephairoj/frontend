

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
var serveStatic = require('serve-static');


module.exports = function (grunt) {
//grunt.loadNpmTasks('grunt-proxy');

  	grunt.loadNpmTasks('grunt-recess');
  	grunt.loadNpmTasks('grunt-usemin');
  	grunt.loadNpmTasks('grunt-contrib-less');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.loadNpmTasks('grunt-contrib-connect');
  	grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-connect-proxy');
	grunt.loadNpmTasks('grunt-ng-annotate');
	
		
  	// load all grunt tasks
  	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  	// configurable paths
  	var yeomanConfig = {
    	app: 'app',
   	 	dist: 'dist'
  	};

  	try {
    	yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
  	} catch (e) {}

  	grunt.initConfig({
    	yeoman: yeomanConfig,
     	// Watches files for changes and runs tasks based on the changed files
      	watch: {
        	bower: {
          	  files: ['bower.json'],
          	  tasks: ['wiredep']
        	},
	        js: {
	          	files: [
	    			'{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
	    			'{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
		  				],
	          	tasks: [],//'jshint'],
	  	  		options: {
	  	  			livereload: true
	  	  		}
	        },
	        jstest: {
	          	files: ['test/spec/{,*/}*.js'],
	          	tasks: ['test:watch']
	        },
	        gruntfile: {
	          	files: ['Gruntfile.js']
	        },
	        styles: {
	          	files: [
			  		'<%= yeoman.app %>/styles/{,*/}*.less',
	        		'<%= yeoman.app %>/styles/**/*.less',
	    	  		'{<%= yeoman.app %>}/m_styles/{,*/}*.less',
	    	  		'{<%= yeoman.app %>}/m_styles/**/*.less',
	  	  			'{<%= yeoman.app %>}/print_styles/{,*/}*.less',
	  	  			'{<%= yeoman.app %>}/print_styles/**/*.less',
	  				'{<%= yeoman.app %>}/iphone4_style/{,*/}*.less',
	    			'{<%= yeoman.app %>}/iphone4_style/**/*.less',
	  			],
	          	tasks: ['less:developement'],
	  	  		options: {
	  	  			livereload: true
	  	  		}
	        },
	  	  	html: {
	  	  	 	files: [
	  		  		'<%= yeoman.app %>/{,*/}*.html',
	  		  		'{.tmp,<%= yeoman.app %>}/views/**/*.html',
	  	  	 	],
	  	  		options: {
	  	  			livereload: true
	  	  		}
	  	  	},
	    },

	    // The actual grunt server settings
	    connect: {
		      	options: {
		        port: 9001,
		        open: true,
		        livereload: 35729,
		        // Change this to '0.0.0.0' to access the server from outside
		        hostname: '0.0.0.0',
				base: ['app', 'dist'],
	      	},
			proxies: [
				{
					context: '/api',
                    host: 'localhost',
                    port: 8000,
					https: false,
                    changeOrigin: true,
                    xforward: false
				},
				{
					context: '/login',
                    host: 'localhost',
                    port: 8000,
					https: false,
                    changeOrigin: true,
                    xforward: false
				},
				{
					context: '/logout',
                    host: 'localhost',
                    port: 8000,
					https: false,
                    changeOrigin: true,
                    xforward: false
				}
			],
	      	livereload: {
	      	  	options: {
					
					middleware: function (connect, options, middlewares) {
						
						return [
              			  	serveStatic(options.base[0]),
		                    proxySnippet
		                ];
					}
	        	},
	      	},
	      	build: {
	      	  	options: {
					middleware: function (connect, options, middlewares) {
						
						return [
              			  	serveStatic(options.base[1]),
		                    proxySnippet
		                ];
					}
	        	},
	      	}
		},
		
    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },
		/*
    watch: {
		
      	livereload: {
		  	
          	files: [
      		  	
      		  
	          	
				
          	],
			//tasks: ['jshint'],
			options: {
				livereload: 35729
			}

      
      	less: {
          	
          	  tasks: ['less'],
		  	 
      	},

    },
	
	
    connect: {
		options: {
			port: 9001,
			livereload: 35729,

			hostname: '0.0.0.0'
		},
      	livereload: {
        	options: {
				open: true,
				base: ['.tmp',
						yeomanConfig.app
					  ],
				keepAlive:false,
	          	middleware: function (connect) {
	            	return [
		          		require('json-proxy').initialize({
		            		proxy: {
		              		  	forward: {

					                '/api/': 'http://localhost:8000',
									'/$': 'http://localhost:8000',
									'/login': 'http://localhost:8000',
									'/logout': 'http://localhost:8000'
					            },
	              
		            		}
		          	  	}),
	              mountFolder(connect, '.tmp'),
	              mountFolder(connect, yeomanConfig.app)
	            	];
	          	}
        	}
      	},
      	test: {
        	options: {
				//hostname: '0.0.0.0',
          	  	port: 8080,
	
          	  	middleware: function (connect) {
            		return [
              	  		mountFolder(connect, '.tmp'),
              		  	mountFolder(connect, 'test')
            		];
          	  	}
        	}
      	}
    },
		*/
	
    open: {
      //server: {
        //url: 'http://localhost:<%= connect.livereload.options.port %>'
      //}
    },
    clean: {
      dist: ['.tmp', '<%= yeoman.dist %>/*'],
      server: '.tmp'
    },
    jshint: {
      options: {
        //jshintrc: '.jshintrc',
        globals: {
        	angular: true,
        	google: true,
        },
        curly: true,
        jquery: true,
        browser: true,
        devel: true,
        indent: 4
      },
	  
      all: [
        //'Gruntfile.js',
        //'<%= yeoman.app %>/scripts/{,*/}*.js',
        '<%= yeoman.app %>/scripts/**/*.js',
		'!<%= yeoman.app %>/scripts/services/ea-db.js',
		'!<%= yeoman.app %>/scripts/services/ea-resource.js',
		'!<%= yeoman.app %>/scripts/services/ea-storage.js'
      
      ]
	  
    },
    karma: {
		unit: {
	      	configFile: 'karma.conf.js',
		
		}
      
    },
	protractor: {
		options: {
			configFile: "protractor.conf.js",
			//keepAlive: true,
			noColor: false
		},
		run: {
			options: {
				//keepAlive: true,
				//singleRun: false
			}
		}
		
	},
   
    concat: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '.tmp/scripts/{,*/}*.js',
            '<%= yeoman.app %>/scripts/**/*.js'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/image',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/image'
        }]
      }
    },
    cssmin: {
      dist: {
        expand: true,
	    cwd: '<%= yeoman.app %>/styles',
	    src: ['main.css'],
	    dest: '<%= yeoman.dist %>/styles',
	    ext: '.min.css'
      }
    },
    less: {
    	developement: {
    		options: {
    			condense: true,
    			cleancss: true,
    			optimization: 1,
    			ieCompat: true,
    			strictImports: true
    		},
    		files: {
    			'<%= yeoman.app %>/styles/main.css' : '<%= yeoman.app %>/styles/main.less',
				'<%= yeoman.app %>/m_styles/main.css' : '<%= yeoman.app %>/m_styles/main.less',
    			'<%= yeoman.app %>/print_styles/main.css' : '<%= yeoman.app %>/print_styles/main.less',
				'<%= yeoman.app %>/iphone4_style/main.css' : '<%= yeoman.app %>/iphone4_style/main.less',
    		}
    	}
    },
    recess: {
	    dist: {
	        options: {
	            compile: true
	        },
	        files: {
	            'dist/styles/main.css': ['app/styles/main.less'],
	            'app/styles/main.css': ['app/styles/main.less']
	        }
	    },
	    app: {
	    	options: {
	    		compile: true
	    	},
	    	files: { 
	    		'app/styles/main.css': ['app/styles/main.less']
	    	}
	    }
	},
	prettify: {
		options: {
			condense: true,
			padcomments: true,
			indent: 1,
			indent_char: '	'
		},
		all: {
			expand: true,
		    cwd: '<%= yeoman.app %>',
		    src: ['*.html', 'views/*.html', 'views/**/*.html'],
		    dest: '<%= yeoman.dist %>'
		}
	},
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44*/
          collapseWhitespace: true,
          /*collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['*.html', 'views/*.html', 'views/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/scripts',
          src: '*.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '<%= yeoman.dist %>/scripts/scripts.js'
          ],
        }
      }
    },
    
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,txt}',
            '.htaccess',
            'components/**/*',
            'images/{,*/}*.{gif,webp}',
            'img/**/*',
            'fonts/**/*',
            'styles/main.css',
			'm_styles/main.css',
			'iphone4_style/main.css',
			'**/*.html'
          ]
        }]
      }
    },
	ngAnnotate: {
		options: {
            singleQuotes: true,
        },
        dist: {
            files: [
                {
                    expand: true,
                    src: ['<%= yeoman.dist %>/**/*.js'],
                },
            ],
        },
    },
    
  });

  //grunt.renameTask('regarde', 'watch');
  // remove when mincss task is renamed
  
  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'configureProxies',
      'clean:server',
      //'wiredep',
      //'concurrent:server',
	  //'less', 
      //'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });
  
  grunt.registerTask('server', [
    'clean:server',
    //'livereload-start',
    'connect:livereload',
    //'open',
    'watch',

  ]);
	
  grunt.registerTask('e2e', [
  	'clean:server',
  	'connect:test',
	'protractor:run'
  ]);
  grunt.registerTask('test', [

    'clean:server',
    'connect:test',
    'karma',
	//'protractor:run'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    //'jshint',
    //'test',
	  
    'useminPrepare',
	  
    'less',
    //'recess',
    //'imagemin',
    //'cssmin',
    //'htmlmin',
    'concat',
	'ngAnnotate',
    //'uglify',
	  
    'copy',
    //'cdnify',
    'usemin'
  ]);

  grunt.registerTask('default', ['build']);
};
