const express = require('express');
const mongoose = require ("mongoose");

const routes = require('./Phase-1/Routes/index');

const app = express();

const port = 5401;


// CORS issue will be solved // manual cors issue fixing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // http://localhost:3000
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
});

//npm i cors
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
    next();
});

//npm i cors
app.use('/',routes);


mongoose.connect(
    'mongodb://127.0.0.1:27017/local',  // Specify your database name here
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(success => {
    console.log("✅ MongoDB Connected Successfully");

    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });

}).catch(error => {
    console.log("❌ MongoDB Connection Error: " + error);
});




// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// });