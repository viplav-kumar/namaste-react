import { Sum } from "../components/Sum";

test("Sum function should give the adition of two numbers", () => {
  // expect(Sum(4, 3)).toBe(7);
  const result = Sum(4, 3);
  // Assertion
  expect(result).toBe(7);
});
