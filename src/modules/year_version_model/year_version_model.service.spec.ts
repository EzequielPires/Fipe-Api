import { Test, TestingModule } from '@nestjs/testing';
import { YearVersionModelService } from './year_version_model.service';

describe('YearVersionModelService', () => {
  let service: YearVersionModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YearVersionModelService],
    }).compile();

    service = module.get<YearVersionModelService>(YearVersionModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
