import { LAST_NAMES } from '../../constants/last-names';
import { pick } from '../pick';

export const lastname = () => pick(...LAST_NAMES);
