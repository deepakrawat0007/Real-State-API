const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Model = new Schema({
    name:{type:String},
    phone:{type:Number},
    budget:{type:String},
    type:{type:String},
    location:{type:String}
},{timestamps:true})

const Client = mongoose.model("clients",Model)

module.exports = Client