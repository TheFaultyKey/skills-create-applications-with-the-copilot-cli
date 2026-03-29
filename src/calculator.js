#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition: returns the sum of two numbers (e.g. 5 + 3 = 8)
 *   subtract - Subtraction: returns the difference of two numbers (e.g. 9 - 4 = 5)
 *   multiply - Multiplication: returns the product of two numbers (e.g. 6 * 7 = 42)
 *   divide   - Division: returns the quotient of two numbers (e.g. 10 / 2 = 5)
 *              Division by zero returns an error message instead of Infinity or NaN.
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 9 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 10 2
 */

// Addition: sum two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: find the difference between two numbers
function subtract(a, b) {
  return a - b;
}

// Multiplication: multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Division: divide one number by another; guards against division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function main() {
  const [, , operation, rawA, rawB] = process.argv;

  if (!operation || rawA === undefined || rawB === undefined) {
    console.error("Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>");
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: Both num1 and num2 must be valid numbers.");
    process.exit(1);
  }

  let result;
  try {
    switch (operation.toLowerCase()) {
      case "add":
        result = add(a, b);
        console.log(`${a} + ${b} = ${result}`);
        break;
      case "subtract":
        result = subtract(a, b);
        console.log(`${a} - ${b} = ${result}`);
        break;
      case "multiply":
        result = multiply(a, b);
        console.log(`${a} * ${b} = ${result}`);
        break;
      case "divide":
        result = divide(a, b);
        console.log(`${a} / ${b} = ${result}`);
        break;
      default:
        console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
