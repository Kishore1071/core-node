const Calculation = new Promise((resolve, reject) => {
    const result = 5 + 10

    const reference = 100
    if (result > reference) {
        resolve("The result is greater than reference value")
    }
    else {
        reject("The result is lesser than reference value")
    }
})

Calculation()
.then(data =>  console.log(data))
.catch(error => console.log(error))