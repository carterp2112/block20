// TODO: this file! :)
let numbers = [];
let evens = []; let odds = [];

function addToBank() {
    let input = document.forms["add-number"]["number"].value;
    if (input === "") {
        alert("Please add a number");
        return false;
    } else {
        numbers.push(parseInt(input));
    }

    document.getElementById("bank").innerHTML = numbers;
    document.forms["add-number"]["number"].value = "";
}

function sortBankOne() {
    const firstVal = numbers.shift();
    if(firstVal % 2 === 0) {
        evens.push(firstVal);
    } else {
        odds.push(firstVal);
    }

    document.getElementById("bank").innerHTML = numbers;
    document.getElementById("odd-bank").innerHTML = odds;
    document.getElementById("even-bank").innerHTML = evens;
}

function sortBankAll() {
    evens = []; odds = [];
    for (let i of numbers) {
        if (i % 2 === 0) {
            evens.push(i);
        } else {
            odds.push(i);
        }
    }

    numbers = []
    document.getElementById("bank").innerHTML = numbers;
    document.getElementById("odd-bank").innerHTML = odds;
    document.getElementById("even-bank").innerHTML = evens;
}