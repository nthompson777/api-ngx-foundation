import { TooltipRoutingModule } from './tooltip-routing.module';

describe('TooltipRoutingModule', () => {
  let tooltipRoutingModule: TooltipRoutingModule;

  beforeEach(() => {
    tooltipRoutingModule = new TooltipRoutingModule();
  });

  it('should create an instance', () => {
    expect(tooltipRoutingModule).toBeTruthy();
  });
});
