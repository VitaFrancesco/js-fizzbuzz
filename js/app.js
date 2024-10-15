// ciclo for
for (let i = 0; i < 100; i++) {
    if ((((i +1) % 3) === 0) && (((i +1) % 5) === 0)) {
        console.log("FizzBuzz")
    } else if (((i +1) % 3) === 0) {
        console.log("Fizz")
    } else if (((i +1) % 5) === 0) {
        console.log("Buzz")
    } else {
        console.log(i + 1)
    }
}

for (let i = 0; i < 100; i++) {
    let stamp = (((i +1) % 3) === 0) && (((i +1) % 5) === 0) ? "FizzBuzz" : (((i +1) % 3) === 0 ? "Fizz" : (((i +1) % 5) === 0 ? "Buzz" : i + 1))
    console.log(stamp)
}