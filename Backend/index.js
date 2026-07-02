import express from 'express';
import mongoose from 'mongoose';
import dns from "node:dns";
import userRouter from './routers/userRouter.js';
import authenticate from './middlewears/authenticate.js';
import productRouter from './routers/productRouter.js';
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const mongoDBURI = "mongodb+srv://admin:123@cluster0.3gv4xqh.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoDBURI).then(
    ()=> {
        console.log("mongoDB connected successfully")
    }
).catch((err)=>{
    console.log("mongoDB connection error: " + err)
}) //connect to the database

const app = express()

app.use(express.json()) //middleware 

app.use(authenticate)


app.use("/users", userRouter)

app.use("/products", productRouter)



app.listen(
    3000,

    ()=> console.log('server is running')
 )