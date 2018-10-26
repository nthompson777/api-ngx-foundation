import { SortableCompModule } from './sortable-comp.module';

describe('SortableCompModule', () => {
  let sortableCompModule: SortableCompModule;

  beforeEach(() => {
    sortableCompModule = new SortableCompModule();
  });

  it('should create an instance', () => {
    expect(sortableCompModule).toBeTruthy();
  });
});
