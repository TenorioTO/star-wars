import { getContrast70 } from "../getContrast70";

test('getContrast70 returns "white" for dark colors', () => {
  expect(getContrast70("#000000")).toBe("white");
});

test('getContrast70 returns "black" for light colors', () => {
  expect(getContrast70("#ffffff")).toBe("black");
});

test('getContrast70 returns "black" for undefined colors', () => {
  expect(getContrast70()).toBe("black");
});
