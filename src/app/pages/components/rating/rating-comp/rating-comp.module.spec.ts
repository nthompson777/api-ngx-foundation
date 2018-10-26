import { RatingCompModule } from './rating-comp.module';

describe('RatingCompModule', () => {
  let ratingCompModule: RatingCompModule;

  beforeEach(() => {
    ratingCompModule = new RatingCompModule();
  });

  it('should create an instance', () => {
    expect(ratingCompModule).toBeTruthy();
  });
});
