module.exports = function (grunt) {
    //project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            multiple: {
                command: ['bower install',
                    'rm -r public',
                    'mkdir public',
                    'mv bower_components/** public/',
                    'rm -rf bower_components'].join('&&')
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');

    //Default Tasks
    grunt.registerTask('default', ['shell']);

    //production Tasks
    //grunt.registerTask('dist',[..]);

    //test tasks
};