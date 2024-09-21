import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './auth.constants';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core/constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard,
  }],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}