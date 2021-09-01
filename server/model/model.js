const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    batchSpecie:{
        type: String,
        required: true
    },
    batchSource:{
        type: String,
        reqiured: true
    },
    sourceContact:{
        type: String,
        reqiured: true
    },
    numberOfBirds:{
        type: Number,
        required:true
    },

    batchArrivalDate:{
        type:Date,
        reqiured:true,
        unique:true
    }

})

const BatchDb = mongoose.model('FarmDB',schema);

module.exports = BatchDb;