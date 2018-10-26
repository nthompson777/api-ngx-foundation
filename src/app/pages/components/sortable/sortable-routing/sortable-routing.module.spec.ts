import { SortableRoutingModule } from './sortable-routing.module';

describe('SortableRoutingModule', () => {
  let sortableRoutingModule: SortableRoutingModule;

  beforeEach(() => {
    sortableRoutingModule = new SortableRoutingModule();
  });

  it('should create an instance', () => {
    expect(sortableRoutingModule).toBeTruthy();
  });
});
