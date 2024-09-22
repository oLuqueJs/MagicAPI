"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const axios_1 = require("axios");
const fs = require("fs");
const path = require("path");
let DeckService = class DeckService {
    constructor(deckModel) {
        this.deckModel = deckModel;
        this.SCRYFALL_API_BASE_URL = 'https://api.scryfall.com';
    }
    async createDeck(commanderId) {
        const commander = await this.getCommanderById(commanderId);
        const color = commander.colors.join('');
        const response = await axios_1.default.get(`${this.SCRYFALL_API_BASE_URL}/cards/search?q=color:${color}`);
        const deckCards = response.data.data.slice(0, 99);
        const deck = new this.deckModel({
            commander: commanderId,
            cards: deckCards.map(card => card.id),
        });
        return deck.save();
    }
    async getAllDecks() {
        return this.deckModel.find().exec();
    }
    async deleteDeck(id) {
        const result = await this.deckModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Deck não encontrado.');
        }
        return result;
    }
    async createRandomDeck() {
        const randomCommander = await this.getRandomCommander();
        const color = randomCommander.colors.join('');
        const response = await axios_1.default.get(`${this.SCRYFALL_API_BASE_URL}/cards/search?q=color:${color}`);
        const deckCards = response.data.data.slice(0, 99);
        const deck = new this.deckModel({
            commander: randomCommander.id,
            cards: deckCards.map(card => card.id),
        });
        return deck.save();
    }
    async saveDeckAsJson(id) {
        const deck = await this.deckModel.findById(id).exec();
        if (!deck) {
            throw new common_1.NotFoundException('Deck não encontrado.');
        }
        const filePath = path.join(__dirname, '..', '..', 'decks', `${id}.json`);
        fs.writeFileSync(filePath, JSON.stringify(deck, null, 2));
        return { message: `Deck salvo como JSON em ${filePath}.` };
    }
    async getCommanderById(id) {
        try {
            const response = await axios_1.default.get(`${this.SCRYFALL_API_BASE_URL}/cards/${id}`);
            return response.data;
        }
        catch (error) {
            throw new common_1.NotFoundException('Comandante não encontrado.');
        }
    }
    async getRandomCommander() {
        try {
            const response = await axios_1.default.get(`${this.SCRYFALL_API_BASE_URL}/cards/random?q=t:commander`);
            return response.data;
        }
        catch (error) {
            throw new common_1.NotFoundException('Comandante não encontrado.');
        }
    }
};
exports.DeckService = DeckService;
exports.DeckService = DeckService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Deck')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DeckService);
//# sourceMappingURL=deck.service.js.map