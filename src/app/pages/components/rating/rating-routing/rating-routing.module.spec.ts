import { RatingRoutingModule } from './rating-routing.module';

describe('RatingRoutingModule', () => {
  let ratingRoutingModule: RatingRoutingModule;

  beforeEach(() => {
    ratingRoutingModule = new RatingRoutingModule();
  });

  it('should create an instance', () => {
    expect(ratingRoutingModule).toBeTruthy();
  });
});
