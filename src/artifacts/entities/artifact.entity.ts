import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { ArtifactType } from './artifactType.entity';
import { ArtifactImage } from './artifactImage.entity';
import { ArtifactCoordinates } from './artifactCoordinates.entity';

@Entity()
export class Artifact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
    type => ArtifactType,
    artifactType => artifactType.artifact,
  )
  artifactType: ArtifactType;

  @Column({ nullable: true })
  height: number;

  @Column({ nullable: true })
  width: number;

  @Column({ nullable: true })
  thickness: number;

  @OneToOne(type => ArtifactCoordinates)
  @JoinColumn()
  coordinates: ArtifactCoordinates;

  @Column()
  dateFound: Date;

  @Column()
  dateReported: Date;

  @Column()
  currentAddress: string;

  @OneToMany(
    type => ArtifactImage,
    image => image.artifact,
  )
  artifactImage: ArtifactImage[];

  @Column({ nullable: true })
  description: string;
}
