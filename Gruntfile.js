module.exports = function (grunt) {
    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

//            copy: {
//                dev: {
//                    files: [
//                        src: bower_components/
//                    ]
//                }
//            }
        shell: {
            multiple: {
                command: ['bower install'
                ].join('&&')
            }
        },
        uglify: {
            dist: {
                files: {
                    'webapp/static/js/skakun.js': [
                        'bower_components/bootstrap/dist/js/bootstrap.js'
                    ],
                    'webapp/static/js/jquery.min.js': 'bower_components/jquery/dist/jquery.js',
                    'webapp/static/js/bootstrap.min.js': 'bower_components/bootstrap/dist/js/bootstrap.js'
                }
            },
            options: {
                sourceMap: true,
                sourceMapIn: 'bower_components/jquery/dist/jquery.min.map'
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: true,
                roundingPrecision: -1,
                sourceMap: true,
                sourceMapIn: 'bower_components/bootstrap/dist/css/bootstrap.css.map'
            },
            target: {
                files: {
                    'webapp/static/css/skakun.css': [
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                        'webapp/templates/web/css/fontello-embedded.css',
                        'webapp/templates/web/css/sticky-footer-navbar.css'
                    ]
                }
            },
            map: {
                files: {
                    'webapp/static/skakun.css.map': [
                        'bower_components/bootstrap/dist/css/bootstrap.css.map'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Default Tasks
    grunt.registerTask('default', ['shell', 'cssmin', 'uglify']);

    //production Tasks
    //grunt.registerTask('dist',[..]);

    //test tasks
};