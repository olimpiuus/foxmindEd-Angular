import { JSONStrPipe } from './JSON-str.pipe';

describe('JSONStrPipe', () => {
  it('create an instance', () => {
    const pipe = new JSONStrPipe();
    expect(pipe).toBeTruthy();
  });
});
