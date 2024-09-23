import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardModule } from './modules/card/card.module';
import { CommanderModule } from './modules/commander/commander.module';
import { DeckModule } from './modules/deck/deck.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './modules/user/roles/roles.guard';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/magicdb'),
    CardModule,
    CommanderModule,
    DeckModule,
    UsersModule,
    AuthModule
  ],
})
export class AppModule { }
