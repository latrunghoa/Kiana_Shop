// app.test.js

const app = require('../test');

describe('calculateTotalPrice', () => {
    test('returns 0 when no products are passed in', () => {
        expect(app.calculateTotalPrice([])).toBe(0);
    });

    test('returns the correct total price of products', () => {
        const products = [
            { name: 'Product 1', price: 10 },
            { name: 'Product 2', price: 20 },
            { name: 'Product 3', price: 30 },
        ];
        expect(app.calculateTotalPrice(products)).toBe(60);
    });
});
