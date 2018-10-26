import { CalloutsRoutingModule } from './callouts-routing.module';

describe('CalloutsRoutingModule', () => {
  let calloutsRoutingModule: CalloutsRoutingModule;

  beforeEach(() => {
    calloutsRoutingModule = new CalloutsRoutingModule();
  });

  it('should create an instance', () => {
    expect(calloutsRoutingModule).toBeTruthy();
  });
});
