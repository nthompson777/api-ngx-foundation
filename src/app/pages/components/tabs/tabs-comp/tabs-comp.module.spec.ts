import { TabsCompModule } from './tabs-comp.module';

describe('TabsCompModule', () => {
  let tabsCompModule: TabsCompModule;

  beforeEach(() => {
    tabsCompModule = new TabsCompModule();
  });

  it('should create an instance', () => {
    expect(tabsCompModule).toBeTruthy();
  });
});
