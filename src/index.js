const express = require('express')

const core = require('./core.js')
const receita  = require('./receitas.js');
const gif = require('./gif.js');

require('dotenv').config()

const app = express();

app.get('/', async(req,res)=>{
    
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <img src="https://56e9af4bb89f1d73465cbd39.static-01.com/l/images/71e43d1c3c5d4fcbefa1e1c71d31cf6f1aa3337c.jpg">
    </body>
    </html>
    `)
})
app.get('/:ingredient_1/:ingredient_2', async(req,res)=>{
    res.status(200).json(await core.core(req.params))
})

app.listen(process.env.PORT_API,()=>{
    console.log("ouvindo")
})