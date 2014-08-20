module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
                    '_/components/js/*.js' // All JS in the libs folder
                ],
                dest: '_/components/js/build/production.js'
            }
        },
        uglify: {
            build: {
                src: '_/components/js/build/production.js',
                dest: 'lib/_/js/production.min.js'
            }
        },
        cssmin: {
            combine: {
                files: {
                    'lib/_/css/production.min.css': ['_/css/mystyles.css']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['_/components/js/*.js', '_/components/less/_mystyles.less'],
                tasks: ['concat', 'uglify', 'cssmin', 'less'],
                options: {
                    spawn: false
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["_/components/less"]
                },
                files: {
                    "_/css/mystyles.css": "_/components/less/_mystyles.less"
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch', 'less']);

};