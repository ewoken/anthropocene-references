import { sortBy } from 'ramda';

import references from '../references';

const initialReferences = sortBy(r => r.title, references);

function referenceReducer(state = initialReferences) {
  return state;
}

export function referencesSelector(state) {
  return state.references;
}

export default referenceReducer;
