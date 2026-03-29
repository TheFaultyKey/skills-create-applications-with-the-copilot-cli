const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

// --- Addition ---
describe("add", () => {
  test("adds two positive numbers", () => {
    expect(add(5, 3)).toBe(8);
  });
  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });
  test("adds two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });
  test("adds with zero", () => {
    expect(add(7, 0)).toBe(7);
  });
});

// --- Subtraction ---
describe("subtract", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(9, 4)).toBe(5);
  });
  test("subtracts resulting in a negative number", () => {
    expect(subtract(3, 7)).toBe(-4);
  });
  test("subtracts zero", () => {
    expect(subtract(5, 0)).toBe(5);
  });
});

// --- Multiplication ---
describe("multiply", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });
  test("multiplies by zero", () => {
    expect(multiply(9, 0)).toBe(0);
  });
  test("multiplies two negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });
  test("multiplies a positive and a negative number", () => {
    expect(multiply(5, -2)).toBe(-10);
  });
});

// --- Division ---
describe("divide", () => {
  test("divides two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });
  test("divides resulting in a decimal", () => {
    expect(divide(7, 2)).toBe(3.5);
  });
  test("throws on division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed.");
  });
});

// --- Modulo ---
describe("modulo", () => {
  test("returns remainder of 5 % 2", () => {
    expect(modulo(5, 2)).toBe(1);
  });
  test("returns remainder of 10 % 3", () => {
    expect(modulo(10, 3)).toBe(1);
  });
  test("returns 0 when evenly divisible", () => {
    expect(modulo(9, 3)).toBe(0);
  });
  test("throws on modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// --- Power (Exponentiation) ---
describe("power", () => {
  test("raises 2 to the power of 3", () => {
    expect(power(2, 3)).toBe(8);
  });
  test("raises 2 to the power of 8", () => {
    expect(power(2, 8)).toBe(256);
  });
  test("raises a number to the power of 0", () => {
    expect(power(5, 0)).toBe(1);
  });
  test("raises a number to the power of 1", () => {
    expect(power(7, 1)).toBe(7);
  });
  test("raises a number to a negative exponent", () => {
    expect(power(2, -1)).toBe(0.5);
  });
});

// --- Square Root ---
describe("squareRoot", () => {
  test("returns square root of 16", () => {
    expect(squareRoot(16)).toBe(4);
  });
  test("returns square root of 9", () => {
    expect(squareRoot(9)).toBe(3);
  });
  test("returns square root of 2 (irrational)", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });
  test("returns 0 for square root of 0", () => {
    expect(squareRoot(0)).toBe(0);
  });
  test("throws on square root of a negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed.");
  });
});
