"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommanderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CommanderSchema = new mongoose_1.Schema({
    username: String,
    email: String,
    password: String,
    role: String
});
//# sourceMappingURL=user.schema.js.map