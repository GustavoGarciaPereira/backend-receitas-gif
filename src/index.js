const express = require('express')
const axios = require('axios');

//require('dotenv').config()

const app = express();
app.get('/', async(req,res)=>{
    res.status(200).json(await formatReceitas())
})

/**
 {
    title: 'Garlicky Mushroom Masala Omelet',
    href: 'http://www.recipezaar.com/Garlicky-Mushroom-Masala-Omelet-306233',
    ingredients: 'tomato, cilantro, eggs, ginger, garlic, green chilies, mushroom, mustard seed, black pepper, salt, green onion, vegetable oil',
    thumbnail: 'http://img.recipepuppy.com/215908.jpg'
  },

 */

async function formatReceitas() {
    try {
        const receitas = await getReceitas()

        const receitas_form = receitas.map((x)=>{
            return{
                "titulo":x.title,
                "link":x.href,
                "ingredientes":x.ingredients,
                "thumbnail":x.thumbnail
            }
        })
      return receitas_form
    } catch (error) {
      console.error(error);
    }
}

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