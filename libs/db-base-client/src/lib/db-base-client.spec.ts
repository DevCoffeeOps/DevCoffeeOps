import { dbBaseClient } from './db-base-client';

describe('dbBaseClient', () => {
  it('should work', () => {
    expect(dbBaseClient()).toEqual('db-base-client');
  });
});
