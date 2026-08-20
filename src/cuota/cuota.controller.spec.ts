import { Test, TestingModule } from '@nestjs/testing';
import { CuotaController } from './cuota.controller';

describe('CuotaController', () => {
  let controller: CuotaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuotaController],
    }).compile();

    controller = module.get<CuotaController>(CuotaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
