const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
app.use(express.json())
require("dotenv").config()

const auth = (req,res,next)=>{

    const token = req.headers.authorization;

    try {
        var decoded = jwt.verify(token, process.env.secretKey);
        if(req.body.userID = decoded.userID){
          
          return  next()
        }else{
          res.status(400).send({msg:"Login required...!"})
        }
        
      } catch(err) {

        res.send(err.message)
        
      }

}

module.exports = {
    auth
}