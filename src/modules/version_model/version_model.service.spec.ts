import { Test, TestingModule } from '@nestjs/testing';
import { VersionModelService } from './version_model.service';

describe('VersionModelService', () => {
  let service: VersionModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionModelService],
    }).compile();

    service = module.get<VersionModelService>(VersionModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
