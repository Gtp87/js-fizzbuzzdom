// stampo una griglia
const container = document.querySelector('.container');

// Scrivi un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // creo div
    const div = document.createElement('div');
    div.classList.add('box');
    container.append(div);
    

    // se dividsibile per 3 e 5 scrivi FizzBuzz
    if (i % 3 == 0 && i % 5 == 0) {
        div.innerHTML = 'FizzBuzz';
        // aggiungo classe specifica
        div.classList.add('green');
    // se divisibile per 3 scrivi Fizz
    } else if (i % 3 == 0) {
        div.innerHTML = 'Fizz';
         // aggiungo classe specifica
        div.classList.add('red');
    // se divisibile per 5 scrivi Buzz
    } else if (i % 5 == 0) {
        div.innerHTML = 'Buzz';
         // aggiungo classe specifica
        div.classList.add('pink');
    } else {
        div.append(i);
    }
};