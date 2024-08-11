import { assertEnvVar } from './assert-env-var';

describe('assertEnvVar', () => {
  it('should work', () => {
    expect(assertEnvVar()).toEqual('assert-env-var');
  });
});
