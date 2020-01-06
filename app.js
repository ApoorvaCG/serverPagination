const express = require("express");
const routes = require("./main");
const port = 5000;
const app = express();

app.use('/api',routes);

app.listen(port,(req,res)=>{
    console.log(`Server up and running at ${port}`);    
})