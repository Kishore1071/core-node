import EventEmitter from 'node:events'

const emitter = new EventEmitter()

emitter.on('start-car', () => {
    console.log("The car is started")
})

emitter.on("read-file", (file) => {
    console.log("Reading the file", file)
})

export default emitter
