const { Produce } = require('../models');


const produceData = [   
    {
        name: 'Red Apples',
        image: './images/red-apple.jpg',
        price: 1,
        store: 'Farmers Market',
        countInStock: 35,
        category: 'fruit'
    },

    {
        name: 'Oranges',
        image: './images/orange.jpg',
        price: 1.50,
        store: 'Farmers Market',
        countInStock: 40,
    },

    {
        name: 'Bananas',
        image: './images/bananas.jpg',
        price: 1,
        store: 'Farmers Market',
        countInStock: 30,
    },

    {
        name: 'Strawberry',
        image: './images/strawberry.jpg',
        price: 1,
        store: 'Farmers Market',
        countInStock: 25,
    },
 ],

 const seedProduce = () => Produce.bulkCreate(produceData);

 module.exports = seedProduce;