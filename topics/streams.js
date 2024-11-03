import fs from 'node:fs'

// const ReadData = fs.createReadStream('./filesync.txt', 'utf-8')
const ReadData = fs.createReadStream('./filesync.txt', {
    encoding: 'utf-8',
    highWaterMark: 5,
})

const WriteData = fs.createWriteStream('./new.txt')

ReadData.on('data', (chunk) => {
    console.log(chunk)
    WriteData.write(chunk)
})
