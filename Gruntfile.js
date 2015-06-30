module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({


		connect: {
			server: {
				options: {
					port: 12001,
					base: 'app',
					keepalive: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('serve', ['connect']);

	grunt.registerTask('default', ['serve']);

};
