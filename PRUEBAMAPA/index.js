import "leaflet-search";
import "leaflet-search/dist/leaflet-search.min.css";
import data from "./data";

// Set Up Map
var mapOptions = {
  center: data[0].loc,
  zoom: 9
};
var map = L.map("leafletMapid", mapOptions);
var baselayer = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri",
    maxZoom: 18
  }
);
baselayer.addTo(map);

// Create layer groups
var markersLayer = new L.LayerGroup(); //layer contain searched elements
var resultsLayer = L.featureGroup();

map.addLayer(markersLayer);
map.addLayer(resultsLayer);

// Create array to hold potential results
const results = [];

// Create search control
var controlSearch = new L.Control.Search({
  position: "topleft",
  layer: markersLayer,
  initial: false,
  zoom: 12,
  marker: false,
  tipAutoSubmit: false,
  // hijack buildtip function, push results to array
  buildTip: (text, loc) => {
    results.push({ loc, text });
    const tip = L.DomUtil.create("div");
    tip.innerHTML = text;
    L.DomEvent.disableClickPropagation(tip)
      .on(tip, "click", L.DomEvent.stop, controlSearch)
      .on(
        tip,
        "click",
        function (e) {
          controlSearch._input.value = text;
          controlSearch._handleAutoresize();
          controlSearch._input.focus();
          controlSearch._hideTooltip();
          controlSearch._handleSubmit();
        },
        controlSearch
      );
    console.log(results);
    return tip;
  },
  moveToLocation: results.length
    ? () => {}
    : L.Control.Search._defaultMoveToLocation
});

map.addControl(controlSearch);

const getFullItem = (latlng, title) => {
  return data.find((item) => title === item.title && latlng.equals(item.loc));
};

data.forEach((item) => {
  const marker = new L.Marker(new L.latLng(item.loc), { title: item.title }); //se property searched
  marker.bindPopup("title: " + item.title);
  markersLayer.addLayer(marker);
});

// Grab the input element and add an event listener to it
const inputEl = document.querySelector("input.search-input");

inputEl.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && results.length) {
    console.log(results);
    markersLayer.remove();
    results.forEach((result) => {
      // const fullItem = getFullItem(result.loc, result.text);
      const marker = L.marker(result.loc);
      marker.bindPopup(`${result.text}`);
      resultsLayer.addLayer(marker);
    });
    map.fitBounds(resultsLayer.getBounds());
  }
});
