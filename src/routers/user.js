const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.post('/users',async (req, res)=>{
    //console.log('Post Users')
    const user=new User(req.body)
    //console.log(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }    
})

router.get('/users',async (req, res)=>{
    //console.log('Get Users')
    const users=await User.find()
    res.status(200).send(users)
})

router.patch('/users',async (req, res)=>{
    //console.log('Put Users')
    const user=await User.findOne({_id : req.body._id})
    
    if(!user){
        return res.status(400).send({error:"User not found!!!"})
    }
    const allowedUpdates=["name","email","age","password"]
    const keys=Object.keys(req.body)        // _id, name
    
    try{
        keys.forEach(key => user[key]=req.body[key])        
        await user.save()
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users',async (req, res)=>{
    //console.log('Delete Users')
    const user=await User.findOne({_id : req.body._id})
    if(!user){
        return res.status(400).send({error:"User not found!!!"})
    }
    try{
        await user.remove()
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
    
})

module.exports = router