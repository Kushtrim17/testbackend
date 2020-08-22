import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Reporter as IReporter } from './interfaces/reporter.interface';
import { ReporterDto, CreateReporterDto, ReporterGoogleAuthDto } from './dto/create-reporter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reporter } from './entities/reporter.entity';
import { Repository } from 'typeorm';
import { GoogleAuth } from './entities/google-auth.entity';
import { report } from 'process';

@Injectable()
export class ReportersService {
  private readonly reporters: IReporter[];

  constructor(
    @InjectRepository(Reporter)
    private reporterRepository: Repository<Reporter>,
    @InjectRepository(GoogleAuth)
    private reporterGoogleAuth: Repository<GoogleAuth>,
  ) {}

  async findAll(): Promise<Reporter[]> {
    return await this.reporterRepository.find();
  }

  async findOne(email: string): Promise<Reporter> {
    return await this.reporterRepository.findOne({ email });
  }

  async create(userDetails: CreateReporterDto): Promise<any> {
    const googleAuth = new GoogleAuth();
    googleAuth.accessToken = userDetails.googleAuth.accessToken;
    googleAuth.expiresAt = userDetails.googleAuth.expiresAt;
    googleAuth.expiresIn = userDetails.googleAuth.expiresAt;
    googleAuth.firstIssuedAt = userDetails.googleAuth.firstIssuedAt;
    googleAuth.googleId = userDetails.googleAuth.googleId;
    googleAuth.idToken = userDetails.googleAuth.idToken;
    googleAuth.imageUrl = userDetails.googleAuth.imageUrl;
    const reporterGoogleAuth = await this.reporterGoogleAuth.save(googleAuth);

    const reporter = new Reporter();
    reporter.isAnonymous = false;
    reporter.googleAuth = reporterGoogleAuth;
    reporter.email = userDetails.reporter.email;
    reporter.name = userDetails.reporter.name;
    reporter.surname = userDetails.reporter.surname;
    reporter.joinDate = new Date();
    reporter.username = userDetails.reporter.email;
    const savedReporter = await this.reporterRepository.save(reporter);

    return savedReporter;
  }

  async authenticate(email: string, password: string): Promise<Reporter | null> {
    const reporter = await this.reporterRepository.findOne({ email }, { relations: ['googleAuth'] });

    if (!reporter) {
      throw new Error('Username does not exist');
    }

    return reporter;
  }
}
