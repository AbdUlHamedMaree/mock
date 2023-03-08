import { number } from '../number';

export const pick = <T>(...args: T[]): T => args[number(0, args.length)];
