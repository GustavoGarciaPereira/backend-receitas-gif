const receita  = require('./receitas.js');
const gif = require('./gif.js');


async function core(params) {
    const lista =  await receita.getReceitas(params)
    
    return lista
}

module.exports = {
    core
}