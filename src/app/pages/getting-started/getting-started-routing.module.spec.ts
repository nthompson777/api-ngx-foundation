import { GettingStartedRoutingModule } from './getting-started-routing.module';

describe('GettingStartedRoutingModule', () => {
  let gettingStartedRoutingModule: GettingStartedRoutingModule;

  beforeEach(() => {
    gettingStartedRoutingModule = new GettingStartedRoutingModule();
  });

  it('should create an instance', () => {
    expect(gettingStartedRoutingModule).toBeTruthy();
  });
});
