"use strict";
function collatzGenerator() {
    var number,
        collatzDiv = document.getElementById("collatz-step"),
        collatzString = "",
        collatzStep,
        collatzSeq = [];
    function randomNumber() {
        return Math.floor(Math.random() * 10000000)
        return Math.floor(Math.random() * 10)
    }
    number = randomNumber();
    collatzSeq.push(number);
    collatzString = collatzString + number;
    while (number != 1) {
        if (number % 2 == 0) {
            number = number/2;
            //the * is the separator of each piece for the typing write effect
            collatzString = collatzString + "* -> *" + number;
        } else {
            number = (3 * number) + 1;
            collatzString = collatzString + "* -> *<strong>" + number + "</strong>";
        }
        collatzSeq.push(number);
    }
    collatzStep = "Number of steps to converge " + collatzSeq[0] +" to 1: " + collatzSeq.length;
    collatzDiv.innerHTML = collatzStep;
    return collatzString
}
var collatzString = collatzGenerator().split("*");
function collatzWrite() {
    var collatzDiv = document.getElementById("collatz-sequence"),
        CollatzRun,
        speed = 50;
    if (collatzString.length > 0) {
        collatzDiv.innerHTML += collatzString.shift();
    } else {
        clearTimeout(CollatzRun);
        return false;
    }
    setTimeout(collatzWrite, speed);
}
function collatzRewrite() {
    document.getElementById("collatz-sequence").innerHTML = "";
    collatzString = collatzGenerator().split("*");
    collatzWrite();
}