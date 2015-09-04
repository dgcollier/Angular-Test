(function() {
	"use strict";

	var app = angular.module("fizzbuzzTest", []);

	app.filter('range', function() {
	  return function(input, total) {
	    total = parseInt(total);
	    for (var i=1; i<total; i++)
	      input.push(i);
	    return input;
	  };
	});
})();