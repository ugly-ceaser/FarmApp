   let BatchDb = require('../model/model');
   let RecordDb = require('../model/recordModel');


   //create and save new batch


   exports.create = (req,res) =>{
       //validate request
       if(!req.body){
           res.status(400).send({message:"Content can not be empty"});
           return;
       }

       // new batch

       const batch = new BatchDb({
        batchSpecie:req.body.batchSpecie,
        batchSource:req.body.batchSource,
        sourceContact:req.body.sourceContact,
        numberOfBirds:req.body.numberOfBirds,
        batchArrivalDate:req.body.batchArrivalDate,
        status:req.body.status
       })

    //    save batch in the database

    batch
        .save(batch)
        .then(data=>{
            //res.send(data)
            res.redirect('/create-batch')
        })
        .catch(err => {
            res.status(500).send({
                message:err.message ||"Some error occured while creating the create operation"
            });
        });

   }


   //retrieve and return all batch/ retrieve and return a single batch

   exports.find = (req,res) =>{ 
       const id = req.query.id;
       
    if(req.query.id){
     BatchDb.findById(id)
        .then(data=>{

            if(!data){
                res.status(404).send({
                    message:"data does not exist"
                })
            }else{  
                res.send(data)
            }
            
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "some error occured while retreiving  single batch data  "
            })
        })
    

    }else{
        BatchDb.find()
        .then(batch=>{
            res.send(batch)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "some error occured while retreiving all batch data  "
            })
        })

    }
      

   }

   //update a new identified batch by batch id

   exports.update = (req,res) =>{
       if(!req.body){
           res.status(400).send({message:" the batch to update can not be empty"})
       }
        const id = req.params.id;
        BatchDb.findByIdAndUpdate(id)
        .then(data => {
            if(!data){
                res.status(404).send({message:"data does not exits in the database"})
            }else{
            res.send({
                message:"batch was updated successfully"
            })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "some error occurede while retrieving data"
            })
        })

   }

   // to be implimented later
   //delete a user with specified batch id in the request

   exports.delete = (req,res) =>{
       if(!body){
           res.status(500).send({message:"id must be specified"})
       }
       const id = req.params.id;

       BatchDb.findByIdAndDelete(id)
       .then(data => {
           if(!data){
               res.status(404).send({message:"data can not be found"})
           }else{
               res.send({
                   message:"Batch deleted successfully"
               })
           }

       })
       .catch(err => {
           res.status(500).send({
               message: err.message || "error performing the operation"
           })
       })

}

// record sections

exports.createRecord = (req,res) =>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    // new batch

    const record = new RecordDb({
     key:req.body.key,
     dead:req.body.dead,
     sold:req.body.sold,
     symptoms:req.body.symptoms,
     medication:req.body.medication,
     recorddate:req.body. recorddate,
     status:req.body.status
    })

 //    save batch in the database

 record
     .save(record)
     .then(data=>{
         //res.send(data)
         res.redirect('/record-batch')
     })
     .catch(err => {
         res.status(500).send({
             message:err.message ||"Some error occured while creating the create operation"
         });
     });

}

exports.recordfind = (req,res) =>{ 
    const id = req.query.id;
    
 if(req.query.id){
  RecordDb.findById(id)
     .then(data=>{

         if(!data){
             res.status(404).send({
                 message:"data does not exist"
             })
         }else{  
             res.send(data)
         }
         
     })
     .catch(err=>{
         res.status(500).send({
             message:err.message || "some error occured while retreiving  single batch data  "
         })
     })
 

 }else{
     RecordDb.find()
     .then(record=>{
         res.send(record)
     })
     .catch(err=>{
         res.status(500).send({
             message:err.message || "some error occured while retreiving all batch data  "
         })
     })

 }
   

}

exports.updateRecord = (req,res) =>{
    if(!req.body){
        res.status(400).send({message:" the record to update can not be empty"})
    }
     const id = req.params.id;
     RecordDb.findByIdAndUpdate(id)
     .then(data => {
         if(!data){
             res.status(404).send({message:"record does not exits in the database"})
         }else{
         res.send({
             message:"tecord was updated successfully"
         })
         }
     })
     .catch(err =>{
         res.status(500).send({
             message:err.message || "some error occurede while retrieving data"
         })
     })

}

exports.deleteRecord = (req,res) =>{
    if(!body){
        res.status(500).send({message:"id must be specified"})
    }
    const id = req.params.id;

    RecordDb.findByIdAndDelete(id)
    .then(data => { 
        if(!data){
            res.status(404).send({message:"data can not be found"})
        }else{
            res.send({
                message:"Batch deleted successfully"
            })
        }

    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "error performing the operation"
        })
    })

}
