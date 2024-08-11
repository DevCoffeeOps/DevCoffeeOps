import { coordinatesFromCityState } from './coordinates-from-city-state';

describe('coordinatesFromCityState', () => {
  it('should work', () => {
    expect(coordinatesFromCityState()).toEqual('coordinates-from-city-state');
  });
});
