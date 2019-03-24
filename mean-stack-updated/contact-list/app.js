//Importing Modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


//Using express Method

var app = express();

const route = require('./routes/route')

//Connecting DB

mongoose.connect('mongodb://database/contactlist');

//On Connection

mongoose.connection.on('connected',()=>{
     console.log('Connected to database mongodb');
});

mongoose.connection.on('error',(err)=>{
     if(err)
     {
      console.log('Error in Database Connection'+err);
     }  
});

//Bind Port

const port = 3000;

//adding middleware

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.get('/',(req, res)=>{
     res.send('Welcome');
});

app.listen(port,() => {
   console.log('App Works!:'+port);
});
