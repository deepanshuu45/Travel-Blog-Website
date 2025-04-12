import express from 'express';
import mongoose from 'mongoose';

const app=express();
app.get('/',(req,res)=>{
    res.json({message:"Hello from the server!"});
});
mongoose.connect('mongodb://localhost:27017/',{
    dbName:'test',
}).then(()=>{
    console.log("MongoDB connected successfully!");
}).catch((err)=>{
    console.error("MongoDB connection error:", err);
})

const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})