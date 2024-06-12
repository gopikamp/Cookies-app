const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "price":{type:String,required:true},
        "quantity":{type:String,required:true},
        "category":{type:String,required:true},
        "description":{type:String,required:true},
        "image":{type:String,required:true},
    }
)

let cookiemodel = mongoose.model("cookies",schema)
module.exports = {cookiemodel}