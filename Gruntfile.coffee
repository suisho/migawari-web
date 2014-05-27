module.exports = (grunt) ->
  grunt.loadNpmTasks('assemble');
  grunt.initConfig
    assemble:
      options:
        layout: "src/layouts/layout.hbs",
      project:
        files:
          dest : ["dest/**/*.hbs" ]
          src : ["src/pages/*.hbs"]
  grunt.loadNpmTasks('assemble' );
  grunt.registerTask('default', ['assemble' ]);
