"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = process.env.PORT || 1200;
var routes_1 = __importDefault(require("./Routes/routes"));
//app.use(express.json());
app.use('/api', routes_1.default);
app.listen(port, function () { return console.log("Example app listening on port ".concat(port, "!")); });
exports.default = app;
