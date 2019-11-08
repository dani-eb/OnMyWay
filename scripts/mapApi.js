
mapboxgl.accessToken = 'pk.eyJ1IjoibnZlZ2EiLCJhIjoiY2sycDl5eDh1MDI0MTNsbnk2dHpqa3g5MCJ9.woy5_Z5-9yJbFLqj0SJJmA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

