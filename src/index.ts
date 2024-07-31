import { doubleNumber, myName } from '@/utils';

export function getMyName(): string {
  return myName();
}

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export { doubleNumber };
