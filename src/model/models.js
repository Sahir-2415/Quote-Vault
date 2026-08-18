const mongoose=require('mongoose');

const quoteSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    author:{
        type:String
    }
})

const quoteModel=new mongoose.model("quoteModel",quoteSchema);
module.exports=quoteModel;