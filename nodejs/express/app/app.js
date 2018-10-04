var express = require('express');
var app= express();



app.get('/index',function(req,req,next){

    req.data =123;
    next();
},function(req,req,next){

    res.send(req.data);
});

app.get('/index/:id',function(req,req,next){
    res.json({
        data : req.id
    });
    
});

