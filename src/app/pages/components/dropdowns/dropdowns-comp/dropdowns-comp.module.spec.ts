import { DropdownsCompModule } from './dropdowns-comp.module';

describe('DropdownsCompModule', () => {
  let dropdownsCompModule: DropdownsCompModule;

  beforeEach(() => {
    dropdownsCompModule = new DropdownsCompModule();
  });

  it('should create an instance', () => {
    expect(dropdownsCompModule).toBeTruthy();
  });
});
