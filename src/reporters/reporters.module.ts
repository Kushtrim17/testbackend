import { Module } from '@nestjs/common';
import { ReportersController } from './reporters.controller';
import { ReportersService } from './reporters.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reporter } from './entities/reporter.entity';
import { GoogleAuth } from './entities/google-auth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reporter, GoogleAuth])],
  controllers: [ReportersController],
  providers: [ReportersService],
  exports: [ReportersService],
})
export class ReportersModule {}
