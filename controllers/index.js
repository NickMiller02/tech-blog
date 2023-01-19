// Requirement
const router = require('express').Router();

// Api file direction
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

// Router input
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// Errors if no input
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;