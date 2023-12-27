const os = require('os');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end();
        console.log('favicon requested');

        return;
    }

    res.writeHead(200, {'Content-Type': "application/json"});
    console.log('I have been hit')

    res.end(JSON.stringify({
        message: req.connection.remoteAddress,
        net: os.networkInterfaces()
    }))
})