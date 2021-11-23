// Scrivi un programma che stampi in console i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {

    // se dividsibile per 3 e 5 scrivi FizzBuzz
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    // se divisibile per 3 scrivi Fizz
    } else if (i % 3 == 0) {
        console.log('Fizz');
    // se divisibile per 5 scrivi Buzz
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
};