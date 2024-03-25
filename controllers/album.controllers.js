const spotifyApi = require ("../config/spotifySetup")

module.exports.getAlbums = (req, res, next) => {
const {artistId} = req.params;

spotifyApi
.getArtistAlbums(artistId)
.then(data => {
      // Por como funciona la librería, data.body, es donde esta la respuesta
console.log('The received data from the API: ', data.body);

      // Ejemplo para ver como es cada uno de los artistas
console.log(data.body.items);

      //Renderizamos la vista y le pasamos los items de los artistas que encuentra
res.render('album', { albums: data.body.items});
})
.catch(err => console.log('The error while searching artists occurred: ', err)); }