const { Food } = require('../models');

const foodData = [
        {
            food_name: 'Organic Chocolate Chip',
            image: './images/choc-cookies.jpg',
            stock: 35,
            price: 2,
            store: 'NanasBakery',
            category_id: 4,
            subCategory: 3
        },

        {
            food_name: 'Corn Tamales',
            image: './images/tamale-corn.jpg',
            stock: 40,
            price: 1.50,
            store: 'NanasBakery',
            category_id: 4,
            subCategory: 3
        },

        {
            food_name: 'Tiramisu',
            image: './images/Tiramisu.jpg',
            stock: 30,
            price: 8.50,
            store: 'NothingLikeNonas',
            category_id: 4,
            subCategory: 3
        },

        {
            food_name: 'Marinara Sauce',
            image: './images/marinara-sauce.jpg',
            stock: 30,
            price: 1,
            store: 'NothingLikeNonas',
            category_id: 4,
            subCategory: 5
        },

        {
            food_name: 'Barbecue Sauce',
            image: './images/BBQ-Sauce.jpg',
            stock: 30,
            price: 1,
            store: 'YeehawSauces',
            category_id: 4,
            subCategory: 5
        },
        {
            food_name: 'Kettle Corn',
            image: './images/kettle-corn.jpg',
            stock: 30,
            price: 1,
            store: 'Farmers Market',
            category_id: 4,
            subCategory: 5
        },


    ];

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;