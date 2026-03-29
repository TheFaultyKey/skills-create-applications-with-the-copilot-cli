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
 *   modulo   - Modulo: returns the remainder of a divided by b (e.g. 10 % 3 = 1)
 *   power    - Exponentiation: returns base raised to the exponent (e.g. 2 ^ 8 = 256)
 *   sqrt     - Square Root: returns the square root of n (e.g. √9 = 3)
 *              Negative inputs return an error message instead of NaN.
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 9 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 10 2
 *   node calculator.js modulo 10 3
 *   node calculator.js power 2 8
 *   node calculator.js sqrt 9
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

// Modulo: return the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

// Power (Exponentiation): raise base to the given exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: return the square root of n; guards against negative inputs
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

function main() {
  const [, , operation, rawA, rawB] = process.argv;

  if (!operation || rawA === undefined) {
    console.error("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <num1> [num2]");
    process.exit(1);
  }

  const op = operation.toLowerCase();
  const a = parseFloat(rawA);

  if (isNaN(a)) {
    console.error("Error: num1 must be a valid number.");
    process.exit(1);
  }

  // sqrt only needs one argument
  if (op === "sqrt") {
    try {
      const result = squareRoot(a);
      console.log(`√${a} = ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    return;
  }

  if (rawB === undefined) {
    console.error("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power> <num1> <num2>");
    process.exit(1);
  }

  const b = parseFloat(rawB);

  if (isNaN(b)) {
    console.error("Error: num2 must be a valid number.");
    process.exit(1);
  }

  let result;
  try {
    switch (op) {
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
      case "modulo":
        result = modulo(a, b);
        console.log(`${a} % ${b} = ${result}`);
        break;
      case "power":
        result = power(a, b);
        console.log(`${a} ^ ${b} = ${result}`);
        break;
      default:
        console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or sqrt.`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
