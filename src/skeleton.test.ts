import camelCase from "./skeleton";

test("sum adds two numbers", () => {
  expect(camelCase("")).toBe("");
  expect(camelCase("lubie jesc placki")).toBe("LubieJescPlacki");
  expect(camelCase("katakumby")).toBe("Katakumby");
  expect(camelCase("potatoes are the best vegetables")).toBe("PotatoesAreTheBestVegetables");
});
