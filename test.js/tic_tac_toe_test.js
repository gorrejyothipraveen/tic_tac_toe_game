import { assertEquals } from "@std/assert";
import {
  areOnDiagonal,
  areOnHorizontalLine,
  ticTacToe,
} from "../src/tic_tac_toe.js";

Deno.test("simple test case", () => {
  assertEquals(ticTacToe(), "");
});

Deno.test("this is not in Diagonal positions", () => {
  assertEquals(areOnDiagonal([1, 2, 3]), false);
});

Deno.test("this is in Diagonal positions", () => {
  assertEquals(areOnDiagonal([1, 5, 9]), true);
});

Deno.test("this is in Diagonal positions", () => {
  assertEquals(areOnDiagonal([3, 5, 7]), true);
});

Deno.test("this is not in Diagonal positions", () => {
  assertEquals(areOnDiagonal([3, 5, 8]), false);
});

Deno.test("this is not in Diagonal positions", () => {
  assertEquals(areOnDiagonal([1, 5, 3]), false);
});

Deno.test("this is also not in Diagonal positions", () => {
  assertEquals(areOnDiagonal([7, 5, 9]), false);
});

Deno.test("1st horizontal line", () => {
  assertEquals(areOnHorizontalLine([1, 2, 3]), true);
});

Deno.test("2nd horizontal line", () => {
  assertEquals(areOnHorizontalLine([4, 5, 6]), true);
});

Deno.test("3rd horizontal line", () => {
  assertEquals(areOnHorizontalLine([7, 8, 9]), true);
});
