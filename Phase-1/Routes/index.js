// // create some routes which can recieve the incoming request

const express = require('express');
const router = express.Router();

const controller = require('../Controllers/index');

router.get('/restaurants', controller.getAllRestaurants);

router.get('/restaurants/:id', controller.getRestaurantById);

router.get('/getRestaurantsByCity/:city', controller.getRestaurantsByCity);



module.exports = router;








// // https://zomato-clone-backend-8jfr.onrender.com/restaurants
// // https://zomato-clone-backend-8jfr.onrender.com/restaurants/2
// // https://zomato-clone-backend-8jfr.onrender.com/getRestaurantsByCity/Mumbai



// // https://67dc0251daf2a500763732ee--elaborate-selkie-1d5c05.netlify.app/
// // elaborate-selkie-1d5c05.netlify.app



// const express = require('express');
// const router = express.Router();
// const controller = require('../Controllers/index'); // Ensure correct import path

// // Debugging logs
// console.log("Controller Import:", controller);
// console.log("getAllRestaurants:", controller.getAllRestaurants);
// console.log("getRestaurantById:", controller.getRestaurantById);
// console.log("getRestaurantsByCity:", controller.getRestaurantsByCity);

// // Ensure functions are defined correctly
// if (!controller.getAllRestaurants || !controller.getRestaurantById || !controller.getRestaurantsByCity) {
//   throw new Error("One or more controller functions are not defined!");
// }

// // Define routes
// router.get('/restaurants', controller.getAllRestaurants);
// router.get('/restaurants/:id', controller.getRestaurantById);
// router.get('/restaurants/city/:city', controller.getRestaurantsByCity);  // Updated path

// module.exports = router;
