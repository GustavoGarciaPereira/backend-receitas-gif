const express = require('express')
const axios = require('axios');

//require('dotenv').config()

const app = express();
app.get('/:ingredient_1/:ingredient_2', async(req,res)=>{
    console.log(req.params['ingredient_1'])
    console.log(req.params['ingredient_2'])
    
    res.status(200).json(await formatReceitas(req.params['ingredient_1'],req.params['ingredient_2']))
})

/**
 {
    title: 'Garlicky Mushroom Masala Omelet',
    href: 'http://www.recipezaar.com/Garlicky-Mushroom-Masala-Omelet-306233',
    ingredients: 'tomato, cilantro, eggs, ginger, garlic, green chilies, mushroom, mustard seed, black pepper, salt, green onion, vegetable oil',
    thumbnail: 'http://img.recipepuppy.com/215908.jpg'
  },

 */

async function formatReceitas(pri,segun) {
    try {
        const receitas = await getReceitas(pri,segun)

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

async function getReceitas(pri,segun) {
    try {
      const response = await axios.get(`http://www.recipepuppy.com/api/?i='${pri}',${segun}`);
      return response.data.results
    } catch (error) {
      console.error(error);
    }
}

app.listen('3001',()=>{
    console.log("ouvindo")
})