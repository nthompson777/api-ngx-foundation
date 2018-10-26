import { ProgressbarCompModule } from './progressbar-comp.module';

describe('ProgressbarCompModule', () => {
  let progressbarCompModule: ProgressbarCompModule;

  beforeEach(() => {
    progressbarCompModule = new ProgressbarCompModule();
  });

  it('should create an instance', () => {
    expect(progressbarCompModule).toBeTruthy();
  });
});
