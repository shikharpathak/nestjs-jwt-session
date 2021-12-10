import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.seriealizer';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRET',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  // imports: [UsersModule, PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  // providers: [AuthService, LocalStrategy, SessionSerializer],
  exports: [AuthService],
})
export class AuthModule {}
