const express= require("express")
const {route}=require("express/lib/application")
const routes =express.Router()
const details= require("../models/detail")
const sliders =require("../models/slider")
const pets=require("../models/pets")

routes.get("/me",async(request,response)=>{
    const navbardetails=await details.findOne({"_id":"647d56860ca9815e4fdb138d"})
    const slider=await sliders.find()
    const petdetail=await pets.find()
    response.render("index",{navbardetails:navbardetails,slider:slider,petdetail:petdetail})
})
routes.get("/gallery",async(request,response)=>
{
    const slider=await sliders.find()
    const petdetail=await pets.find()
    const navbardetails=await details.findOne({"_id":"647d56860ca9815e4fdb138d"})
    response.render("gallery",{navbardetails:navbardetails,slider:slider,petdetail:petdetail})
})
module.exports=routes