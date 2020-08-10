import { SafetyPipe } from './safety.pipe';

describe('SafetyPipe', () => {
  it('create an instance', () => {
    const pipe = new SafetyPipe();
    expect(pipe).toBeTruthy();
  });
});
