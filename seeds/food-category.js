const { Food } = require('../models');

const foodData = [
        {
            food_name: 'Organic Chocolate Chip',
            image: '/images/choc-cookies.jpg',
            stock: 35,
            price: 2,
            store_name: 'NanasBakery',
            category_id: 4,
            sub_category_id: 8
        },

        {
            food_name: 'Corn Tamales',
            image: '/images/tamale-corn.jpg',
            stock: 40,
            price: 1.50,
            store_name: 'NanasBakery',
            category_id: 4,
            sub_category_id: 9
        },

        {
            food_name: 'Tiramisu',
            image: '/images/Tiramisu.jpg',
            stock: 30,
            price: 8.50,
            store_name: 'NothingLikeNonas',
            category_id: 4,
            sub_category_id: 9
        },

        {
            food_name: 'Marinara Sauce',
            image: '/images/marinara-sauce.jpg',
            stock: 30,
            price: 4,
            store_name: 'NothingLikeNonas',
            category_id: 4,
            sub_category_id: 7
        },

        {
            food_name: 'Barbecue Sauce',
            image: '/images/BBQ-Sauce.jpg',
            stock: 30,
            price: 4,
            store_name: 'YeehawSauces',
            category_id: 4,
            sub_category_id: 7
        },
        {
            food_name: 'Kettle Corn',
            image: '/images/kettle-corn.jpg',
            stock: 30,
            price: 2.50,
            store_name: 'Farmers Market',
            category_id: 4,
            sub_category_id: 8
        },
        {
            food_name: 'Peanut Butter Cookies',
            image: '/images/PeanutButterCookies.jpg',
            stock: 30,
            price: 2,
            store_name: 'DelishCooks',
            category_id: 4,
            sub_category_id: 9
        },
        {
            food_name: 'Baguettes',
            image: '/images/baguettes.jpg',
            stock: 30,
            price: 2,
            store_name: 'FrenchBakedGoods',
            category_id: 4,
            sub_category_id: 9
        },
        {
            food_name: 'Hot Salsa',
            image: '/images/hotSauce.jpg',
            stock: 30,
            price: 4,
            store_name: 'YeehawSauces',
            category_id: 4,
            sub_category_id: 7
        },
        {
            food_name: 'Trail Mix',
            image: '/images/TrailMix.jpeg',
            stock: 30,
            price: 2.50,
            store_name: 'Farmers Market',
            category_id: 4,
            sub_category_id: 8
        },
        {
            food_name: 'Chips',
            image: '/images/Chips.jpg',
            stock: 30,
            price: 2.50,
            store_name: 'Farmers Market',
            category_id: 4,
            sub_category_id: 8
        },

    ];

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;