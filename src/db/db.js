const mongoose=require('mongoose');
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully");
    }catch(err){
        console.log("Mongo DB connection failed : ",err.message);
        process.exit(1);
    }
    
}

module.exports=connectDB;