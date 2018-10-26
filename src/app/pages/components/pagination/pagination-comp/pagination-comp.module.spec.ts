import { PaginationCompModule } from './pagination-comp.module';

describe('PaginationCompModule', () => {
  let paginationCompModule: PaginationCompModule;

  beforeEach(() => {
    paginationCompModule = new PaginationCompModule();
  });

  it('should create an instance', () => {
    expect(paginationCompModule).toBeTruthy();
  });
});
