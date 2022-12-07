//Weather



//-----------------------------------------------------------------------------
//Map

let mapOptions = {
  center:[36.0338, 14.256],
  zoom:14
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}title.openstreetmap.org/{z}/{x}/{y}.png')
map.addLayer(layer);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

//Popups

L.marker([36.0317,14.2610]).addTo(map)
    .bindPopup('Rotunda of Xewkija')
    .openPopup();

L.marker([36.0359,14.2603]).addTo(map)
    .bindPopup('Tat-Tmien Kantunieri Windmill')
    .openPopup();

L.marker([36.0359,14.2603]).addTo(map)
    .bindPopup('Tat-Tmien Kantunieri Windmill')
    .openPopup();

L.marker([36.0383,14.2562]).addTo(map)
    .bindPopup('Gozo Stadium')
    .openPopup();

L.marker([36.0204,14.2708]).addTo(map)
    .bindPopup('Mġarr ix-Xini')
    .openPopup();

L.marker([36.0283,14.2562]).addTo(map)
    .bindPopup('Curt Ruts')
    .openPopup();

L.marker([36.0290,14.2741]).addTo(map)
    .bindPopup('Santa Ċeċilia Tower')
    .openPopup();

L.marker([36.03256,14.26786]).addTo(map)
    .bindPopup('Madonna Tal-Ħniena Chapel')
    .openPopup();

L.marker([36.0389,14.2686]).addTo(map)
    .bindPopup('Gozo Horse Track')
    .openPopup();

L.marker([36.04037,14.26579]).addTo(map)
    .bindPopup('Madonna tal-Karmnu Chapel')
    .openPopup();

L.marker([36.0338, 14.256]).addTo(map)
    .bindPopup('Xewkija')
    .openPopup();

//------------------------------------------------------------------------------
