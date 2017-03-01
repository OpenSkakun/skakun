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
                command: ['bower install',
                    // 'rm -r public',
                    // 'mkdir public'
//                    'mv bower_components/** public/'
//                    'rm -rf bower_components'
                ].join('&&')
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'webapp/static/skakun.css': [
                        'bower_components/bootstrap/dist/css/bootstrap.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Default Tasks
    grunt.registerTask('default', ['shell', 'cssmin']);

    //production Tasks
    //grunt.registerTask('dist',[..]);

    //test tasks
};