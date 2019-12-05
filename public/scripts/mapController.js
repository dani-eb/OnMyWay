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
var ScooterMarkerArray = [];

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

function getStartLocation(){
    return locationsList[0];
}

// Update the searchbox widget content when the markers are dragged
routeOnMapView.on(routeOnMapView.Events.MarkerDragEnd, function (result) {
    //if the index is 0, it is the start, else it is the end
    var searchBox = result.markerIndex === 0 ? startLocation : endLocation;
    //the searchBox data becomes the result
    searchBox.setResultData(result.object);
    if(result.markerIndex === 0){
        console.log(result);
        //this is asdkfljf
        var position = '{"lat":';
        position = position + result.object.position.split(",")[0].trim();
        position = position + ', "lon":';
        position = position + result.object.position.split(",")[1].trim();
        position = position + '}';
        updateRouteStart(JSON.parse(position));
    }

    updateMarkers();
});

function updateRouteStart(pos) {
    console.log(pos);
    locationsList[0] = pos;
    routeOnMapView.draw(locationsList);
    updateMarkers();
}

function updateRouteEnd(pos) {
    locationsList[1] = pos;
    routeOnMapView.draw(locationsList);
    updateMarkers();
}

startLocation.on(startLocation.Events.ResultClicked, function (event) {
    updateRouteStart(event.data.position);
    window.start_location = event.data.position;
});

endLocation.on(endLocation.Events.ResultClicked, function (event) {
    updateRouteEnd(event.data.position);
    window.end_location = event.data.position;
});

startLocation.on(startLocation.Events.ClearButtonClicked, function () {
    updateRouteStart();
    window.startLocation = undefined;
});

endLocation.on(endLocation.Events.ClearButtonClicked, function () {
    updateRouteEnd();
    window.endLocation = undefined;
});

//this one runs when the map inits
updateMarkers();

var markers = tomtom.L.markerClusterGroup();

function setScooterPoints(points){
    ScooterPoints = points;
    updateMarkers();
}

function createScooterMarkers() {
    ScooterMarkerArray = new Array();
    if(typeof ScooterPoints !== 'undefined' && ScooterPoints.length){
        ScooterPoints.forEach(function (point) {
            var title = point[3],
            marker = tomtom.L.marker(new tomtom.L.LatLng(point[1], point[2]), { title: title });
            marker.bindPopup(title);
            ScooterMarkerArray.push(marker);
        });
    }
}

async function updateMarkers() {
    createScooterMarkers();

    if (markers != undefined) {
        map.removeLayer(markers);
    };
    markers = tomtom.L.markerClusterGroup();

    ScooterMarkerArray.forEach(function(marker) {
        markers.addLayer(marker);
    });

    map.removeLayer(markers);

    markers = tomtom.L.markerClusterGroup();

    ScooterMarkerArray.forEach(function(marker) {
        markers.addLayer(marker);
    });
    

    map.addLayer(markers);
};
