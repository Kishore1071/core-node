import fs from 'node:fs/promises'

fs.readFile('filesync.txt', 'utf-8')
.then(data => console.log(data))
.catch(error => console.log(error))

// async function ReadFile() {
//     try {
//         const file_data = await fs.readFile('filesync.txt', 'utf-8')

//         console.log(file_data)
//     }

//     catch (error) {
//         console.log(error)
//     }
// }

// ReadFile()