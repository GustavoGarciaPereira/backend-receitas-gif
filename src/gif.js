const axios = require('axios');


async function getGif(palavra_chave) {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIF_API}&q=${palavra_chave}&limit=1&offset=0&rating=g&lang=en`
      const response = await axios.get(url);
      const o = response.data.data.map(async(x)=>{
          return x.images.original.url
      })
      return await o
    } catch (error) {
      console.error(error);
    }
}

module.exports = {
    getGif
}