import { describe, expect } from "@jest/globals";
import { convertClassName } from "./converter";

describe("converter", () => {
  describe("single class name", () => {
    it(`should return className={clsx("a")}`, () => {
      const result = convertClassName(`className="a"`);
      expect(result).toBe(`className={clsx("a")}`);
    });
  });

  describe("multiple class names", () => {
    it(`should return className={clsx("a", "b")}`, () => {
      const result = convertClassName(`className="a b"`);
      expect(result).toBe(`className={clsx("a", "b")}`);
    });
  });

  describe("{} is optional", () => {
    it(`should return className={clsx("a")}`, () => {
      const result = convertClassName(`className={"a"}`);
      expect(result).toBe(`className={clsx("a")}`);
    });
  });
});
