import { describe, it, expect } from "vitest";

describe("Testing", () => {
  it.todo("Eventually I'll write this");
  it("checks that 1 equals 1", () => {
    expect(1).toBe(1);
  });
  it("checks that 2 doesn't equal 3", () => {
    expect(2).not.toBe(3);
  });
});
