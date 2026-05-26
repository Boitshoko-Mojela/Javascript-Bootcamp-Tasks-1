const readline = require('readline');

// Setup readline interface for terminal input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to turn rl.question into a promise so we can use async/await
const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

// We wrap the code in an async function to easily handle the terminal prompts sequentially
async function runTasks() {

    // --- Exercise 1: Temperature check ---
    console.log("--- Exercise 1: Temperature Check ---");
    let temperature = 18; // Test value

    console.log("Using If-Else:");
    if (temperature < 0) {
        console.log("It's freezing!");
    } else if (temperature >= 0 && temperature <= 15) {
        console.log("It's cold.");
    } else if (temperature >= 16 && temperature <= 25) {
        console.log("It's mild.");
    } else {
        console.log("It's warm.");
    }

    console.log("Using Switch:");
    switch (true) {
        case (temperature < 0):
            console.log("It's freezing!");
            break;
        case (temperature >= 0 && temperature <= 15):
            console.log("It's cold.");
            break;
        case (temperature >= 16 && temperature <= 25):
            console.log("It's mild.");
            break;
        default:
            console.log("It's warm.");
    }

    // --- Exercise 2: Divisibility Check ---
    console.log("\n--- Exercise 2: Divisibility Check ---");
    let num = 6; // Test value

    console.log("Using If-Else:");
    if (num % 2 === 0 && num % 3 === 0) {
        console.log("Divisible by both.");
    } else if (num % 2 === 0) {
        console.log("Divisible by 2.");
    } else if (num % 3 === 0) {
        console.log("Divisible by 3.");
    } else {
        console.log("Not divisible by 2 or 3.");
    }

    console.log("Using Switch:");
    switch (true) {
        case (num % 2 === 0 && num % 3 === 0):
            console.log("Divisible by both.");
            break;
        case (num % 2 === 0):
            console.log("Divisible by 2.");
            break;
        case (num % 3 === 0):
            console.log("Divisible by 3.");
            break;
        default:
            console.log("Not divisible by 2 or 3.");
    }

    // --- Exercise 3: For loops ---
    console.log("\n--- Exercise 3: For Loops ---");

    console.log("Numbers 1 to 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    console.log("Even numbers 1 to 20:");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) console.log(i);
    }

    let forSum = 0;
    for (let i = 1; i <= 100; i++) {
        forSum += i;
    }
    console.log("Sum 1 to 100:", forSum);

    console.log("Array elements:");
    const numbersArray1 = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbersArray1.length; i++) {
        console.log(numbersArray1[i]);
    }

    const numbersArray2 = [3, 7, 2, 5, 10, 6];
    let largest = numbersArray2[0];
    for (let i = 1; i < numbersArray2.length; i++) {
        if (numbersArray2[i] > largest) {
            largest = numbersArray2[i];
        }
    }
    console.log("Largest number in array:", largest);

    // --- Exercise 4: While loops ---
    console.log("\n--- Exercise 4: While Loops ---");

    console.log("Numbers 1 to 10:");
    let w1 = 1;
    while (w1 <= 10) {
        console.log(w1);
        w1++;
    }

    console.log("Even numbers 1 to 20:");
    let w2 = 1;
    while (w2 <= 20) {
        if (w2 % 2 === 0) console.log(w2);
        w2++;
    }

    let whileSum = 0;
    let w3 = 1;
    while (w3 <= 100) {
        whileSum += w3;
        w3++;
    }
    console.log("Sum 1 to 100:", whileSum);

    console.log("Multiples of 5 less than 50:");
    let w4 = 1;
    while (w4 < 50) {
        if (w4 % 5 === 0) console.log(w4);
        w4++;
    }

    // --- Exercise 5: Do While loops ---
    console.log("\n--- Exercise 5: Do While Loops ---");

    console.log("Numbers 1 to 10:");
    let dw1 = 1;
    do {
        console.log(dw1);
        dw1++;
    } while (dw1 <= 10);

    let doWhileSum = 0;
    let dw2 = 1;
    do {
        doWhileSum += dw2;
        dw2++;
    } while (dw2 <= 100);
    console.log("Sum 1 to 100:", doWhileSum);

    // 3. Prompt user for number > 10 (Interactive in Terminal)
    console.log("\n--- Exercise 5: Interactive Terminal Prompts ---");
    let userNum;
    do {
        let input = await askQuestion("Enter a number greater than 10: ");
        userNum = parseInt(input);
    } while (userNum <= 10 || isNaN(userNum));
    console.log("Valid number entered:", userNum);

    // 4. Simple guessing game (Interactive in Terminal)
    const correctNumber = 7;
    let guess;
    do {
        let input = await askQuestion("Guess a number between 1 and 10: ");
        guess = parseInt(input);
        if (guess !== correctNumber) {
            console.log("Wrong guess! Try again.");
        }
    } while (guess !== correctNumber);
    console.log("Correct! You guessed it.");

    // Close the interface when everything is finished
    rl.close();
}

// Execute the async sequence
runTasks();