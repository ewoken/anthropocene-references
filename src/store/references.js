import references from '../references';

function referenceReducer(state = references) {
  return state;
}

export function referencesSelector(state) {
  return state.references;
}

export default referenceReducer;
