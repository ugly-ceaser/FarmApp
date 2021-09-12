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

    axios.get('http://localhost:3000/api/batch',{params:{id:req.query.id}})
    .then((response) =>{

        res.render("update_batch",{batch:response.data});


    })
    .catch(err =>{
        res.send(err)
    })


    
    
}

exports.BatcRecordRoutes = (req,res)=>{

    let bactchresp; 
    let recordresp;
    
    axios.get('http://localhost:3000/api/record',{params:req.query.key})
    .then((res)=>{
        batchresp = res
        return res
    })
    

    axios.get('http://localhost:3000/api/batch',{params:{id:req.query.id}})

    .then((response) =>{
        batchresp = response;
        return response




    })

    
    .catch(err =>{
        res.send(err)
    })
     
    let newData = {res, resp} 

    console.log(newData);

    res.render("batch_record", {record:newData.data});

  


    
    
}

exports.addRecordRoutes = (req,res)=>{

    axios.get('http://localhost:3000/api/batch',{params:{id:req.query.id}})
    .then((response) =>{

        res.render("add_record",{batch:response.data});


    })
    .catch(err =>{
        res.send(err)
    })


    
    
}

