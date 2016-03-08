const cartSummary = function (item) {
	this.items = item;
	console.log('his');
	console.log(this);
}

cartSummary.prototype.getSubtotal = function () {
	if (this.items.length) {
		return this.items.reduce(function (subtotal, item) {
		return subtotal += (item.quantity * item.price);
	}, 0);
}

cartSummary.prototype.getTax = function (state, done) {
	tax.calculate(this.getSubtotal(), state, function (taxInfo) {
		done(taxInfo.amount);
	});
};

	return 0;
};

module.exports = new cartSummary();
