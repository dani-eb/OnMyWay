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
});

function updateRouteStart(pos) {
    locationsList[0] = pos;
    routeOnMapView.draw(locationsList);
}

function updateRouteEnd(pos) {
    locationsList[1] = pos;
    routeOnMapView.draw(locationsList);
}

startLocation.on(startLocation.Events.ResultClicked, function(event) {
    updateRouteStart(event.data.position);
});

endLocation.on(endLocation.Events.ResultClicked, function(event) {
    updateRouteEnd(event.data.position);
});

startLocation.on(startLocation.Events.ClearButtonClicked, function() {
    updateRouteStart();
});

endLocation.on(endLocation.Events.ClearButtonClicked, function() {
    updateRouteEnd();
});

var addressPoints = [
    [-33.87, 151.21, 'Sydney'],
    [-37.81, 144.96, 'Melbourne'],
    [-27.46, 153.02, 'Brisbane'],
    [-31.96, 115.84, 'Perth'],
    [-34.93, 138.60, 'Adelaide'],
    [-32.92, 151.75, 'Newcastle'],
    [-28.07, 153.44, 'Gold coast'],
    [-35.31, 149.13, 'Canberra'],
    [-34.42, 150.87, 'Wollongong'],
    [-25.88, 152.56, 'Sunshine coast'],
    [-42.85, 147.29, 'Hobart'],
    [-38.14, 144.32, 'Geelong'],
    [-19.26, 146.78, 'Townsville'],
    [-16.92, 145.75, 'Cairns'],
    [-41.45, 147.13, 'Launceston'],
    [-36.06, 146.92, 'Albury-wodonga'],
    [-12.43, 130.85, 'Darwin'],
    [-27.56, 151.96, 'Toowoomba'],
    [-37.56, 143.84, 'Ballarat'],
    [-34.88, 150.59, 'Shoalhaven']
];


// Placing markers
var markers = tomtom.L.markerClusterGroup();
addressPoints.forEach(function(point) {
    var title = point[2],
        marker = tomtom.L.marker(new tomtom.L.LatLng(point[0], point[1]), { title: title });
    marker.bindPopup(title);
    markers.addLayer(marker);
});
map.addLayer(markers);