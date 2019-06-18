const { Router } = require("express");
const router = Router();

const { getPokemonById, getSpriteById } = require("../services/pokemon.js");

router.get("/:id/sprite", (req, res, next) =>
  getSpriteById(req.params.id, req.query.shiny)
    .then(img => res.status(200).json({ img }))
    .catch(err => console.log(err))
);
router.get("/:id", (req, res, next) =>
  getPokemonById(req.params.id)
    .then(pokemon => res.status(200).json(pokemon))
    .catch(err => console.log(err))
);

module.exports = router;
