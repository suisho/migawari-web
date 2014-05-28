module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig
    clean: "dest"
    jade:
  grunt.loadNpmTasks('assemble' );
  grunt.registerTask('default', ['dest', 'assemble' ]);
