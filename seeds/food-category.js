const { Food } = require('../models');

const foodData = [
        {
            name: 'Organic Chocolate Chip',
            image: './images/choc-cookies.jpg',
            price: 1,
            store: 'Nana Bakery',
            countInStock: 35,
            category: 'bakery'
        },

        {
            name: 'Corn Tamales',
            image: './images/tamale-corn.jpg',
            price: 1.50,
            store: 'Farmers Market',
            countInStock: 40,
            category: 'bakery'
        },

        {
            name: 'Bananas',
            image: './images/',
            price: 1,
            store: 'Farmers Market',
            countInStock: 30,
            category: 'condiments '
        },

        {
            name: 'Popcorn',
            image: './images/',
            price: 1,
            store: 'Farmers Market',
            countInStock: 30,
            category: 'snacks '
        },


    ];

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;