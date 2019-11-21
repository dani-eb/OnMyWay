const https = require('https')
const options = {
    hostname: 'api.multicycles.org',
    path: '/v1?access_token=PRtuzKsnlYrjrj7wnhCdlz48',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d=> {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()