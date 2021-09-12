const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    key:{
        type:String
    },
    dead:{
        type:Number
    },
    sold:{
        type:Number
    },
    symptoms:{
        type:String
    },
    mediction:{
        type:String
    },
    recorddate:{
        type:Date
    }


})

const RecordDb = mongoose.model('recordDB',schema);

module.exports =RecordDb;