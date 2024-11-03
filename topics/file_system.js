import fs from 'node:fs';

// const text = fs.readFileSync('./file.txt')
const text = fs.readFileSync('./filesync.txt', 'utf-8')

console.log(text)

// fs.writeFileSync('./filesync.txt', "Hello moto")

fs.writeFileSync('./filesync.txt', "This a node js course", { flag: 'a'})

fs.readFile('./file_async.txt', 'utf-8', (error, data) => {
    if (error) console.log(error)
    else console.log(data)
})

fs.writeFile('./file_async.txt', "Hello Redmi", error => {
    if (error) console.log(error)
})
