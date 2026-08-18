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

async function createQuote(req,res){
    try{
        const {text,author}=req.body;
        if(!text){
            return res.status(400).json({
                message:"Quote text is required"
            })
        }
        const newQuote=await quoteModel.create({text,author});
        res.status(201).json(newQuote);
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

async function getRandomQuote(req,res){
    try{
        const quotes=await quoteModel.find();
        if(quotes.length==0){
            return res.status(404).json({
                message:"There are no quotes currently stored."
            })
        }
        const randomIndex=Math.floor(Math.random()*quotes.length);
        const randomQuote=quotes[randomIndex];
        res.json(randomQuote);
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

module.exports={getAllQuote,createQuote,getRandomQuote};