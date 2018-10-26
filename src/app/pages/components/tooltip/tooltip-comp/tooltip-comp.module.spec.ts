import { TooltipCompModule } from './tooltip-comp.module';

describe('TooltipCompModule', () => {
  let tooltipCompModule: TooltipCompModule;

  beforeEach(() => {
    tooltipCompModule = new TooltipCompModule();
  });

  it('should create an instance', () => {
    expect(tooltipCompModule).toBeTruthy();
  });
});
