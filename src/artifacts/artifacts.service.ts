import { Injectable } from '@nestjs/common';
import { CreateArtifactDto } from './dto/create-artifact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artifact } from './entities/artifact.entity';

@Injectable()
export class ArtifactsService {
  // private readonly artifacts: Artifact[];

  constructor(
    @InjectRepository(Artifact)
    private reporterRepository: Repository<Artifact>,
  ) {}

  create(artifact: CreateArtifactDto) {
    // let newArtifact = new Artifact();
    // newArtifact = {
    //   ...artifact
    // }
    // this.artifacts.push(artifact);
  }

  async findAll(): Promise<Artifact[]> {
    return await this.reporterRepository.find({
      order: { dateReported: 'ASC' },
      relations: ['artifactType', 'artifactImage', 'coordinates'],
    });
  }

  async getRecent(): Promise<Artifact[]> {
    return await this.reporterRepository.find({
      order: { dateReported: 'ASC' },
      take: 4,
      relations: ['artifactType', 'artifactImage', 'coordinates'],
    });
  }

  async getArtifactById(artifactId: string) {
    return await this.reporterRepository.findOne(artifactId, {
      relations: ['artifactType', 'artifactImage', 'coordinates'],
    });
  }
}
