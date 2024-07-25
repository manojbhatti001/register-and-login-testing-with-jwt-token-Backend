const mongoose = require("mongoose");


const DB_URI = process.env.DB_URI;



const dbConnection = async()=> {
    const connect = await mongoose.connect(DB_URI).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((error)=> {
        console.log("Error connecting to MongoDB:",error)
    })
}

module.exports = dbConnection
