const express=require("express")
const { JobModel } = require("../models/Jobs.model")

const JobRouter=express.Router()

JobRouter.get("/",async(req,res)=>{
    let query=req.query
    try{
        const job=await JobModel.find(query)
        res.send(job)
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
})

JobRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
        await JobModel.findByIdAndDelete({"_id":id})
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
})

JobRouter.post("/post",async(req,res)=>{
    const payload=req.body
    try{
        const new_job= new JobModel(payload)
        await new_job.save()
        res.send({"msg":"Posted new Job"})
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
})
module.exports={JobRouter}