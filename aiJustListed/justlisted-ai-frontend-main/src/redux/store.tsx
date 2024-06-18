// src/store/store.ts
import { createStore, combineReducers } from 'redux';
import { premadeReducer } from './reducers/premadeReducer';
import { loaderReducer } from './reducers/loaderReducer';

const rootReducer = combineReducers({
    premade:premadeReducer,
    loader:loaderReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
