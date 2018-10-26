import { DatepickerRoutingModule } from './datepicker-routing.module';

describe('DatepickerRoutingModule', () => {
  let datepickerRoutingModule: DatepickerRoutingModule;

  beforeEach(() => {
    datepickerRoutingModule = new DatepickerRoutingModule();
  });

  it('should create an instance', () => {
    expect(datepickerRoutingModule).toBeTruthy();
  });
});
