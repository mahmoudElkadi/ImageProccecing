"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var client = new pg_1.Pool({
    host: "localhost",
    user: "my_day",
    port: 5432,
    password: "11400",
    database: "postgres"
});
exports.default = client;
