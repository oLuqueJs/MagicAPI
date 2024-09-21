import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RolesGuard } from './modules/user/roles/roles.guard';
import { swaggerConfig, swaggerCustomOptions } from './swagger/swagger.config';
import { MongooseModule } from '@nestjs/mongoose';

// Precisa finalizar implementação da AUTH.
// Implementar CRUD de users e configurar roles.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document, swaggerCustomOptions);

  await app.listen(3000);
}
bootstrap();
