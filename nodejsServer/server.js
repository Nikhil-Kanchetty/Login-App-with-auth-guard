const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const APP = express();
APP.use(bodyparser.json());
APP.use(cors());

APP.post("/", (req, res) => {

    let username = req.body.userName;
    let password = req.body.password;

    //add two more variables to store the username and password got from registration or database.

    console.log( "The username and password recieved are :" )
    console.log( username, password );

    //compare the values of the database and the values from the request
    if(username == "nikhil" && password == "kanchetty"){
        res.json({message: "Admin access granted", success: true });
    } else {
        res.json({message: "Access denied due to invalid credentials", success: false });
    }

});

APP.listen(1234, ()=>{
    console.log('Server is listining on port 1234');
});