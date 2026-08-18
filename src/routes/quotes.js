const express=require('express');
const router=express.Router();
const quoteController=require('../controller/quoteController');

router.get('/get-quote',quoteController.getAllQuote);
router.post('/quotes',quoteController.createQuote);
router.get('/random',quoteController.getRandomQuote)
module.exports=router;