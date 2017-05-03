
'use strict';

var pa11y = require('pa11y');

// Create a test instance with some default options
var test = pa11y({

	// Log what's happening to the console
	log: {
		debug: console.log.bind(console),
		error: console.error.bind(console),
		info: console.log.bind(console)
	},

	// Run some actions before the tests
	actions: [
		'set field #login_field to ***',
		'set field #password to ***',
		'click element .btn-primary',
		'wait for url to be https://github.com/'
    // 'click element .header-nav-link[aria-label="View profile and more"] .dropdown-caret',
    // 'click element .dropdown-item[href="/qileilove"]',
    // 'wait for url to be https://github.com/qileilove'
	]

});

// Test http://example.com/
test.run('https://github.com/login', function(error, result) {
	if (error) {
		return console.error(error.message);
	}
	console.log(result);
});
