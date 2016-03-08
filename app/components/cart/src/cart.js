export default class Cart {

	constructor() {
		this.items = [];
	}

	// Add an item
	add(item) {
		// const addBtn = document.getElementById('js-addBtn');
		this.items.push(item);
	}

	// Count all excisting items
	count() {
		console.log(this.items.length);
	}

	// Clear all the added items
	clear() {
		this.items = [];
	}

	// Remove the last item that had been added
	removeOne(item) {
		this.items.pop(item);
	}

	/**
	 * param {Object}
	 * return {Promise}
	 * @private
	 */
	_save(item) {
		return this.storage.save();
	}

	_read() {
		return this.storage.read();
	}
}

class CartSlots extends Cart {

	constructor() {
		super();
	}

	add(item, position) {
		this.count ++;

		super.add(item);
		/*
		this.items.add({
			product: item,
			position: position
		});
		*/
	}

}



// ID für Cart

// Cookie eintrag in der datenbank
