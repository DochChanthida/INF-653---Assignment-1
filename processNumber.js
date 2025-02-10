function processNumber(num) {
    try {
        // Error Handling
        if (typeof num !== "number") throw new Error("Invalid input, please enter a number.");

        // Conditional Statement using Ternary Operator
        console.log(num % 2 === 0 ? `${num} is even.` : `${num} is odd.`);

        // For Loop with Jumping Statements 
        console.log("Counting up to the number:");
        for (let i = 1; i <= num; i++) {
            if (i > 10) break;  
            if (i % 2 === 0) continue; 
            console.log(i);
        }

        // While Loop with Jumping Statement
        let count = 0;
        console.log("While loop counting:");
        while (count < num) {
            console.log(count);
            count++;
            if (count >= 5) return; 
        }

    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Processing completed."); 
    }
}

// Example usage
processNumber(7);
