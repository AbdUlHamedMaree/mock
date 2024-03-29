import { FEMALES_FIRST_NAME, MALES_FIRST_NAME } from '../../constants/first-names';
import type { GenderUnion } from '../../types/gender';
import { pick } from '../pick';

const ret = {
  male: () => pick(...MALES_FIRST_NAME),
  female: () => pick(...FEMALES_FIRST_NAME),
  all: () => pick(...FEMALES_FIRST_NAME, ...MALES_FIRST_NAME),
};

export const firstname = (gender: GenderUnion = 'all') => ret[gender]();
