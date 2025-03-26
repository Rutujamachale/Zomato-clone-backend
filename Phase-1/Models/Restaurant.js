const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({

    id:{
        type: Number,
        required: true,
        unique:true,
    },

    restaurant:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    city:{
        type:String,
        required: true
    },

    description:{
        type:String,
        required:true
    },

    img:{
        type:String,
        required:true
    }

});
const Restaurant = mongoose.model('Restaurant', RestaurantSchema, 'Restaurant');
module.exports=Restaurant;