const find_uber_button = document.getElementById('uber_button');//document find uber

find_uber_button.addEventListener('click', (evt) => {
    let url = `https://api.uber.com/v1.2/estimates/price?start_latitude=${window.startLocation.lat}&start_longitude=${window.startLocation.lon}&end_latitude=${window.endLocation.lat}&end_longitude=${window.endLocation.lon}`;
    
    const request_headers = new Headers();
    request_headers.append('Authorization', `Tokem ${token}`);
    request_headers.append('Accept-Language', 'en_US');
    request_headers.append('Content-Type', 'application/json');

    const request_settings = {
        method: 'GET',
        headers: request_headers
    };

    const request = fetch(url, request_settings).then((response) => {
        console.log(data);
    })
});