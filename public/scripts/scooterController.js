const scooter_button = document.getElementById('scooter_button');


scooter_button.addEventListener('click', (evt) =>{    
    var startingPosition = getStartLoction();
    fetch('https://api.multicycles.org/v1?access_token=9zrG3cRPdgKwJiOeDh1BmZ9Kly2Ul5hM', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `query ($lat: Float!, $lng: Float!, $typeVehicles: [VehicleType]) {
                vehicles (lat: $lat, lng: $lng, typeVehicles: $typeVehicles) {
                    id
                    type
                    lat
                    lng
                    provider {
                        name
                    }
                }
            }`,
            variables: {
                lat: startingPosition.lat,
		        lng: startingPosition.lng,
		        typeVehicles: [
    		        "SCOOTER"
		        ]
            }
        })
    }).then(response => {
        return response.json()
    }).then(responseAsJson => {
        console.log(responseAsJson.data)
        var scooter_info = document.getElementById('scooter_info')
        scooter_info
    })

});

// scooter_button.click();


