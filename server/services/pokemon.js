const POKEMON_API = "https://pokeapi.co/api/v2";
const axios = require("axios");

module.exports.getPokemonById = id =>
  axios.get(`${POKEMON_API}/pokemon/${id}`).then(({ data }) => {
    let { id, name, sprites } = data;
    return {
      id,
      name,
      sprites: { default: sprites.front_default, shiny: sprites.front_shiny }
    };
  });

module.exports.getSpriteById = (id, shiny) =>
  this.getPokemonById(id).then(({ sprites }) =>
    shiny ? sprites.shiny : sprites.default
  );
