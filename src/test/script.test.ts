import { testFu } from "../index";

describe("sum module", () => {
  test("Returns the correct angule", function () {
    expect(testFu()).toBe("hi");
  });
});
