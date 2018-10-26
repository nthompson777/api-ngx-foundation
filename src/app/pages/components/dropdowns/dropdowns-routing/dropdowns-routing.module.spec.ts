import { DropdownsRoutingModule } from './dropdowns-routing.module';

describe('DropdownsRoutingModule', () => {
  let dropdownsRoutingModule: DropdownsRoutingModule;

  beforeEach(() => {
    dropdownsRoutingModule = new DropdownsRoutingModule();
  });

  it('should create an instance', () => {
    expect(dropdownsRoutingModule).toBeTruthy();
  });
});
