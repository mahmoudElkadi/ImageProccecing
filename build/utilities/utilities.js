"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var sharpFunc = function (name, width, height) {
    (0, sharp_1.default)(path_1.default.resolve("./images/".concat(name, ".jpg")))
        .resize(height, width)
        .toFile(path_1.default.resolve("./resized-image/".concat(name, "-Width=").concat(width, "-height=").concat(height, ".jpg")));
};
exports.default = sharpFunc;
