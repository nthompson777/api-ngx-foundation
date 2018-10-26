import { AccordionRoutingModule } from './accordion-routing.module';

describe('AccordionRoutingModule', () => {
  let accordionRoutingModule: AccordionRoutingModule;

  beforeEach(() => {
    accordionRoutingModule = new AccordionRoutingModule();
  });

  it('should create an instance', () => {
    expect(accordionRoutingModule).toBeTruthy();
  });
});
