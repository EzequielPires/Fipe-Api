import { Test, TestingModule } from '@nestjs/testing';
import { VersionModelController } from './version_model.controller';
import { VersionModelService } from './version_model.service';

describe('VersionModelController', () => {
  let controller: VersionModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionModelController],
      providers: [VersionModelService],
    }).compile();

    controller = module.get<VersionModelController>(VersionModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
