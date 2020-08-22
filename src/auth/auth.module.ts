import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ReportersModule } from '../reporters/reporters.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [ReportersModule, PassportModule],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
