module.exports = function(grunt) {
  
  // Carga todas las tareas, bye bye loadNpmTasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	protractor: {
		options: {
			keepAlive: false,
			noColor: false, 
			debug: false
		},
		target: {
			options: {
				configFile: "protractor.conf.js"
			}
		}    
    }
  });
  
  grunt.registerTask('e2eTests', ['protractor']);
};