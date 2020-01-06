const express = require("express");
const User = require('./mongo');
let routes = express.Router();

var response = {};

routes.get('/users',(req,res)=>{
    let size = parseInt(req.query.size);
    let pageNo = parseInt(req.query.pageNo);
    let query = {};

    if(pageNo < 0 || pageNo === 0){
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response)
    }
    query.skip = size *(pageNo - 1)
    query.limit = size;
    query.sort;
    User.find({},{},query,function(err,data){
        if(err){
            response = {"error" : true,"message" : "Error fetching data"};
        }else{
            response = {"error" : false,"message" : data};
        }
        return res.json(response);
    })

});

module.exports = routes;