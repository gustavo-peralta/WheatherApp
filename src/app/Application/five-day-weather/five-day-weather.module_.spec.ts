import { FiveDayWeatherModule } from './five-day-weather.module';

describe('FiveDayWeatherModule', () => {
  let fiveDayWeatherModule: FiveDayWeatherModule;

  beforeEach(() => {
    fiveDayWeatherModule = new FiveDayWeatherModule();
  });

  it('should create an instance', () => {
    expect(fiveDayWeatherModule).toBeTruthy();
  });
});
