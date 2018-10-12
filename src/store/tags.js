import { uniq } from 'ramda';
import data from '../references';

export const NO_TAG = 'ø';
const tags = uniq([].concat(...data.map(d => d.tags || [NO_TAG]))).sort();

function tagReducer(state = tags) {
  return state;
}

export function tagsSelector(state) {
  return state.tags;
}

export default tagReducer;
