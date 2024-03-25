const spotifyApi = require ("../config/spotifySetup")

module.exports.getTracks = (req, res, next) => {
const {tracksId} = req.params;

spotifyApi
.getAlbumTracks(tracksId)
.then(data => {
      // Por como funciona la librería, data.body, es donde esta la respuesta
console.log('The received data from the API: ', data.body);

// Ejemplo para ver como es cada uno de los artistas
console.log(data.body.items);

      //Renderizamos la vista y le pasamos los items de los artistas que encuentra
res.render('tracks', { tracks: data.body.items});
})
.catch(err => console.log('The error while searching artists occurred: ', err)); }