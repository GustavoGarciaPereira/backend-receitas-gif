const axios = require('axios');

async function getReceitas({ ingredient_1,ingredient_2 }) {
    
    try {
      const response = await axios.get(`http://www.recipepuppy.com/api/?i='${ingredient_1}',${ingredient_2}`);
      return await formatReceitas(response.data.results)
    } catch (error) {
        return {
                'code':300,
                'mensagem':3
            }
    }
}

async function formatReceitas(response) {
    try {
        const receitas_form = response.map((x)=>{
            return{
                "titulo":x.title,
                "link":x.href,
                "ingredientes":x.ingredients,
                "thumbnail":x.thumbnail
            }
        })
      return receitas_form
    } catch (error) {
      return{
        'code':300,
        'error':'formatReceitas', 
      }
    }
}

module.exports = {
    getReceitas
};