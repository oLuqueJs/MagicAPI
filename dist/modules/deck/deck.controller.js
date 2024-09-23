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
exports.DeckController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const deck_service_1 = require("./deck.service");
let DeckController = class DeckController {
    constructor(deckService) {
        this.deckService = deckService;
    }
    async createDeck(commanderId) {
        return this.deckService.createDeck(commanderId);
    }
    async getAllDecks() {
        return this.deckService.getAllDecks();
    }
    async deleteDeck(id) {
        return this.deckService.deleteDeck(id);
    }
    async createRandomDeck() {
        return this.deckService.createRandomDeck();
    }
    async saveDeckAsJson(id) {
        return this.deckService.saveDeckAsJson(id);
    }
};
exports.DeckController = DeckController;
__decorate([
    (0, common_1.Post)('create/:commanderId'),
    (0, swagger_1.ApiParam)({ name: 'commanderId', description: 'ID do comandante' }),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um deck baseado em um comandante' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Deck criado com sucesso.' }),
    __param(0, (0, common_1.Param)('commanderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "createDeck", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos os decks criados' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de todos os decks criados.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "getAllDecks", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do deck' }),
    (0, swagger_1.ApiOperation)({ summary: 'Deletar um deck' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Deck deletado com sucesso.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "deleteDeck", null);
__decorate([
    (0, common_1.Post)('random'),
    (0, swagger_1.ApiOperation)({ summary: 'Criar um deck aleatório com base no comandante' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Deck aleatório criado com sucesso.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "createRandomDeck", null);
__decorate([
    (0, common_1.Get)('save-json/:id'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do deck' }),
    (0, swagger_1.ApiOperation)({ summary: 'Salvar deck como JSON' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Deck salvo como JSON.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "saveDeckAsJson", null);
exports.DeckController = DeckController = __decorate([
    (0, swagger_1.ApiTags)('decks'),
    (0, common_1.Controller)('decks'),
    __metadata("design:paramtypes", [deck_service_1.DeckService])
], DeckController);
//# sourceMappingURL=deck.controller.js.map