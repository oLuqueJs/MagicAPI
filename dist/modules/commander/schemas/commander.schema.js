"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommanderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CommanderSchema = new mongoose_1.Schema({
    name: String,
    mana_cost: String,
    type_line: String,
    oracle_text: String,
    colors: [String],
    image_uris: {
        normal: String,
    },
});
//# sourceMappingURL=commander.schema.js.map