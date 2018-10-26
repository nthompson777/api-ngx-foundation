import { PaginationRoutingModule } from './pagination-routing.module';

describe('PaginationRoutingModule', () => {
  let paginationRoutingModule: PaginationRoutingModule;

  beforeEach(() => {
    paginationRoutingModule = new PaginationRoutingModule();
  });

  it('should create an instance', () => {
    expect(paginationRoutingModule).toBeTruthy();
  });
});
