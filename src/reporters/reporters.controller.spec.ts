import { Test, TestingModule } from '@nestjs/testing';
import { ReportersController } from './reporters.controller';

describe('Reporters Controller', () => {
  let controller: ReportersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportersController],
    }).compile();

    controller = module.get<ReportersController>(ReportersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
