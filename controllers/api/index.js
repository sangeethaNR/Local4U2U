

const router = require('express').Router();
const userRoutes = require('./userRoutes');
 const categoryRoutes = require('./categoryRoutes');
//const commentRoutes = require('./commentRoutes');
router.use('/users', userRoutes);
 router.use('/category', categoryRoutes);
//router.use('/comments', commentRoutes);

module.exports = router;