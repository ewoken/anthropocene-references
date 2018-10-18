import { uniq, sortBy } from 'ramda';
import data from '../references';

function removeDiacritics(tag) {
  return tag.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const NO_TAG = '-';
const tags = sortBy(
  t => removeDiacritics(t).toLowerCase(),
  uniq([].concat(...data.map(d => d.tags || []))),
);
tags.push(NO_TAG);

function tagReducer(state = tags) {
  return state;
}

export function tagsSelector(state) {
  return state.tags;
}

export default tagReducer;
