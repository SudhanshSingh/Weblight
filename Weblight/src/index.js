const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const route = require('./routes/route');
const mongoose = require('mongoose');
const app = express();

app.use(multer().any())

app.use(bodyParser.json()); 


mongoose.connect("mongodb+srv://Sudhanshu_09:5JQhJtJ5mUWQIBwo@cluster0.kt4fu.mongodb.net/Weblight", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});