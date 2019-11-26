const scooter_button = document.getElementById('scooter_button');

scooter_button.addEventListener('click', (evt) =>{
    let url = 'api.multicycles.org/v1?access_token=PRtuzKsnlYrjrj7wnhCdlz48';
    
    const request_headers = new Headers();
    request_headers.append('Content-Type', 'application/json');

    const request_body = {

        query:"query ($lat: Float!, $lng: Float!) {\n  vehicles(lat: $lat, lng: $lng) {\n\t\tid\n  }\n}","variables":{"lat":48.856614,"lng":2.352222}
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




