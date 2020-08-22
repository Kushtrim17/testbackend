import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Artifact } from './artifact.entity';

@Entity()
export class ArtifactType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  iconURL: string;

  // @ManyToOne(
  //   type => Artifact,
  //   artifact => artifact.artifactType,
  // )
  // artifact: Artifact;

  @OneToMany(
    type => Artifact,
    artifact => artifact.artifactType,
  )
  artifact: ArtifactType;
}
