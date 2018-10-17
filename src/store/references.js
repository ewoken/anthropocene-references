import references from '../references';
import { NO_TAG } from './tags';

function computeTags(tags) {
  if (!tags || tags.length < 1) {
    return [NO_TAG];
  }

  return tags;
}

const initialReferences = references
  .map((reference, index) => ({
    id: index,
    ...reference,
    tags: computeTags(reference.tags),
  }))
  .reverse();

function referenceReducer(state = initialReferences) {
  return state;
}

export function referencesSelector(state) {
  return state.references;
}

export default referenceReducer;
