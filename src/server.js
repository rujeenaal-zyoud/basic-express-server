'use strict';
//Basic import 
const express = require('express');
// my server app
const app = express();
// import the modules from anthare file

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');


//Global Middleware 
//Here use for using the midleware function 

app.use(express.json())

//The express.urlencoded() function is a built-in middleware function in Express.
// It parses incoming requests with urlencoded payloads and is based on body-parser.
// 
//Return Value: It returns an Object.
//NOTE: here i put the logger here because i want to useit in anthare file under app server when export
app.use(express.urlencoded({ extended: true }))
app.use(logger);



//routes person 
//localhost:3003/person?name=Rujeena

app.get('/person',validator,(req,res)=>{
// the yourName it just json parametre
//the query . name it's depend in URL query that we have  named
const output = {
    yourName:req.query.name
} 

   res.json(output)
})


app.get('/bad',(req,res)=>{
    throw new Error('Error');
  })

  

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT) {
    app.listen(PORT, () => console.log(`this is port ${PORT}`));

}




//exports the modules
module.exports = {
    app: app,
    start: start,
}









