import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export async function createUser(req, res) {

    try{
        const user = await User.findOne({email : req.body.email})

        if(user != null){
            res.json({message : "User already exists"})
            return
        }
        // create user
        // const newUser = new User(req.body) ->NOT SECURE

        const passwordHash = bcrypt.hashSync(req.body.password, 10) //number indicateds how many salting rounds are performed
        console.log(passwordHash)

        const newUser = new User({
            email : req.body.email,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            password : passwordHash
        })

        await newUser.save()

        res.json({message : "User created successfully"})



    }catch(err){
        res.json({message : err.message})
    }
}


export async function loginUser(req, res) {
    try{

        const email = req.body.email
        const password = req.body.password

        // check the email and password are null
        if(email == null || password == null){
            res.status(400).json({message : "email and password are required!"})
            return 
        }

        // finding the user if the email and password are present
        const user = await User.findOne({email : email})

        // check the user is present in the database or not
        if (user == null){
            res.status(404).json({message : "user not found!"})
            return
        }
        // compare the password
        const isPasswordValid = bcrypt.compareSync(password, user.password)

        if(isPasswordValid){
            const token = jwt.sign({
                email : user.email,
                firstName : user.firstName,
                lastName : user.lastName,
                isAdmin : user.isAdmin,
                isBlocked:  user.isBlocked,
                isEmailVerified: user.isEmailVerified,
                image: user.image
            },
            process.env.JWT_KEY // this is the token key
        )
        res.json({message : "Login successful", token : token})
        console.log(token)

        }else{
            res.status(401).json({message : "err.message"})
        }



    }catch(err){
        res.json({message : err.message})
    }
    
}