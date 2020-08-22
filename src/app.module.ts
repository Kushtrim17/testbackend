import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ReportersModule } from './reporters/reporters.module';
import { ArtifactsModule } from './artifacts/artifacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from './environment/dbConfig';
import { Reporter } from './reporters/entities/reporter.entity';
import { Artifact } from './artifacts/entities/artifact.entity';
import { ArtifactType } from './artifacts/entities/artifactType.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportersService } from './reporters/reporters.service';
import { ArtifactsService } from './artifacts/artifacts.service';
import { ArtifactImage } from './artifacts/entities/artifactImage.entity';
import { ArtifactCoordinates } from './artifacts/entities/artifactCoordinates.entity';
import { GoogleAuth } from './reporters/entities/google-auth.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ArtifactsModule,
    ReportersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_CONFIG.host,
      port: DB_CONFIG.port,
      username: DB_CONFIG.username,
      password: DB_CONFIG.password,
      database: DB_CONFIG.database,
      entities: [Reporter, GoogleAuth, Artifact, ArtifactType, ArtifactImage, ArtifactCoordinates],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Reporter, GoogleAuth, Artifact, ArtifactType, ArtifactImage, ArtifactCoordinates]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'archiology/public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ReportersService, ArtifactsService, ReportersService],
})
export class AppModule {}
