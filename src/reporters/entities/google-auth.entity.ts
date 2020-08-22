import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GoogleAuth {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  googleId: string;

  @Column()
  accessToken: string;

  @Column()
  expiresAt: string;

  @Column()
  expiresIn: string;

  @Column()
  firstIssuedAt: string;

  @Column()
  idToken: string;

  @Column()
  imageUrl: string;
}
