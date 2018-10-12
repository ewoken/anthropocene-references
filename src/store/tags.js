import { uniq } from 'ramda';
import data from '../references';

const tags = uniq([].concat(...data.map(d => d.tags || []))).sort();

function tagReducer(state = tags) {
  return state;
}

export function tagsSelector(state) {
  return state.tags;
}

export default tagReducer;
