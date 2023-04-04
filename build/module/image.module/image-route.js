"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_controller_1 = __importDefault(require("./controller/image.controller"));
var middleware_1 = __importDefault(require("../../middleware/middleware"));
var imageRouter = express_1.default.Router();
imageRouter.get('/image', middleware_1.default.valdationImage, middleware_1.default.existIamge, image_controller_1.default);
exports.default = imageRouter;
