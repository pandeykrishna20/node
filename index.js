// require express
const express = require('express');

//create app
const app = express();

// create port
const port = 8000;


// initialize app listen

app.listen(port , function(err){
    if(err){
        console .log('Error aquire during running server: ${err}');
    }
    console.log('website is running well so enjoy it****:', port);

});