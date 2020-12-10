const axios = require('axios');
const gif_modulo = require('./gif.js')
async function getReceitas({ ingredient_1,ingredient_2 }) {
    
    try {
      const response = await axios.get(`http://www.recipepuppy.com/api/?i='${ingredient_1}',${ingredient_2}`);
      
      return await receitasResposta(response.data.results)
    } catch (error) {
        return {
                'code':300,
                'mensagem':'getReceitas'
            }
    }
}


async function formatReceitas(response) {
    try {
        const receitas = response.map((x)=>{
            return{
                "titulo":x.title,
                "link":x.href,
                "ingredientes":x.ingredients,
                "thumbnail":x.thumbnail,
                "url":""
            }
        })
      return receitas
    } catch (error) {
      return{
        'code':300,
        'error':'formatReceitas', 
      }
    }
}

async function receitasResposta(response) {

    //console.log(unirReceitasGif())

    const q = formatReceitas(response)
    const novo = q.then(x=>{
        return x.map(async w=>{
            return w.url = await gif_modulo.getGif(w.title).then(x=>{
                return x
            })
        })
    })
    return formatReceitas(response)
}


async function unirReceitasGif(response) {
    const gifs = response.map(async (x)=>{
        return await gif_modulo.getGif(x.title)
    })
}

module.exports = {
    getReceitas
};