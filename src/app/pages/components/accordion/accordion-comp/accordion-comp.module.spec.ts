import { AccordionCompModule } from './accordion-comp.module';

describe('AccordionModule', () => {
  let accordionCompModule: AccordionCompModule;

  beforeEach(() => {
    accordionCompModule = new AccordionCompModule();
  });

  it('should create an instance', () => {
    expect(accordionCompModule).toBeTruthy();
  });
});
