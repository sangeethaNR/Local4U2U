const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const orderRoutes = require('./orderController');
const checkoutRoutes = require('./checkoutRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/cart', orderRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;