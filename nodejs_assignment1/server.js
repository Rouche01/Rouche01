const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const fs = require('fs');
const { parse } = require('querystring');

const server = http.createServer(function(req, res) {
    if (req.method === "POST") {
        if (req.url === "/message") {
            let body = '';
            let parsedBody;
            req.on('data', chunk => {
                body = body + chunk.toString();
            });
            req.on('end', () => {
                parsedBody = parse(body);
                fs.writeFile('message.txt', parsedBody.message, (err) => {
                    if (err) throw err;
                });
                res.setHeader('Content-Type', 'text/html');
                res.write('<!doctype html><html><head><title>Successful Submission</title></head><body>');
                res.write('<h3>Your message is submitted successfully.</h3>');
                res.write('<p>You can go back.. <a href="http://127.0.0.1:8080">Click here</a></p>');
                res.end('</body></html>');
            });
        }
    } else {
        fs.readFile('form.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
});

server.listen(port, hostname, function() {
    console.log('Server is running at http://' + hostname + ":" + port + "/");
})