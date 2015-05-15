exports.config = {

		allScriptsTimeout: 11000,

		specs: ['features/*.feature'],

		capabilities: { 'browserName': 'firefox'},

		directConnect: true,

		seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

		framework: 'cucumber',

    		cucumberOpts: {
			require: ['features/steps/*.js', 'features/*.js'],
			format: 'pretty', 
			tags: '~@skip'
		}  

};