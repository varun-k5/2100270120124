const express=require('express')

const app=express()
const port=3000
app.post('/test/register',async(req,res)=>{
    try{
        res.send()
    }catch(e){
        res.send(e)
    }
})


app.post('/test/auth',async(req,res)=>{
    try{
        res.status(200).send()
    }catch(e){
        res.send(e)
    }
})


app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})