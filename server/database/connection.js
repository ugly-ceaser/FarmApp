const mongoose = require('mongoose');


const connectDB = async ( )=> {
    try{
        //mongoDb connection string

        const con = await mongoose.connect(process.env.MONGO_URI,{
            //userNewurlParse:true,
             useUnifiedTopology:true 
            //useFindAndModify:false,
            // useCreateIndex:true
        })
        console.log(`MongoDB connected : ${con.connection.host}`);

    }
    catch(err){
            console.log(err);
            process.exit(1);
    }
}


const recordconnectDB = async ( )=> {
    try{
        //mongoDb connection string for records

        const con = await mongoose.connect(process.env.MONGO_URL,{
            //userNewurlParse:true,
             useUnifiedTopology:true 
            //useFindAndModify:false,
            // useCreateIndex:true
        })
        console.log(`MongoDB connected : ${con.connection.host}`);

    }
    catch(err){
            console.log(err);
            process.exit(1);
    }
}

module.exports= connectDB;

module.exports= recordconnectDB;