var geojson = [
  { "geometry": { "type": "Point", "coordinates": [52, 57] },
    "properties": { "id": "cover", "zoom": 3 } },
  { "geometry": { "type": "Point", "coordinates": [-0.155697, 51.508726] },
    "properties": { "id": "hyde", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [1.310024, 51.128768] },
    "properties": { "id": "dover", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [1.876686, 50.96529] },
    "properties": { "id": "calais", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [3.73038, 51.053468] },
    "properties": { "id": "ghent", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [11.07675, 49.45403] },
    "properties": { "id": "nuremberg", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [13.22932, 49.332162] },
    "properties": { "id": "klenova", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [14.426765, 50.090679] },
    "properties": { "id": "prague", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [16.373819, 48.208174] },
    "properties": { "id": "vienna", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [15.976868, 45.81407] },
    "properties": { "id": "zagreb",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [16.440193, 43.514132] },
    "properties": { "id": "split",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [18.111048, 42.642889] },
    "properties": { "id": "dubrovnik",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [18.406219, 43.855171] },
    "properties": { "id": "sarajevo",  "zoom": 8 } },
    
  { "geometry": { "type": "Point", "coordinates": [23.3230598, 42.6977149] },
    "properties": { "id": "sofia", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [28.9651646, 41.0096334] },
    "properties": { "id": "istanbul",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [32.8520491, 39.9272237] },
    "properties": { "id": "ankara",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [34.8296234, 38.642089] },
    "properties": { "id": "goreme",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [41.6360085, 41.6509502] },
    "properties": { "id": "batumi", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [44.8015706, 41.6935009] },
    "properties": { "id": "tbilisi",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [49.8466787, 40.3925137] },
    "properties": { "id": "baku",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [51.383057, 40.152375] },
    "properties": { "id": "caspian",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [52.992897, 40.001903] },
    "properties": { "id": "turkmenbashi",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [58.3874263, 37.9396678] },
    "properties": { "id": "ashgabat", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [60.3620006, 41.3776893] },
    "properties": { "id": "khiva",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [64.4231326, 39.7675529] },
    "properties": { "id": "bukhara",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [66.9607742126004, 39.6415721] },
    "properties": { "id": "samarkand",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [69.228973, 41.292092] },
    "properties": { "id": "tashkent",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [72.796783, 40.524679] },
    "properties": { "id": "osh",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [74.584808, 42.877820] },
    "properties": { "id": "bishkek",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [76.9453467, 43.2389912] },
    "properties": { "id": "almaty", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [80.221526, 50.3484797] },
    "properties": { "id": "semey",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [83.747406, 53.365176] },
    "properties": { "id": "barnaul",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [91.633530, 48.005013] },
    "properties": { "id": "khovd",  "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [100.710468, 46.183803] },
    "properties": { "id": "bayankhongor", "zoom": 8 } },

  { "geometry": { "type": "Point", "coordinates": [106.975911816806, 47.9462225] },
    "properties": { "id": "ulaanbaatar",  "zoom": 8 } },

];


var tiles = mapbox.layer().tilejson({
  tiles: [ "https://a.tiles.mapbox.com/v3/crossingtherubikhan.hf648fpg/{z}/{x}/{y}.png" ]
});

// Use https for markers
mapbox.markers.marker_baseurl = 'https://a.tiles.mapbox.com/v3/marker/';

var spots = mapbox.markers.layer()
  // Load up markers from geojson data.
  .features(geojson)
  // Define a new factory function. Takes geojson input and returns a
  // DOM element that represents the point.
  .factory(function(f) {
    var el = document.createElement('div');
    el.className = 'spot spot-' + f.properties.id;
    return el;
  });

// Creates the map with tile and marker layers and
// no input handlers (mouse drag, scrollwheel, etc).
var map = mapbox.map('map', [tiles, spots], null, [easey_handlers.DragHandler()]);

// Array of story section elements.
var sections = document.getElementsByTagName('section');

// Array of marker elements with order matching section elements.
var markers = _(sections).map(function(section) {
  return _(spots.markers()).find(function(m) {
    return m.data.properties.id === section.id;
  });
});

// Helper to set the active section.
var setActive = function(index, ease) {
  // Set active class on sections, markers.
  _(sections).each(function(s) { s.className = s.className.replace(' active', '') });
  _(markers).each(function(m) { m.element.className = m.element.className.replace(' active', '') });
  sections[index].className += ' active';
  markers[index].element.className += ' active';

  // Set a body class for the active section.
  document.body.className = 'section-' + index;

  // Ease map to active marker.
  if (!ease) {
    map.centerzoom(markers[index].location, markers[index].data.properties.zoom||14)
    .zoom(6);
  } else {
    map.ease.location(markers[index].location).zoom(markers[index].data.properties.zoom||14).optimal(0.75, 2);
  }

  return true;
};

// Bind to scroll events to find the active section.
window.onscroll = _(function() {
  // IE 8
  if (window.pageYOffset === undefined) {
    var y = document.documentElement.scrollTop;
    var h = document.documentElement.clientHeight;
  } else {
    var y = window.pageYOffset;
    var h = window.innerHeight;
  }

  // If scrolled to the very top of the page set the first section active.
  if (y === 0) return setActive(0, true);

  // Otherwise, conditionally determine the extent to which page must be
  // scrolled for each section. The first section that matches the current
  // scroll position wins and exits the loop early.
  var memo = 0;
  var buffer = (h * 0.3333);
  var active = _(sections).any(function(el, index) {
    memo += el.offsetHeight;
    return y < (memo-buffer) ? setActive(index, true) : false;
  });

  // If no section was set active the user has scrolled past the last section.
  // Set the last section active.
  if (!active) setActive(sections.length - 1, true);
}).debounce(10);

// Set map to first section.
setActive(0, false);