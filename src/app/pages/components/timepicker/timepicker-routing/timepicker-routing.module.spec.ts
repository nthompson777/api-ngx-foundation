import { TimepickerRoutingModule } from './timepicker-routing.module';

describe('TimepickerRoutingModule', () => {
  let timepickerRoutingModule: TimepickerRoutingModule;

  beforeEach(() => {
    timepickerRoutingModule = new TimepickerRoutingModule();
  });

  it('should create an instance', () => {
    expect(timepickerRoutingModule).toBeTruthy();
  });
});
