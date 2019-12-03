const scooter_button = document.getElementById('scooter_button');


scooter_button.addEventListener('click', (evt) =>{    
    var startingPosition = getStartLoaction();
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
        // console.log(responseAsJson.data.vehicles.size);
        // var obj = JSON.parse(responseAsJson.data.vehicles);
        // console.log(obj)
        // for(var obj in responseAsJson.data.vehicles){
        //     console.log(obj)
        // }
        var ScooterArray = [];
        var count = 0;
        responseAsJson.data.vehicles.forEach((v)=>{
            // console.log(v);
            ScooterArray[count] = [v.id, v.lat, v.lng, v.provider.name];

            count++;
        });

        console.log(ScooterArray);


    })

});

// scooter_button.click();


