const axios = require('axios');




exports.homeRoutes = (req,res)=>{
    //make a get request to the batch api

    axios.get('http://localhost:3000/api/batch')
    .then(function(response){

       // console.log(response.data);
        res.render('index',{batch:response.data});
    }).catch(err=>{
        res.send(err)
    })
    
}


exports.addRoutes = (req,res)=>{
    res.render("add_batch");
}


exports.updateRoutes = (req,res)=>{
    res.render("update_batch");
}

