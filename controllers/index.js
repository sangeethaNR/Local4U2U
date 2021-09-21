
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const orderRoutes = require('./orderController');
const checkoutRoutes = require('./checkoutRoutes');
//const dashboardRoutes = require('./dashboardRoutes');
//const dashboardRoutes = require('./dashboard-routes.js');
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/cart', orderRoutes);
router.use('/checkout', checkoutRoutes);
//router.use('/dashboard', dashboardRoutes);

module.exports = router;