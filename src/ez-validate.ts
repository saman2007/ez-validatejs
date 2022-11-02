import { emptyStringDefaultConfig } from "./defaults";
import { AnyKindOfObject } from "./interfaces/interfaces";
import { emailRegex } from "./regex";

const isEmpty = (text: string, config = emptyStringDefaultConfig) => {
  if (config.removeWhiteSpaces) {
    return text.trim().length === 0;
  } else {
    return text.length === 0;
  }
};

const isNotEmpty = (text: string, config = emptyStringDefaultConfig) => {
  if (config.removeWhiteSpaces) {
    return text.trim().length !== 0;
  } else return text.length !== 0;
};

const isEmail = (text: string, config = emptyStringDefaultConfig) => {
  if (config.removeWhiteSpaces) {
    return emailRegex.test(text.trim());
  } else {
    return emailRegex.test(text);
  }
};

const isObjectEmpty = (object: AnyKindOfObject) =>
  Object.keys(object).length === 0;

const areObjectsEmpty = (objects: AnyKindOfObject[]) =>
  !objects.some((object) => !isObjectEmpty(object));

export { isEmpty, isNotEmpty, isEmail, isObjectEmpty, areObjectsEmpty };
