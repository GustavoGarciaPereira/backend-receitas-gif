const axios = require('axios');


async function getGif() {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIF_API}&q=onion&limit=25&offset=0&rating=g&lang=en`
      const response = await axios.get(url);
      return response.data.data
    } catch (error) {
      console.error(error);
    }
}

module.exports = {
    getGif
}