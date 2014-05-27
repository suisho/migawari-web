module.exports = (grunt) ->
  grunt.loadNpmTasks('assemble');
  grunt.initConfig
    assemble:
      options:
        engine: 'consolidate'
        initializeEngine: (engine, options) =>

          a = engine.engine.jade.init(options)
        #layout: "src/layouts/layout.jade"
        flatten: true
      project:
        files :
          "dest/" : "src/pages/*.jade"
  grunt.loadNpmTasks('assemble' );
  grunt.registerTask('default', ['assemble' ]);
