import { OrbitRoutingModule } from './orbit-routing.module';

describe('OrbitRoutingModule', () => {
  let orbitRoutingModule: OrbitRoutingModule;

  beforeEach(() => {
    orbitRoutingModule = new OrbitRoutingModule();
  });

  it('should create an instance', () => {
    expect(orbitRoutingModule).toBeTruthy();
  });
});
