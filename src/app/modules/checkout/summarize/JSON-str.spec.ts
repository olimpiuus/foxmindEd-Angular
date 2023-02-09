import { JSONStrPipe } from './JSON-str';

describe('JSONStrPipe', () => {
  it('create an instance', () => {
    const pipe = new JSONStrPipe();
    expect(pipe).toBeTruthy();
  });
});
