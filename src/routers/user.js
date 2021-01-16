const express = require('express')

const router = new express.Router()

router.post('/users',(req, res)=>{
    console.log('Post Users')
    console.log(req.body)
    res.send(req.body)
})

router.get('/users',(req, res)=>{
    console.log('Get Users')
    res.send()
})

router.put('/users',(req, res)=>{
    console.log('Put Users')
    res.send()
})

router.delete('/users',(req, res)=>{
    console.log('Delete Users')
    res.send()
})

module.exports = router