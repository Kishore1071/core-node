import fs from 'node:fs'

const ReadData = fs.createReadStream('./filesync.txt', {
    encoding: 'utf-8',
    highWaterMark: 5,
})

const WriteData = fs.createWriteStream('./new.txt', { flags: 'a'})

ReadData.pipe(WriteData)
