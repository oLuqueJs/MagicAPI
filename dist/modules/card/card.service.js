"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let CardService = class CardService {
    constructor() {
        this.SCRYFALL_API_BASE_URL = 'https://api.scryfall.com';
    }
    async getCardById(id) {
        try {
            const response = await axios_1.default.get(`${this.SCRYFALL_API_BASE_URL}/cards/${id}`);
            return response.data;
        }
        catch (error) {
            throw new common_1.NotFoundException('Carta não encontrada.');
        }
    }
};
exports.CardService = CardService;
exports.CardService = CardService = __decorate([
    (0, common_1.Injectable)()
], CardService);
//# sourceMappingURL=card.service.js.map