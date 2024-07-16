const mongoose = require("mongoose");


const DB_URI = ("mongodb://localhost:27017/backend")



const dbConnection = async()=> {
    const connecti = await mongoose.connect(DB_URI).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((error)=> {
        console.log("Error connecting to MongoDB:",error)
    })
}

module.exports = dbConnection
