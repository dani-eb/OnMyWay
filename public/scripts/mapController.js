// Define your product name and version
tomtom.setProductInfo('OMW', 'V1');

// Setting TomTomkeys
tomtom.routingKey('VQOVbt49nO29ANmuQgvS73U6tOUGecoG');
tomtom.searchKey('VQOVbt49nO29ANmuQgvS73U6tOUGecoG');

// Creating the map
var map = tomtom.L.map('map', {
    key: 'VQOVbt49nO29ANmuQgvS73U6tOUGecoG',
    source: 'vector',
    basePath: '/sdk'
});

//This is an array of the scooters
var ScooterPoints;

//Zoom in and out with buttons on the top right
map.zoomControl.setPosition('topright');

// Creating routeOnMap widget
var routeOnMapView = tomtom.routeOnMap({
    //make the icons movable
    generalMarker: {
        draggable: true
    },
    //make start icon
    startMarker: {
        icon: tomtom.L.icon({
            iconUrl: 'sdk/images/start-black.png',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    },
    //make end icon
    endMarker: {
        icon: tomtom.L.icon({
            iconUrl: 'sdk/images/end-black.png',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        })
    }
}).addTo(map);

//create a searchBox for start location
var startLocation = tomtom.searchBox({
    collapsible: false,
    icon: 'icon-start-black',
    searchOnDragEnd: 'open',
    location: true
}).addTo(map);

//create a searchBox for end location
var endLocation = tomtom.searchBox({
    collapsible: false,
    icon: 'icon-end-black',
    searchOnDragEnd: 'open'
}).addTo(map);

// locationList stores the start and end position
var locationsList = [];

// Update the searchbox widget content when the markers are dragged
routeOnMapView.on(routeOnMapView.Events.MarkerDragEnd, function(result) {
    //if the index is 0, it is the start, else it is the end
    var searchBox = result.markerIndex === 0 ? startLocation : endLocation;
    //the searchBox data becomes the result
    searchBox.setResultData(result.object);
    updateMarkers();
});

function updateRouteStart(pos) {
    locationsList[0] = pos;
    routeOnMapView.draw(locationsList);
    updateMarkers();
}

function updateRouteEnd(pos) {
    locationsList[1] = pos;
    routeOnMapView.draw(locationsList);
    updateMarkers();
}

startLocation.on(startLocation.Events.ResultClicked, function(event) {
    updateRouteStart(event.data.position);
    window.start_location = event.data.position;
});

endLocation.on(endLocation.Events.ResultClicked, function(event) {
    updateRouteEnd(event.data.position);
    window.end_location = event.data.position;
});

startLocation.on(startLocation.Events.ClearButtonClicked, function() {
    updateRouteStart();
    window.startLocation = undefined;
});

endLocation.on(endLocation.Events.ClearButtonClicked, function() {
    updateRouteEnd();
    window.endLocation = undefined;
});

updateMarkers();

var markers = tomtom.L.markerClusterGroup();

function getUpdatedScooterPoints(){
    //Get the scooter points here
    ScooterPoints = [
        [1, -33.87, 181.21, 'Sydneyyyyy'],
        [2, -37.81, 181.96, 'Melbourne'],
        [3, -27.46, 181.02, 'Brisbane']
    ];
    // ScooterPoints = [
    //     [1, -33.87, 191.21, 'Sydneyyyyy'],
    //     [2, -37.81, 191.96, 'Melbourne'],
    //     [3, -27.46, 191.02, 'Brisbane']
    // ];
}

async function updateMarkers() {
    getUpdatedScooterPoints();
    if (markers) {
        console.log("in remove layer");
        if (typeof markers !== 'undefined') {
            console.log("in remove markers");

            markers.removeLayers();
        }
        await map.removeLayer(markers);
    }

    markers = tomtom.L.markerClusterGroup();
    console.log("in marker creation");

    ScooterPoints.forEach(function(point) {
        console.log("in for each for " + point[3]);
        var title = point[3],
            marker = tomtom.L.marker(new tomtom.L.LatLng(point[1], point[2]), { title: title });
        marker.bindPopup(title);
        markers.addLayer(marker);
    });

    map.addLayer(markers);
};