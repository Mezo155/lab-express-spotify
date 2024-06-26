const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controller")
const artistController = require("../controllers/artist.controller")
const albumController = require("../controllers/album.controllers")
const tracksController = require("../controllers/traks.controller")

router.get("/", homeController.getHome);
router.get("/artist-search", artistController.searchArtist);
router.get('/albums/:artistId', albumController.getAlbums);
router.get("/albums/:tracksId/tracks", tracksController.getTracks)

module.exports = router;