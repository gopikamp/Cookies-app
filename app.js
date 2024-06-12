const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { cookiemodel } = require("./models/cookie")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://gopikamp:Gopika2002@cluster0.75vbtwq.mongodb.net/cookieDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let cookie = new cookiemodel(input)
    cookie.save()
    res.json({"status":"success"})
})
app.post("/search",(req,res)=>{
    let input = req.body
    cookiemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8000, ()=>{
    console.log("Server Started")
})