const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = 8003

app.get('/', (req, res)=>{
    console.log("HEIII")
})

app.listen(PORT, ()=>{
    console.log("Server on port: ", PORT)
})

