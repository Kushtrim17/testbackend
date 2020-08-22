import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Artifact } from './artifact.entity';

@Entity()
export class ArtifactImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @ManyToOne(
    type => Artifact,
    artifact => artifact.artifactImage,
  )
  artifact: Artifact;
}
