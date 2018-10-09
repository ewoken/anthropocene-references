const initialState = '';

const UPDATE_SEARCH_ACTION = 'search/update_search';

export function updateSearch(value) {
  return { type: UPDATE_SEARCH_ACTION, value };
}

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_ACTION:
      return action.value;
    default:
  }
  return state;
}

export function searchSelector(state) {
  return state.search;
}

export default searchReducer;
