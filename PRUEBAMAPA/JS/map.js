let mapOptions = {
    center:[4.61664, -74.06782],
    zoom: 10
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);

// let marker = new L.Marker([4.6535, -74.0833]);
// marker.addTo(map);

let marker = L.marker([4.61664, -74.06782]).addTo(map)

// let iconMarker = L.icon({
//     iconUrl:'iconcarro.jpg',
//     iconSize: [60, 60],
//     iconAnchor:[30,60]
// })

let marker2 = L.marker([4.61664, -74.06782]).addto(map)

map.on('dblclick', e =>{
    let latLng = map.mouseEveNtToLatLng(e.originalEvent)
    console.log (latLng)
})