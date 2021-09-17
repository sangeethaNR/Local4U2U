const { Produce } = require('../models');

const produceData = [   
    {
        produce_name: 'Red Apples',
        image: './images/red-apple.jpg',
        stock: 35,
        price: 1,
        store_name: 'Farmers Market',
        category_id: 1,
        subCategory: 1
    },

    {
        produce_name: 'Oranges',
        image: './images/orange.jpg',
        stock: 40,
        price: 1.50,
        store_name: 'Farmers Market',
        category_id: 1,
        subCategory: 1
    },

    {
        produce_name: 'Bananas',
        image: './images/bananas.jpg',
        Stock: 30,
        price: 1,
        store_name: 'Farmers Market',
        category_id: 1,
        subCategory: 1

    },

    {
        produce_name: 'Strawberry',
        image: './images/strawberry.jpg',
        price: 1,
        Stock: 25,
        store: 'Farmers Market',
        category_id: 1,
        subCategory: 1
    },

    {
        produce_name: 'Broccoli',
        image: './images/Broccoli.jpg',
        price: 1,
        Stock: 40,
        store: 'Farmers Market',
        category_id: 1,
        subCategory: 2
    },

    {
        produce_name: 'Asparagus',
        image: './images/Asparagus.jpeg',
        price: 1,
        Stock: 50,
        store: 'Farmers Market',
        category_id: 1,
        subCategory: 2
    },

    {
        produce_name: 'Carrots',
        image: './images/carrots.jpg',
        price: 1,
        Stock: 40,
        store: 'Farmers Market',
        category_id: 1,
        subCategory: 2
    },
 ],

 const seedProduce = () => Produce.bulkCreate(produceData);

 module.exports = seedProduce;