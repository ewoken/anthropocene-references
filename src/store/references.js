import references from '../references';

const initialReferences = references
  .map((reference, index) => ({
    id: index,
    ...reference,
  }))
  .reverse();

function referenceReducer(state = initialReferences) {
  return state;
}

export function referencesSelector(state) {
  return state.references;
}

export default referenceReducer;
