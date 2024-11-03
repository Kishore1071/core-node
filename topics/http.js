import http from 'node:http'
import fs from 'node:fs'


http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Node Server!')
}).listen(1000, () => console.log("Serving on the port 1000"))

// http.createServer((request, response) => {

//     const person_data = {
//         first_name: "Kishore",
//         last_name: 'M'
//     }

//     response.writeHead(200, {'Content-Type': 'apllication/json'})
//     response.end(JSON.stringify(person_data))

// }).listen(2000, () => console.log("Serving on the port 2000"))


// http.createServer((request, response) => {

//     response.writeHead(200, {'Content-Type': 'text/html'})

//     fs.createReadStream('./index.html', 'utf-8').pipe(response)

// }).listen(3000, () => console.log("Serving on the port 2000"))