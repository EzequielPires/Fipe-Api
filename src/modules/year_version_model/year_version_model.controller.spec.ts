import { Test, TestingModule } from '@nestjs/testing';
import { YearVersionModelController } from './year_version_model.controller';
import { YearVersionModelService } from './year_version_model.service';

describe('YearVersionModelController', () => {
  let controller: YearVersionModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YearVersionModelController],
      providers: [YearVersionModelService],
    }).compile();

    controller = module.get<YearVersionModelController>(YearVersionModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
