import { AllCountriesModule } from './all-countries.module';

describe('AllCountriesModule', () => {
  let allCountriesModule: AllCountriesModule;

  beforeEach(() => {
    allCountriesModule = new AllCountriesModule();
  });

  it('should create an instance', () => {
    expect(allCountriesModule).toBeTruthy();
  });
});
