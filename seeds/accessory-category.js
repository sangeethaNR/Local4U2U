const { Accessories } = require('../models');

const accessData = [
        {
            name: 'Ribbons',
            image: './images/',
            price: 1,
            store: 'Farmers Market',
            countInStock: 35,
            category: 'girl'
        },

        {
            name: 'leather belt',
            image: './images/',
            price: 45,
            store: 'Farmers Market',
            countInStock: 12,
        },

        {
            name: 'bandana',
            image: './images/',
            price: 10,
            store: 'Farmers Market',
            countInStock: 30,
        },
        
    ];
    const seedAccess = () => Accessories.bulkCreate(accessData);

    module.exports = seedAccess;