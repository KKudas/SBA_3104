const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const options = {
    key: fs.readFileSync('./certs/private.key'),
    cert: fs.readFileSync('./certs/certificate.crt'),
};

https.createServer(options, app).listen(443, () => {
    console.log('HTTPS server running on https://localhost');
});