import { OrbitCompModule } from './orbit-comp.module';

describe('OrbitCompModule', () => {
  let orbitCompModule: OrbitCompModule;

  beforeEach(() => {
    orbitCompModule = new OrbitCompModule();
  });

  it('should create an instance', () => {
    expect(orbitCompModule).toBeTruthy();
  });
});
