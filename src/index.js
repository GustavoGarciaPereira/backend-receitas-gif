const express = require('express')
const axios = require('axios');
 
//const fetch = require('node-fetch');
//var request = require('request-promise');
//require('dotenv').config()

const app = express();
app.get('/', async(req,res)=>{
    console.log("gustavo get")
    res.status(200).json(await getReceitas())
})

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getReceitas() {
    try {
      const response = await axios.get('http://www.recipepuppy.com/api/?i=tomato,onion&q=omelet&p=3');
      return response.data.results
    } catch (error) {
      console.error(error);
    }
  }

app.listen('3001',()=>{
    console.log("ouvindo")
})