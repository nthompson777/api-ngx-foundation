import { RevealCompModule } from './reveal-comp.module';

describe('RevealCompModule', () => {
  let revealCompModule: RevealCompModule;

  beforeEach(() => {
    revealCompModule = new RevealCompModule();
  });

  it('should create an instance', () => {
    expect(revealCompModule).toBeTruthy();
  });
});
