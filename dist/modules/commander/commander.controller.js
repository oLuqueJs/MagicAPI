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
exports.CommanderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const commander_service_1 = require("./commander.service");
let CommanderController = class CommanderController {
    constructor(commanderService) {
        this.commanderService = commanderService;
    }
    async getCommanderById(id) {
        return this.commanderService.getCommanderById(id);
    }
    async getCommanderByColor(color) {
        return this.commanderService.getCommanderByColor(color);
    }
    async getRandomCommander() {
        return this.commanderService.getRandomCommander();
    }
};
exports.CommanderController = CommanderController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID do comandante' }),
    (0, swagger_1.ApiOperation)({ summary: 'Obter um comandante por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna um comandante.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommanderController.prototype, "getCommanderById", null);
__decorate([
    (0, common_1.Get)('/color/:color'),
    (0, swagger_1.ApiParam)({ name: 'color', description: 'Cor do comandante' }),
    (0, swagger_1.ApiOperation)({ summary: 'Obter um comandante por cor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna um comandante.' }),
    __param(0, (0, common_1.Param)('color')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommanderController.prototype, "getCommanderByColor", null);
__decorate([
    (0, common_1.Get)('/random'),
    (0, swagger_1.ApiOperation)({ summary: 'Obter um comandante aleatório' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna um comandante aleatório.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommanderController.prototype, "getRandomCommander", null);
exports.CommanderController = CommanderController = __decorate([
    (0, swagger_1.ApiTags)('commanders'),
    (0, common_1.Controller)('commanders'),
    __metadata("design:paramtypes", [commander_service_1.CommanderService])
], CommanderController);
//# sourceMappingURL=commander.controller.js.map