const router = require('express').Router();
const Client = require("../models/model")

router.post("/enquiry" , async (req,res)=>{
    try{
        const {name , phone , budget , type , location} = req.body
        const client = new Client({
            name:name,
            phone:phone,
            budget:budget,
            type:type,
            location:location
        })  

        client.save().then(() => {
            return res.status(200).json({
                "Client" : client
            })
        })
    }catch(e){
        return res.status(400).json({
            "Message": e.message
        })
    }
})

router.get("/enquiry" , async (req,res)=>{
    try{
        const Clients = await Client.find()
        return res.status(200).json(Clients)
    }catch(e){
        return res.status(400).json({
            "Message": e.message
        })
    }
})

module.exports = router