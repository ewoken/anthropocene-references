import { uniq } from 'ramda';
import data from '../references';

const types = uniq(data.map(d => d.type));

function typeReducer(state = types) {
  return state;
}

export default typeReducer;
