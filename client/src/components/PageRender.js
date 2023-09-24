//this is where the pages will be imported from for conditional rendering
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('../pages/Home');
const exerciseRoutes = require('../pages/Exercise');
const loginRoutes = require('../pages/Login');
const profileRoutes = require('../pages/Profile');
const signUpRoutes = require('../pages/SignUp')


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/Exercise', exerciseRoutes);
router.use('/Login', loginRoutes);
router.use('/Profile', profileRoutes);
router.use('/SignUp', signUpRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;