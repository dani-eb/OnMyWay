const scooter_button = document.getElementById('scooter_button');
const scooter_table = document.getElementById('scooter_table');

const sortTableData = (a, b) => {
    let comparison = 0;
    if (a.distance > b.distance) {
        comparison = 1;
    } else if (a.distance < b.distance) {
        comparison = -1;
    }
    return comparison;
}

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
        var TableData = [];
        var count = 0;
        responseAsJson.data.vehicles.sort();
        responseAsJson.data.vehicles.forEach((v)=>{
            // console.log(v);
            ScooterArray[count] = [v.id, v.lat, v.lng, v.provider.name];
            TableData.push({distance: calculateDistanceBetweenCoordinates(startingPosition.lat, startingPosition.lng, v.lat, v.lng), provider: v.provider.name});
            count++;
        });
        TableData.sort(sortTableData);
        let scooter_table_html = `<tbody><tr>\n\t<th>Distance</th>\n\t<th>Provider</th>\n</tr>\n`;
        // scooter_table.innerHTML = `<tbody><tr>\n\t<th>Distance</th>\n\t<th>Provider</th>\n</tr>\n`;
        TableData.forEach((d) => {
            scooter_table_html += `<tr>\n\t<th>${(d.distance*3.28084).toFixed(0)} feet</th>\n\t<th>${d.provider}</th>\n</tr>\n`;
        })
        scooter_table_html += "</tbody>";
        console.log(scooter_table_html);
        scooter_table.innerHTML = scooter_table_html;
        console.log(ScooterArray);


    })

});
// scooter_table.innerHTML += `<tr>\n\t<th>${calculateDistanceBetweenCoordinates(startingPosition.lat, startingPosition.lng, v.lat, v.lng)}</th>\n\t<th>${v.provider.name}</th>\n<tr>\n`;
// scooter_button.click();


