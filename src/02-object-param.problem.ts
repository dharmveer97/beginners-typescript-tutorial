import { expect, it } from "vitest";
import { number } from "zod";

interface AllNumbers {
  first: number
  second: number
}

export const addTwoNumbers = (params: AllNumbers) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
