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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const roles_decorators_1 = require("./roles/decorators/roles.decorators");
const roles_guard_1 = require("./roles/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getAllUsers() {
        try {
            const users = await this.usersService.findAll();
            if (!users || users.length === 0) {
                throw new common_1.NotFoundException('Nenhum usuário encontrado.');
            }
            return users;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao buscar usuários.');
        }
    }
    async getAdminById(id) {
        try {
            const user = await this.usersService.findById(id);
            if (!user) {
                throw new common_1.NotFoundException(`Usuário com ID ${id} não foi encontrado.`);
            }
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao buscar usuário.');
        }
    }
    async getUserById(id) {
        try {
            const user = await this.usersService.findById(id);
            if (!user) {
                throw new common_1.NotFoundException(`Usuário com ID ${id} não foi encontrado.`);
            }
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Erro ao buscar usuário.');
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('admin/:id'),
    (0, roles_decorators_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAdminById", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorators_1.Roles)('user', 'admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [user_service_1.UsersService])
], UserController);
//# sourceMappingURL=user.controller.js.map