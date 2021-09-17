const { Clothes } = require('../models');

const clothesData = [
  {
    product_name: 'Plain T-Shirt',
    image: './images/Cotton-Plain-T-Shirt.jpg',
    stock: 14,
    price: 14.99,
    store_name: 'ClothesMax',
    category_id: 3

  },
  {
    product_name: 'Pullover',
    image: './images/blue-pullover.jpg',
    stock: 25,
    price: 90.0,
    store_name: 'ClothesMax',
    category_id: 3

  },
  {
    product_name: 'Khaki Pants',
    image: './images/khaki-pants.jpg',
    stock: 12,
    price: 22.99,
    store_name: 'LocalMart',
    category_id: 3

  },
  {
    product_name: 'Red Skirt',
    image: './images/red-skirt.jpg',
    stock: 50,
    price: 12.99,
    store_name: 'ClothesMax',
    category_id: 3

  },
  {
    product_name: 'Cargo Shorts',
    image: './images/cargo-shorts.jpeg',
    price: 29.99,
    stock: 22,
    store_name: 'LocalMart',
    category_id: 3

  },
];

const seedClothes = () => Clothes.bulkCreate(clothesData);

module.exports = seedClothes;
