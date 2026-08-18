const express=require('express');
const app=express();
const quotes=require('./src/routes/quotes');
app.use(express.json());

app.use('/api',quotes);
module.exports=app;