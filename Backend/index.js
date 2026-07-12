import express from 'express';
import mongoose from 'mongoose';
import dns from "node:dns";
import userRouter from './routers/userRouter.js';
import authenticate from './middlewears/authenticate.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv'
import cors from "cors"
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config()

const mongoDBURI = process.env.MONGO_URI

mongoose.connect(mongoDBURI).then(  
    ()=> {
        console.log("mongoDB connected successfully")
    }
).catch((err)=>{
    console.log("mongoDB connection error: " + err)
}) //connect to the database

const app = express()

app.use(cors())

app.use(express.json()) //middleware 

app.use(authenticate)


app.use("/api/users", userRouter)

app.use("/api/products", productRouter)



app.listen(
    3000,

    ()=> console.log('server is running')
 )