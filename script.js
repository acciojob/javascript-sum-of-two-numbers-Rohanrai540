let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
let n1 = Number(input1);
let n2 = Number(input2);

if (
  num1 === null || num2 === null ||  
  num1.trim() === "" || num2.trim() === "" || 
  isNaN(n1) || isNaN(n2) 
) {
  alert("Invalid input. Please enter a valid number.");
} else {
  let sum = n1 + n2;
  alert(`The sum of ${n1} and ${n2} is ${sum}.`);
 }
}

