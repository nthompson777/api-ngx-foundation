import { ProgressbarRoutingModule } from './progressbar-routing.module';

describe('ProgressbarRoutingModule', () => {
  let progressbarRoutingModule: ProgressbarRoutingModule;

  beforeEach(() => {
    progressbarRoutingModule = new ProgressbarRoutingModule();
  });

  it('should create an instance', () => {
    expect(progressbarRoutingModule).toBeTruthy();
  });
});
