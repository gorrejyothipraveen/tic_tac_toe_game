import { assertEquals } from "@std/assert";
import { ticTacToe } from "../src/tic_tac_toe.js";

Deno.test("simple test case", () => {
  assertEquals(ticTacToe(), '')
});

Deno.test("are positions on horizontal", () => {
  assertEquals(ticTacToe(), [1, 2, 3])
});

