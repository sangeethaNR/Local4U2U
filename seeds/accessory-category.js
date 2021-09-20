const { Accessory } = require('../models');

const accessData = [
        {
            access_name: 'Shell Bracelet',
            image: '/images/shell-bracelet.jpg',
            stock: 35,
            price: 3.50,
            store_name: 'ClothesMax',
            category_id: 2
        },

        {
            access_name: 'leather belt',
            image: '/images/leather-belt.jpg',
            stock: 12,
            price: 45,
            store_name: 'LocalMart',
            category_id: 2
        },

        {
            access_name: 'Bandana-Headscarf',
            image: '/images/Bandana-Headscarf.jpg',
            stock: 30,
            price: 12,
            store_name: 'LocalMart',
            category_id: 2
        },

        {
            access_name: 'Woven Bag',
            image: '/images/Woven-Bag.jpg',
            stock: 30,
            price: 35,
            store_name: 'ClothesMax',
            category_id: 2
        },
        
    ];

const seedAccess = () => Accessory.bulkCreate(accessData);

module.exports = seedAccess;