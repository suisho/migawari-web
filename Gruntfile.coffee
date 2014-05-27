module.exports = (grunt) ->
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.initConfig
    clean: ["dest"]
    assemble:
      options:
        engine: 'jade'
        flatten: true
      project:
        files :
          "dest/" : "src/*.jade"
  grunt.loadNpmTasks('assemble' );
  grunt.registerTask('default', ['dest', 'assemble' ]);
