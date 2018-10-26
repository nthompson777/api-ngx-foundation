import { ButtonsCompModule } from './buttons-comp.module';

describe('ButtonsCompModule', () => {
  let buttonsCompModule: ButtonsCompModule;

  beforeEach(() => {
    buttonsCompModule = new ButtonsCompModule();
  });

  it('should create an instance', () => {
    expect(buttonsCompModule).toBeTruthy();
  });
});
