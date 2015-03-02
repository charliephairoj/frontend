

var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
//grunt.loadNpmTasks('grunt-proxy');

  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-protractor-runner');

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
    watch: {
		
      	livereload: {
		  	
          	files: [
      		  	'<%= yeoman.app %>/{,*/}*.html',
      		  	'{.tmp,<%= yeoman.app %>}/views/**/*.html',
      		  	'{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
	          	'{.tmp,<%= yeoman.app %>}/styles/**/*.css',
	      	  	'{.tmp,<%= yeoman.app %>}/m_styles/{,*/}*.css',
	      	  	'{.tmp,<%= yeoman.app %>}/m_styles/**/*.css',
		  	  	'{.tmp,<%= yeoman.app %>}/print_styles/{,*/}*.css',
		  	  	'{.tmp,<%= yeoman.app %>}/print_styles/**/*.css',
  		  		'{.tmp,<%= yeoman.app %>}/iphone4_style/{,*/}*.css',
          		'{.tmp,<%= yeoman.app %>}/iphone4_style/**/*.css',
	          	'{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
	          	'{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
	          	'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
				
          	],
			//tasks: ['jshint'],
			options: {
				livereload: 35729
			}

        
        //files: [
          //'<%= yeoman.dist %>/{,*/}*.html',
          //'{.tmp,<%= yeoman.dist %>}/views/**/*.html',
          //'{.tmp,<%= yeoman.dist %>}/styles/{,*/}*.css',
          //'{.tmp,<%= yeoman.dist %>}/styles/**/*.css',
          //'{.tmp,<%= yeoman.dist %>}/scripts/{,*/}*.js',
          //'{.tmp,<%= yeoman.dist %>}/scripts/**/*.js',
          //'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
        //],
        //tasks: ['livereload']
      	},
		
      	less: {
          	files: [
          		'{.tmp,<%= yeoman.app %>}/styles/{,*/}*.less',
          		'{.tmp,<%= yeoman.app %>}/styles/**/*.less',
      			'{.tmp,<%= yeoman.app %>}/iphone4_style/{,*/}*.less',
      			'{.tmp,<%= yeoman.app %>}/iphone4_style/**/*.less',
      			'{.tmp,<%= yeoman.app %>}/m_styles/{,*/}*.less',
      			'{.tmp,<%= yeoman.app %>}/m_styles/**/*.less',
	  			'{.tmp,<%= yeoman.app %>}/print_styles/{,*/}*.less',
	  			'{.tmp,<%= yeoman.app %>}/print_styles/**/*.less',
          	  ],
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
            '<%= yeoman.app %>/scripts/{,*/}*.js'
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
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
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
			'iphone4_style/main.css'
          ]
        }]
      }
    }
  });

  //grunt.renameTask('regarde', 'watch');
  // remove when mincss task is renamed
  grunt.renameTask('mincss', 'cssmin');
  
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
    'jshint',
    //'test',
    'less',
    //'recess',
    'useminPrepare',
    'imagemin',
    'cssmin',
    'prettify',
    //'htmlmin',
    'concat',
    'copy',
    //'cdnify',
    'usemin',
    'ngmin',
    
    //'uglify'
  ]);

  grunt.registerTask('default', ['build']);
};
