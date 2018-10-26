import { OffcanvasRoutingModule } from './offcanvas-routing.module';

describe('OffcanvasRoutingModule', () => {
  let offcanvasRoutingModule: OffcanvasRoutingModule;

  beforeEach(() => {
    offcanvasRoutingModule = new OffcanvasRoutingModule();
  });

  it('should create an instance', () => {
    expect(offcanvasRoutingModule).toBeTruthy();
  });
});
