const mongoose=require("mongoose")

const JobSchema=mongoose.Schema({
    name:String,
    position:String,
    contract:String,
    location:String
})

const JobModel=mongoose.model("job",JobSchema)

module.exports={JobModel}
