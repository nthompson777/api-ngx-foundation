import { TypeaheadCompModule } from './typeahead-comp.module';

describe('TypeaheadCompModule', () => {
  let typeaheadCompModule: TypeaheadCompModule;

  beforeEach(() => {
    typeaheadCompModule = new TypeaheadCompModule();
  });

  it('should create an instance', () => {
    expect(typeaheadCompModule).toBeTruthy();
  });
});
