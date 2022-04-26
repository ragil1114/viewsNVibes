const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveTour,
  addTour,
  getTours,
  removeTour,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveTour);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

//added route to create a new tour
router.route('/tours').post(addTour)


// added route to get tours based on entered search
router.route('/tours/:tourDestination').get(getTours)

router.route('/tours/:tourId').delete(authMiddleware, removeTour);

module.exports = router;