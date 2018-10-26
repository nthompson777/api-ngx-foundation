import { CalloutsCompModule } from './callouts-comp.module';

describe('CalloutsCompModule', () => {
  let calloutsCompModule: CalloutsCompModule;

  beforeEach(() => {
    calloutsCompModule = new CalloutsCompModule();
  });

  it('should create an instance', () => {
    expect(calloutsCompModule).toBeTruthy();
  });
});
