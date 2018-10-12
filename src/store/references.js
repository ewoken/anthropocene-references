import references from '../references';
import { NO_TAG } from './tags';

const initialReferences = references
  .map((reference, index) => ({
    id: index,
    ...reference,
    tags: reference.tags || [NO_TAG],
  }))
  .reverse();

function referenceReducer(state = initialReferences) {
  return state;
}

export function referencesSelector(state) {
  return state.references;
}

export default referenceReducer;
