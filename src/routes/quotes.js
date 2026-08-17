const express=require('express');
const router=express.Router();
const quoteController=require('../controller/quoteController');

router.get('/get-quote',quoteController.getAllQuote);

module.exports=router;