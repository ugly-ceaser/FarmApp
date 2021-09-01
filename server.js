const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')

const app = express();


dotenv.config({path:'config.env'});
const PORT = process.env.PORT||8080

//log requests

app.use(morgan('tiny'));

//mongoDb connection

connectDB();


//parse request to bodyParser

app.use(bodyParser.urlencoded({ extended:true}))


//set veiw engine 

app.set("view engine","ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))


//load asserts
app.use('/css', express.static(path.resolve(__dirname, "assert/css")))
app.use('/img', express.static(path.resolve(__dirname, "assert/img")))
app.use('/js', express.static(path.resolve(__dirname, "assert/js")))




//load router

app.use('/', require('./server/routes/router'))


app.listen(PORT,() =>{
    console.log('listening on http://localhost:${PORT}')
})