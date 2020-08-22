import { Module } from '@nestjs/common';
import { ArtifactsController } from './artifacts.controller';
import { ArtifactsService } from './artifacts.service';
import { Artifact } from './entities/artifact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtifactType } from './entities/artifactType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artifact, ArtifactType])],
  controllers: [ArtifactsController],
  providers: [ArtifactsService],
})
export class ArtifactsModule {}
