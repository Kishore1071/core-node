import http from 'node:http'
import fs from 'node:fs'

http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type': 'text/html'})

    const url = request.url

    const method = request.method

    if (method === 'post') console.log(request.body)

    if (url === '/') {
        fs.createReadStream('./index.html', 'utf-8').pipe(response)
    }
    else if (url === '/about') {
        fs.createReadStream('./about.html', 'utf-8').pipe(response)
    }

}).listen(2000, () => console.log("Serving on the port 2000"))