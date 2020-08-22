import { Test, TestingModule } from '@nestjs/testing';
import { ReportersService } from './reporters.service';

describe('ReportersService', () => {
  let service: ReportersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportersService],
    }).compile();

    service = module.get<ReportersService>(ReportersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
