import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ArtifactCoordinates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float' })
  latitude: number;

  @Column({ type: 'float' })
  longitude: number;
}
