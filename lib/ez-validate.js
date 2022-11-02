"use strict";
exports.__esModule = true;
exports.areObjectsEmpty = exports.isObjectEmpty = exports.isEmail = exports.isNotEmpty = exports.isEmpty = void 0;
var defaults_1 = require("./defaults");
var regex_1 = require("./regex");
var isEmpty = function (text, config) {
    if (config === void 0) { config = defaults_1.emptyStringDefaultConfig; }
    if (config.removeWhiteSpaces) {
        return text.trim().length === 0;
    }
    else {
        return text.length === 0;
    }
};
exports.isEmpty = isEmpty;
var isNotEmpty = function (text, config) {
    if (config === void 0) { config = defaults_1.emptyStringDefaultConfig; }
    if (config.removeWhiteSpaces) {
        return text.trim().length !== 0;
    }
    else
        return text.length !== 0;
};
exports.isNotEmpty = isNotEmpty;
var isEmail = function (text, config) {
    if (config === void 0) { config = defaults_1.emptyStringDefaultConfig; }
    if (config.removeWhiteSpaces) {
        return regex_1.emailRegex.test(text.trim());
    }
    else {
        return regex_1.emailRegex.test(text);
    }
};
exports.isEmail = isEmail;
var isObjectEmpty = function (object) {
    return Object.keys(object).length === 0;
};
exports.isObjectEmpty = isObjectEmpty;
var areObjectsEmpty = function (objects) {
    return !objects.some(function (object) { return !isObjectEmpty(object); });
};
exports.areObjectsEmpty = areObjectsEmpty;
