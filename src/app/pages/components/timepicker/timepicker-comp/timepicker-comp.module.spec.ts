import { TimepickerCompModule } from './timepicker-comp.module';

describe('TimepickerCompModule', () => {
  let timepickerCompModule: TimepickerCompModule;

  beforeEach(() => {
    timepickerCompModule = new TimepickerCompModule();
  });

  it('should create an instance', () => {
    expect(timepickerCompModule).toBeTruthy();
  });
});
