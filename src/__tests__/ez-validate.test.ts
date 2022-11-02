import {
  isEmpty,
  isObjectEmpty,
  isNotEmpty,
  areObjectsEmpty,
  isEmail,
} from "../ez-validate";

test("isEmpty", () => {
  expect(isEmpty("hello", { removeWhiteSpaces: false })).toBe(false);
  expect(isEmpty("hello", { removeWhiteSpaces: true })).toBe(false);
  expect(isEmpty("  ", { removeWhiteSpaces: true })).toBe(true);
  expect(isEmpty("  ", { removeWhiteSpaces: false })).toBe(false);
  expect(isEmpty("", { removeWhiteSpaces: false })).toBe(true);
  expect(isEmpty("", { removeWhiteSpaces: true })).toBe(true);
});

test("isObjectEmpty", () => {
  expect(isObjectEmpty({})).toBe(true);
  expect(isObjectEmpty({ name: "tst" })).toBe(false);
});

test("isNotEmpty", () => {
  expect(isNotEmpty("", { removeWhiteSpaces: true })).toBe(false);
  expect(isNotEmpty("", { removeWhiteSpaces: false })).toBe(false);
  expect(isNotEmpty("  ", { removeWhiteSpaces: false })).toBe(true);
  expect(isNotEmpty("  ", { removeWhiteSpaces: true })).toBe(false);
  expect(isNotEmpty("adffvv")).toBe(true);
});

test("areObjectsEmpty", () => {
  expect(areObjectsEmpty([{}, {}, {}])).toBe(true);
  expect(areObjectsEmpty([{}, { name: "tst" }, {}])).toBe(false);
});

test("isEmail", () => {
  expect(isEmail("saman@yahoo.com", { removeWhiteSpaces: false })).toBe(true);
  expect(isEmail("saman@yahoo.com", { removeWhiteSpaces: true })).toBe(true);
  expect(isEmail("saman@  yahoo  .com", { removeWhiteSpaces: false })).toBe(false);
  expect(isEmail("saman@yah  oo  .   com", { removeWhiteSpaces: true })).toBe(false);
  expect(isEmail("   ", {removeWhiteSpaces: true})).toBe(false)
  expect(isEmail("    ", {removeWhiteSpaces: false})).toBe(false)
});
