import { writeToStorage } from './write-to-storage';

describe('writeToStorage', () => {
  it('should work', () => {
    expect(writeToStorage()).toEqual('write-to-storage');
  });
});
