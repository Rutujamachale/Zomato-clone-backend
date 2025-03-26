// const restaurantList = require("../Models/restaurants.json");
// // const mealTypes = require("../Models/mealtypes.json");


// exports.getAllRestaurants = (req, res) => {
//     res.status(200).json(restaurantList);
// }

// exports.getRestaurantById = (req, res) => {
//     const restaurantId = req.params.id;
//     const restaurant = restaurantList.find(value =>  value.id == restaurantId);

//     if (restaurant) {
//         res.status(200).json({ restaurant: restaurant });
//     } else {
//         res.status(404).json({
//             message: "Please provide valid restaurant ID"
//         });
//     }
// }

// exports.getRestaurantsByCity = (req, res) => {
//     const city = req.params.city;

//     const filteredRestaurants = restaurantList.filter(rest => rest.city == city);

//     if (filteredRestaurants.length > 0) {
//         res.status(200).json({ restaurantList: filteredRestaurants });
//     } else {
//         res.status(404).json({
//             message: "Please provide valid City Name"
//         });
//     } 
// }

// // exports.getAllMealTypes((req, res) => {
// //     // send back the mealtypes
// // });





// const getAllRestaurants = async (req, res) => {
//     try {
//       res.json({ message: "Fetching all Restaurants..." });
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching Restaurants", error });
//     }
//   };
  
//   const getRestaurantById = async (req, res) => {
//     try {
//       const id = req.params.id;
//       res.json({ message: `Fetching product with id: ${id}` });
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching Restaurant by id", error });
//     }
//   };
  
//   const getRestaurantsByCity = async (req, res) => {
//     try {
//       const city = req.params.city;
//       res.json({ message: `Fetching Restaurant with city: ${city}` });
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching Restaurant by city", error });
//     }
//   };
  
//   // Export all functions
//   module.exports = {
//     getAllRestaurants,
//     getRestaurantById,
//     getRestaurantsByCity,
//   };


// const restaurantList = require('../Models/Restaurant'); 
// // const mealTypes = require("../Models/mealtypes.json");

// // const Restaurant = require('../Models/Restaurants'); 

// exports.getAllRestaurants = (req, res) => {
//     // Query the database to fetch all restaurants
//     restaurantList.find()
//         .then((restaurantList) => {
//             // console.log("restaurant--->>>>",restaurantList)
//             // Check if restaurants are found and return them
//             if (restaurantList && restaurantList.length > 0) {
//                 res.status(200).json(restaurantList);  // Send the restaurant data in the response
//             } else {
//                 res.status(404).json({ message: 'No restaurants found' });
//             }
//         })
//         .catch((error) => {
//             console.error('Error fetching restaurants:', error);
//             res.status(500).json({ message: 'Error fetching restaurants', error: error.message });
//         });
// };



// // exports.getRestaurantById = (req, res) => {
// //     const restaurantId = req.params.id;
// //     const restaurant = restaurantList.findById(value =>  value.id == restaurantId);

// //     if (restaurant) {
// //         res.status(200).json({ restaurant: restaurant });
// //     } else {
// //         res.status(404).json({
// //             message: "Please provide valid restaurant ID"
// //         });
// //     }
// // }

// // exports.getRestaurantById = async (req, res) => {
// //     const restaurantId = req.params.id;

// //     try {
// //         const restaurant = await restaurantList.findById(restaurantId);
        
// //         if (restaurant) {
// //             res.status(200).json({ restaurant: restaurant });
// //         } else {
// //             res.status(404).json({
// //                 message: "Restaurant not found"
// //             });
// //         }
// //     } catch (error) {
// //         console.error('Error fetching restaurant by ID:', error);
// //         res.status(500).json({
// //             message: 'Error fetching restaurant by ID',
// //             error: error.message
// //         });
// //     }
// // };



// exports.getRestaurantById = async (req, res) => {
//     const restaurantId = req.params.id;

//     // console.log('====================================');
//     // console.log("restaurantId---->>>", restaurantId);
//     // console.log('====================================');

//     try {
//         // Since your restaurant's 'id' is a number, search by that custom field.
//         const restaurant = await restaurantList.findOne({ id: parseInt(restaurantId) });

//         if (restaurant) {
//             res.status(200).json({ restaurant: restaurant });
//         } else {
//             res.status(404).json({
//                 message: "Restaurant not found"
//             });
//         }
//     } catch (error) {
//         console.error('Error fetching restaurant by ID:', error);
//         res.status(500).json({
//             message: 'Error fetching restaurant by ID',
//             error: error.message
//         });
//     }
// };


// exports.getRestaurantsByCity = (req, res) => {
//     const city = req.params.city;

    
//     // Query the database for restaurants that match the city
//     restaurantList.find({ city: { $regex: city, $options: 'i' } })  // This uses case-insensitive regex to match city
//         .then((filteredRestaurants) => {
           

//             if (filteredRestaurants.length > 0) {
//                 res.status(200).json({ restaurantList: filteredRestaurants });
//             } else {
//                 res.status(404).json({
//                     message: "No restaurants found for the provided city"
//                 });
//             }
//         })
//         .catch((error) => {
//             console.error('Error fetching restaurants by city:', error);
//             res.status(500).json({
//                 message: 'Error fetching restaurants',
//                 error: error.message
//             });
//         });
// };
// // exports.getAllMealTypes((req, res) => {
// //     // send back the mealtypes
// // });






const restaurantList = require('../Models/Restaurant'); 
// const mealTypes = require("../Models/mealtypes.json");

exports.getAllRestaurants = (req, res) => {
    restaurantList.find()
        .then((restaurantList) => {
            if (restaurantList && restaurantList.length > 0) {
                res.status(200).json(restaurantList);
            } else {
                res.status(404).json({ message: 'No restaurants found' });
            }
        })
        .catch((error) => {
            console.error('Error fetching restaurants:', error);
            res.status(500).json({ message: 'Error fetching restaurants', error: error.message });
        });
};

exports.getRestaurantById = async (req, res) => {
    const restaurantId = req.params.id;

    if (isNaN(restaurantId)) {
        return res.status(400).json({ message: 'Invalid restaurant ID' });
    }

    try {
        const restaurant = await restaurantList.findOne({ id: parseInt(restaurantId) });

        if (restaurant) {
            res.status(200).json({ restaurant: restaurant });
        } else {
            res.status(404).json({ message: "Restaurant not found" });
        }
    } catch (error) {
        console.error('Error fetching restaurant by ID:', error);
        res.status(500).json({ message: 'Error fetching restaurant by ID', error: error.message });
    }
};

exports.getRestaurantsByCity = (req, res) => {
    const city = req.params.city;

    if (!city || city.trim() === '') {
        return res.status(400).json({ message: 'City parameter is required' });
    }

    restaurantList.find({ city: { $regex: city, $options: 'i' } })
        .then((filteredRestaurants) => {
            if (filteredRestaurants.length > 0) {
                res.status(200).json({ restaurantList: filteredRestaurants });
            } else {
                res.status(404).json({ message: "No restaurants found for the provided city" });
            }
        })
        .catch((error) => {
            console.error('Error fetching restaurants by city:', error);
            res.status(500).json({ message: 'Error fetching restaurants', error: error.message });
        });
};

// Uncomment to add meal types feature later
// exports.getAllMealTypes = (req, res) => {
//     try {
//         res.status(200).json(mealTypes);
//     } catch (error) {
//         console.error('Error fetching meal types:', error);
//         res.status(500).json({
//             message: 'Error fetching meal types',
//             error: error.message
//         });
//     }
// };
