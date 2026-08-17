const quoteModel=require('../model/models');

async function getAllQuote(req,res){
    try{
        const quotes=await quoteModel.find();
        res.json(quotes);
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}

module.exports={getAllQuote};