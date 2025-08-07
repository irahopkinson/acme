import { platform } from './platform.js';

describe('platform', () => {
  it('should work', () => {
    expect(platform()).toEqual('platform');
  });
});
