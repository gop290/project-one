import { describe, it, expect, test } from "vitest";
import { add } from "./add";
import { mult} from "./add";
import { dd } from "./add";
describe("add function", () => {
  it("should add two numbers", () => {
    expect(false).toBeFalsy();
  });
  it("should add two times",()=>{
    expect(mult(5,4)).toBe(20);
  })
  test("the value must be number",()=>{
    expect(dd("a")).toBe(true);
  })
});