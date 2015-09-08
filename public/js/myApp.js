"use strict";

(function() {
    var app = angular.module("myApp", []);

    app.controller("ExampleController", function() {
        this.showElement = true;

        this.toggleElement = function() {
            this.showElement = !this.showElement;
        };
    });
})();