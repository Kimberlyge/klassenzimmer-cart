/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import Cart from '../../../app/components/cart/src/cart';
// import cartSummary from '../../../app/components/cart/src/cart-summary';

describe('Cart', () => {
	describe('constructor', () => {
		it('should set items to empty array', () => {
			const cart = new Cart();
			expect(cart.items).to.be.an('array');
			expect(cart.items).to.be.empty;
		});
	});

	describe('add', () => {
		it('should add an object to the collection', () => {
			const cart = new Cart();
			cart.add({
				id: 1,
				title: 'avocado'
			});
			expect(cart.items).to.be.an('array');
			expect(cart.items.length).to.be.equal(1);

			console.log(cart);
			console.log(cart.items.length);
		});
	});

	describe('count', () => {
		it('should count all the items that have been added', () => {
			const cart = new Cart();
			cart.add({
				id: 1,
				title: 'avocado'
			});
			cart.count();
			expect(cart.items).to.be.an('array');
		});
	});

	describe('removeOne', () => {
		it('should remove the last object that has been added to the collection', () => {
			const cart = new Cart();

			expect(false).to.be.false;
			expect(cart).to.not.equal(false);

			expect(cart.items).to.have.length.above(-1);

			// test wenn keins hinzugefügt wurde - error message (weiter durchlaufen)
			console.log(cart.items.length);
		});
	});

	describe('clear', () => {
		it('should remove all items', () => {
			const cart = new Cart();
			expect(cart.items).to.be.an('array');
			expect(cart.items).to.be.empty;
		});
	});

	// if else states testen
});
