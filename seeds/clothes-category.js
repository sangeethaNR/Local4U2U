const { Clothes } = require('../models');

const clothesData = [
  {
    product_name: 'Plain T-Shirt',
    image: './images/Cotton-Plain-T-Shirt.jpg',
    price: 14.99,
    stock: 14,
  },
  {
    product_name: 'Pullover',
    image: './images/blue-pullover.jpg',
    price: 90.0,
    stock: 25,
  },
  {
    product_name: 'Khaki Pants',
    image: './images/khaki-pants.jpg',
    price: 22.99,
    stock: 12,
  },
  {
    product_name: 'Red Skirt',
    image: './images/red-skirt.jpg',
    price: 12.99,
    stock: 50,
  },
  {
    product_name: 'Cargo Shorts',
    image: './images/',
    price: 29.99,
    stock: 22,
  },
];

const seedClothes = () => Clothes.bulkCreate(clothesData);

module.exports = seedClothes;
