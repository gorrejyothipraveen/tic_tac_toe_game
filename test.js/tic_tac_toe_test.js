import { assertEquals } from "@std/assert";
import {
areOnWinningLocations,
isOnAnyOfAxis,
  isOnAxis,
  isOnDiagonalAxis,
  isOnHorizontalAxis,
  isOnVerticalAxis,
  ticTacToe,
} from "../src/tic_tac_toe.js";

Deno.test("simple test case", () => {
  assertEquals(ticTacToe(), "");
});

Deno.test("this is not in DiagonalAxis positions", () => {
  assertEquals(isOnDiagonalAxis([1, 2, 3]), false);
});

Deno.test("this is in DiagonalAxis positions", () => {
  assertEquals(isOnDiagonalAxis([1, 5, 9]), true);
});

Deno.test("this is in DiagonalAxis positions", () => {
  assertEquals(isOnDiagonalAxis([3, 5, 7]), true);
});

Deno.test("this is not in DiagonalAxis positions", () => {
  assertEquals(isOnDiagonalAxis([3, 5, 8]), false);
});

Deno.test("this is not in DiagonalAxis positions", () => {
  assertEquals(isOnDiagonalAxis([1, 5, 3]), false);
});

Deno.test("this is also not in DiagonalAxis positions", () => {
  assertEquals(isOnDiagonalAxis([7, 5, 9]), false);
});

Deno.test("1st horizontal Axis", () => {
  assertEquals(isOnHorizontalAxis([1, 2, 3]), true);
});

Deno.test("2nd horizontal Axis", () => {
  assertEquals(isOnHorizontalAxis([4, 5, 6]), true);
});

Deno.test("3rd horizontal Axis", () => {
  assertEquals(isOnHorizontalAxis([7, 8, 9]), true);
});

Deno.test("this is not in horizontal Axis", () => {
  assertEquals(isOnHorizontalAxis([1, 4, 7]), false);
});

Deno.test("this is not in horizontal Axis", () => {
  assertEquals(isOnHorizontalAxis([3, 6, 9]), false);
});

Deno.test("this is not in horizontal Axis", () => {
  assertEquals(isOnHorizontalAxis([2, 5, 7]), false);
});

Deno.test("1st vertical Axis", () => {
  assertEquals(isOnVerticalAxis([1, 4, 7]), true);
});

Deno.test("2nd vertical Axis", () => {
  assertEquals(isOnVerticalAxis([2, 5, 7]), true);
});

Deno.test("3rd vertical Axis", () => {
  assertEquals(isOnVerticalAxis([3, 6, 9]), true);
});

Deno.test("position exist on vertical Axis", () => {
  assertEquals(isOnAnyOfAxis([3, 6, 9]), true);
});

Deno.test("position exist on horizontal axis", () => {
  assertEquals(isOnAnyOfAxis([7, 8, 9]), true);
});

Deno.test("exist on DiagonalAxis ", () => {
  assertEquals(isOnAnyOfAxis([1, 5, 9]), true);
});

Deno.test("this is position doesn't exist", () => {
  assertEquals(isOnAnyOfAxis([3, 5, 8]), false);
});

Deno.test("this is also not exist any where", () => {
  assertEquals(isOnAnyOfAxis([1, 5, 3]), false);
});

Deno.test("this location is present on one of horizontal axis", () => {
  assertEquals(isOnAxis([1, 2, 3]), true);
});

Deno.test("this is in DiagonalAxis positions", () => {
  assertEquals(isOnAxis([1, 5, 9]), true);
});

Deno.test("this is in DiagonalAxis positions", () => {
  assertEquals(isOnAxis([3, 5, 7]), true);
});

Deno.test("1st horizontal Axis", () => {
  assertEquals(isOnAxis([1, 2, 3]), true);
});

Deno.test("2nd horizontal Axis", () => {
  assertEquals(isOnAxis([4, 5, 6]), true);
});

Deno.test("3rd horizontal Axis", () => {
  assertEquals(isOnAxis([7, 8, 9]), true);
});

Deno.test("1st vertical Axis", () => {
  assertEquals(isOnAxis([1, 4, 7]), true);
});

Deno.test("2nd vertical Axis", () => {
  assertEquals(isOnAxis([2, 5, 7]), true);
});

Deno.test("3rd vertical Axis", () => {
  assertEquals(isOnAxis([3, 6, 9]), true);
});

Deno.test("this is position doesn't exist", () => {
  assertEquals(isOnAxis([3, 5, 8]), false);
});

Deno.test("this is also not exist any where", () => {
  assertEquals(isOnAxis([1, 5, 3]), false);
});

Deno.test("subsetsInputs", () => {
  assertEquals(areOnWinningLocations([1, 5, 3, 9]), true);
});

Deno.test("subsetsInputs", () => {
  assertEquals(areOnWinningLocations([1, 5, 3, 2  ]), true);
});
Deno.test("subsetsInputs", () => {
  assertEquals(areOnWinningLocations([1, 5, 3, 6]), false);
});

