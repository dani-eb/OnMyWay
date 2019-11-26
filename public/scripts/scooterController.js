const scooter_button = document.getElementById('scooter_button');

scooter_button.addEventListener('click', (evt) =>{
    let url = 'https://api.multicycles.org/v1?access_token=9zrG3cRPdgKwJiOeDh1BmZ9Kly2Ul5hM';
    
    const request_headers = new Headers();
    request_headers.append('Content-Type', 'application/json');

    const request_body = {
        "query":"query ($lat: Float!, $lng: Float!, $typeVehicles: [VehicleType]) {\n  vehicles (lat: $lat, lng: $lng, typeVehicles: $typeVehicles) {\n    id\n    type\n    lat\n    lng\n    provider {\n      name\n    }\n  }\n}",
        "variables": {
            "lat": 40.766043,
            "lng": -111.890814,
            "typeVehicles": [
                "SCOOTER"
            ]
        }
        
        // "query":"query ($lat: Float!, $lng: Float!) {\n  vehicles(lat: $lat, lng: $lng) {\n\t\tid\n  }\n}","variables":{"lat":48.856614,"lng":2.352222}}
        // query:"($lat: Float!, $lng: Float!, $typeVehicles: [VehicleType]) {\n vehicles (lat: $lat, lng: $lng, typeVehicles: $typeVehicles) {\n\t\tid\ntype\nlat\nlng\nprovider {\nname\n}\n}\n}",
        // variables:{"lat": 40.766043,"lng": -111.890814,"typeVehicles": ["SCOOTER"]}
    };

    const request_settings = {
        method: 'POST',
        headers: request_headers,
        mode: 'no-cors', // change cors if errors
        body: request_body
    };

    const request = fetch(url, request_settings).then((response) => {
        console.log(response);
    });

});

scooter_button.click();


