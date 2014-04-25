module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    coffee: {
      compile: {
        files: {
          'build/js/compiled.js': [
            'src/scripts/main.coffee',
            'src/scripts/app.coffee',
            'src/scripts/controllers.coffee',
            'src/scripts/directives.coffee',
            'src/scripts/filters.coffee',
            'src/scripts/services.coffee'
          ]
        }
      },
    },

    uglify: {
      options: {
        mangle: false,
        compress: false
      },
      build: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/angular/angular.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-resource/angular-resource.min.js',
          'bower_components/angularjs-mongolab/mongolab.js',
          'bower_components/ratchet2/js/ratchet.min.js',
          'build/js/compiled.js'
        ],
        dest: 'build/js/main.min.js'
      }
    },

    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'build/css/main.min.css': [
            'bower_components/ratchet2/css/ratchet.min.css',
            'src/styles/style.less'
          ]
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        expand: true,
        cwd: 'src/pages/',
        src: [
          '*.html',
          '**/*.html'
        ],
        dest: 'build/'
      }
    },

    responsive_images: {
      resize: {
        options: {
          engine: 'im', // use imagemagick
          sizes: [{
            width: 80,
          }, {
            width: 800,
            upscale: false
          }]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,png}'],
          cwd: 'src/images/',
          custom_dest: 'build/img/{%= width %}/'
        }]
      }
    },

    copy: {
      main: {
        files: [
          // include my custom images from src/images/
          {expand: true, flatten: true, cwd: 'src/images/', src: ['**'], dest: 'build/img/', filter: 'isFile'},

          // include any files from src/files/ such as .htaccess, robots.txt etc
          {expand: true, flatten: true, cwd: 'src/files/', src: ['**'], dest: 'build/', filter: 'isFile', dot: true},

          // include custom fonts from css framework
          {expand: true, flatten: true, src: ['bower_components/ratchet2/fonts/**'], dest: 'build/fonts/', filter: 'isFile'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-recess');

  grunt.registerTask('default', ['coffee', 'htmlmin', 'uglify', 'recess', 'responsive_images', 'copy']);

};