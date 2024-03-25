const spotifyApi = require ("../config/spotifySetup")

module.exports.searchArtist = (req, res, next) => {
const {artist} = req.query;

spotifyApi
.searchArtists(artist)
.then(data => {
      // Por como funciona la librería, data.body, es donde esta la respuesta
console.log('The received data from the API: ', data.body);

      // Ejemplo para ver como es cada uno de los artistas
console.log(data.body.artists.items[0]);

      //Renderizamos la vista y le pasamos los items de los artistas que encuentra
res.render('artist', { artist: data.body.artists.items });
})
.catch(err => console.log('The error while searching artists occurred: ', err));
}