const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appName=MongoDB%25Compass&tls=false directConnection=true";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("conected mongo successfully");
    })
}
module.exports = connectToMongo;

