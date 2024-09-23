"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CardSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    mana_cost: { type: String },
    type_line: { type: String },
    oracle_text: { type: String },
    colors: [{ type: String }],
    image_uris: {
        normal: { type: String },
    },
});
//# sourceMappingURL=card.schema.js.map