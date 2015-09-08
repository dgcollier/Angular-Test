"use strict";

(function() {
    var app = angular.module("myApp", []);

    app.controller("ExampleController", function() {
        this.showElement = true;

        this.toggleElement = function() {
            this.showElement = !this.showElement;
        };
    });

    app.controller("OtherController", function() {
    	this.myList = [
	    	{text: 'Some text here'},
	    	{text: 'Some text there'},
	    	{text: 'Some text everywhere'},
	    	{text: 'Some text far away'}
    	];
    });
})();