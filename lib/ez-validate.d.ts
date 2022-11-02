import { AnyKindOfObject } from "./interfaces/interfaces";
declare const isEmpty: (text: string, config?: import("./interfaces/interfaces").EmptyStringConfig) => boolean;
declare const isNotEmpty: (text: string, config?: import("./interfaces/interfaces").EmptyStringConfig) => boolean;
declare const isEmail: (text: string, config?: import("./interfaces/interfaces").EmptyStringConfig) => boolean;
declare const isObjectEmpty: (object: AnyKindOfObject) => boolean;
declare const areObjectsEmpty: (objects: AnyKindOfObject[]) => boolean;
export { isEmpty, isNotEmpty, isEmail, isObjectEmpty, areObjectsEmpty };
