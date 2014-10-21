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
		},

		watch: {
			options: {
				reload: true,
				atBegin: true
			},
			files: ['app/**/*'],
			tasks: []
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('serve', ['connect', 'watch']);

};