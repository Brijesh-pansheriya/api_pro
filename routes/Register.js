var express = require('express');
const model = require('../Models/Registerschema');
var Router = express.Router();


Router.post('/',async function(req,res,next){
    try{
        data =await model.create(req.body);
        console.log(data)
        res.status(201).json({
            status:'success',
            data
        })
    }
    catch(error){
        console.log(error);
    }
})

module.exports = Router