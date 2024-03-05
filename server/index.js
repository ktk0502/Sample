const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const SampleModel = require('./models/Sample_Project')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Sample_Project")

app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    SampleModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Sucess")
            }
            else{
                req.json("Wrong Password")
            }
        }
        else{
            res.json("No such record exists")
        }
    })
})

app.post('/register',(req,res)=>{
    SampleModel.create(req.body)
    .then(Sample_Project => res.json(Sample_Project))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})