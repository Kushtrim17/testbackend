import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { GoogleAuth } from './google-auth.entity';

@Entity()
export class Reporter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ default: false })
  isAnonymous: boolean;

  @Column()
  joinDate: Date;

  @OneToOne(type => GoogleAuth)
  @JoinColumn()
  googleAuth: GoogleAuth;
}
