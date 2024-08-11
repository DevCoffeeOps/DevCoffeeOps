import { queryPlaces } from './query-places';

describe('queryPlaces', () => {
  it('should work', () => {
    expect(queryPlaces()).toEqual('query-places');
  });
});
