const scooter_button = document.getElementById('scooter_button');

scooter_button.addEventListener('click', (evt) =>{
    let url = 'https://api.multicycles.org/v1?access_token=9zrG3cRPdgKwJiOeDh1BmZ9Kly2Ul5hM';
    
    const request_headers = new Headers();
    request_headers.append('Content-Type', 'application/json');
    request_headers.append('Host', 'api.multicycles.org');
    request_headers.append('Accept', '*/*');
    
    console.log("fetching here");
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
                lat: 40.766043,
		        lng: -111.890814,
		        typeVehicles: [
    		        "SCOOTER"
		        ]
            }
        })
    }).then(response => {
        return response.json()
    }).then(responseAsJson => {
        console.log(responseAsJson.data)
    })

});

scooter_button.click();


