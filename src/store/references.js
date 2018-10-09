import { sortBy } from 'ramda';

import references from '../references';

const initialReferences = sortBy(r => r.title, references).map(
  (reference, index) => ({
    id: index,
    ...reference,
  }),
);

function referenceReducer(state = initialReferences) {
  return state;
}

export function referencesSelector(state) {
  return state.references;
}

export default referenceReducer;
