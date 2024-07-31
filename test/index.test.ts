import { describe, it, expect } from 'vitest';
import { doubleNumber, getMyName, greet } from '@/index';

describe('greet', () => {
  it('should return a greeting message', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});

describe('getMyName', () => {
  it('should return a greeting message', () => {
    expect(getMyName()).toBe('Well Do It Too');
  });
});

describe('doubleNumber', () => {
  it('should double the given number', () => {
    expect(doubleNumber(5)).toBe(10);
  });
});
