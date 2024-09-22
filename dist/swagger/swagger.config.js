"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerCustomOptions = exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle('Magic API')
    .setDescription('API para gerenciar decks e comandantes')
    .setVersion('1.0')
    .addTag('cards', 'Gerenciamento de cartas de Magic: The Gathering')
    .addTag('commanders', 'Gerenciamento de comandantes')
    .addTag('decks', 'Gerenciamento de decks')
    .addTag('User', 'Gerenciamento de Usuario')
    .build();
exports.swaggerCustomOptions = {
    swaggerOptions: {
        filter: true,
        showRequestDuration: true,
    },
    customSiteTitle: 'Magic API Docs',
};
//# sourceMappingURL=swagger.config.js.map