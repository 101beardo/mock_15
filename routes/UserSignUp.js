const express=require("express")
const bcrypt=require("bcrypt")
const { UserModel } = require("../models/User.model")

const UserSignUpRouter=express.Router()

UserSignUpRouter.post("/",async(req,res)=>{
    const {name,email,password}=req.body
    try{
        bcrypt.hash(password, 5, async(err,secure_password)=>{
            if(err){
                console.log(err)
            }else{
                const user=new UserModel({name,email,password:secure_password})
                await user.save()
                res.send("Registered Successfully")
            }
        })
    }catch(err){
        console.log(err)
        console.log("Something went wrong")
    }
})
module.exports={UserSignUpRouter}