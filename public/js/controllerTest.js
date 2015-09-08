(function() {
	"use strict";

	var app = angular.module('controllerTest', []);

	app.controller('FormController', function() {
		this.items = [
			{ 
				item: 'Drip Coffee',
				quantity: 2,
				price: 2.10
			},
			{
				item: 'Pour-over Coffee',
				quantity: 1,
				price: 3.75
			}
		];

		this.newItem = {
			quantity: 1
		};

		this.addItem = function(itemForm) {
			this.items.push(this.newItem);
			this.newItem = {
				quantity: 1
			};

			itemForm.$setPristine();
			itemForm.$setUntouched();
		};


		this.getSubtotal = function() {
			var subtotal = 0;

			for(var i = 0; i < this.items.length; i++) {
				subtotal+= this.items[i].price * this.items[i].quantity;
			};

			return subtotal;
		};

		this.getTax = function() {
			var tax = this.getSubtotal() * 0.08125;

			return tax;
		}

		this.getDeliveryFee = function() {
			var items = 0;

			for(var i = 0; i < this.items.length; i++) {
				items+= this.items[i].quantity;
			};

			// Fee is $3 flat, plus $0.50 for each item
			var fee = ((items -1) * .5) + 3; 

			return fee;
		};

		this.getGrandTotal = function() {
			var grandTotal = this.getSubtotal() + this.getTax() + this.getDeliveryFee();

			return grandTotal;
		};

	});
})();