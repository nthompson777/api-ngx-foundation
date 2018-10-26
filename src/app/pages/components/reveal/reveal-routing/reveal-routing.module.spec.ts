import { RevealRoutingModule } from './reveal-routing.module';

describe('RevealRoutingModule', () => {
  let revealRoutingModule: RevealRoutingModule;

  beforeEach(() => {
    revealRoutingModule = new RevealRoutingModule();
  });

  it('should create an instance', () => {
    expect(revealRoutingModule).toBeTruthy();
  });
});
