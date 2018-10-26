import { DatepickerCompModule } from './datepicker-comp.module';

describe('DatepickerCompModule', () => {
  let datepickerCompModule: DatepickerCompModule;

  beforeEach(() => {
    datepickerCompModule = new DatepickerCompModule();
  });

  it('should create an instance', () => {
    expect(datepickerCompModule).toBeTruthy();
  });
});
