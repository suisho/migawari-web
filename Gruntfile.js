(function() {
  module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
      clean: "dest",
      browserify: {
        dist: {
          files: {
            "public/js/migawari.js": ["node_modules/migawari/index.js"]
          }
        }
      }
    });
    return grunt.registerTask('default', ['dest', 'assemble']);
  };

}).call(this);
