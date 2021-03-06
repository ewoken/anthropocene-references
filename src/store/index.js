import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import typeReducer from './types';
import referenceReducer from './references';
import tagReducer from './tags';

const rootReducer = combineReducers({
  // ...reducers,
  types: typeReducer,
  references: referenceReducer,
  tags: tagReducer,
});

const enhancers = [];
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const enhancer = composeEnhancers(...enhancers);

const store = createStore(rootReducer, enhancer);

export default store;
