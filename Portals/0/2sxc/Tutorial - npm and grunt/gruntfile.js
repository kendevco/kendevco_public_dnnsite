module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            grunt: ['gruntfile.js'], // so it will actually check this file too; not necessary but nice
            allFilesWithinTheSrcFolder: ['src/**/*.js']     // all files in all subfolders of src
        },

        ngAnnotate: {
            options: {
                // Task-specific options go here. 
                // disable sourceMap for now as we can't pass it through to uglify yet (don't know how) sourceMap: true
            },
            whateverYouWantToCallThis: {
                files: {
                    'dist/angularsample.annotated.js': ['src/angular/angularsample.js']
                }
            },
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap: true
            },
            angularSources: {
                files: {
                    'dist/angularsample.min.js': ['dist/angularsample.annotated.js']
                }
            }, 
            exactlFileList: {
                files: {
                    'dist/sample.min.js': ['src/sample.js'],
                    'dist/sample2.min.js': ['src/sample2.js']
                }
            },
            mergeExample: {
                files: {
                    'dist/merged.min.js': ['src/multiple2merge/*.js']
                }

            }
        }
    });

  grunt.loadNpmTasks('grunt-ng-annotate');
  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-jshint');

// Default task(s).
  grunt.registerTask('default', ['jshint', 'ngAnnotate', 'uglify']);

};