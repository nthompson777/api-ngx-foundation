import { TypeaheadRoutingModule } from './typeahead-routing.module';

describe('TypeaheadRoutingModule', () => {
  let typeaheadRoutingModule: TypeaheadRoutingModule;

  beforeEach(() => {
    typeaheadRoutingModule = new TypeaheadRoutingModule();
  });

  it('should create an instance', () => {
    expect(typeaheadRoutingModule).toBeTruthy();
  });
});
