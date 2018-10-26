import { OffcanvasCompModule } from './offcanvas-comp.module';

describe('OffcanvasCompModule', () => {
  let offcanvasCompModule: OffcanvasCompModule;

  beforeEach(() => {
    offcanvasCompModule = new OffcanvasCompModule();
  });

  it('should create an instance', () => {
    expect(offcanvasCompModule).toBeTruthy();
  });
});
