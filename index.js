// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"]
const event = "surprise"


function writeCards(names, event) { 
    let all_greetings = []

    for (let i = 0; i < names.length; i++ ) {
        let greeting = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        all_greetings.push(greeting)
    }
    return all_greetings

}

function countdown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}