import { randomColours } from "../randomColours";

test("randomColours returns a valid hex color", () => {
  const color = randomColours();
  expect(color).toMatch(/^#[0-9a-f]{6}$/i);
});
