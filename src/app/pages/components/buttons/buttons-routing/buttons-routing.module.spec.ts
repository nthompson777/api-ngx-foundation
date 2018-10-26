import { ButtonsRoutingModule } from './buttons-routing.module';

describe('ButtonsRoutingModule', () => {
  let buttonsRoutingModule: ButtonsRoutingModule;

  beforeEach(() => {
    buttonsRoutingModule = new ButtonsRoutingModule();
  });

  it('should create an instance', () => {
    expect(buttonsRoutingModule).toBeTruthy();
  });
});
