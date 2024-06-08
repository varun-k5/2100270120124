const express=require('express')

const app=express()
const port=3000

const bodyParser = require('body-parser')
app.use(bodyParser.json());

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
const numbersDict = {}
app.post('/numbers/:numberid', (req, res) => {
    const numberID = req.params.numberid
    const { number } = req.body

    if (typeof number !== 'number') {
        return res.status(400).json({ error:'Invalid'})
    }

    if (!numbersDict[numberID]) {
        numbersDict[numberID] = []
    }

    numbersDict[numberID].push(number)
})



app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})