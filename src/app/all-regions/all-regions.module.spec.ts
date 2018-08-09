import { AllRegionsModule } from './all-regions.module';

describe('AllRegionsModule', () => {
  let allRegionsModule: AllRegionsModule;

  beforeEach(() => {
    allRegionsModule = new AllRegionsModule();
  });

  it('should create an instance', () => {
    expect(allRegionsModule).toBeTruthy();
  });
});
