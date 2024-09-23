"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommanderModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const commander_controller_1 = require("./commander.controller");
const commander_service_1 = require("./commander.service");
const commander_schema_1 = require("./schemas/commander.schema");
let CommanderModule = class CommanderModule {
};
exports.CommanderModule = CommanderModule;
exports.CommanderModule = CommanderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Commander', schema: commander_schema_1.CommanderSchema }]),
        ],
        controllers: [commander_controller_1.CommanderController],
        providers: [commander_service_1.CommanderService],
    })
], CommanderModule);
//# sourceMappingURL=commander.module.js.map