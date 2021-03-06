module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			main : {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'puredom.propertyselector.min.js': [
						'puredom.propertyselector.js'
					]
				}
			}
		},
		jshint : {
			options : {
				browser : true
			},
			main : [
				'puredom.propertyselector.js'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', [
		'jshint:main',
		'uglify:main'
	]);
	
};
