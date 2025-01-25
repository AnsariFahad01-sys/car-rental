const mongoose = require('mongoose');
const { snapshot } = require('node:test');

// Function to connect to MongoDB
function connectDB() {
    mongoose.connect ('mongodb+srv://blvckvn7:6181416961@cluster0.dck1f.mongodb.net/',{ useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection
    connection.on('connected',()=>{
        console.log('monngodb is connection successfully')
    })
    connection.on('error',()=>{
        console.log("error in connection")
    })
}
// Call the function to connect to MongoDB
connectDB();

// Export mongoose for use in other modules
module.exports = mongoose;
