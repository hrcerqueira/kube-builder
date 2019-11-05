import { configureStore, Action } from 'redux-starter-kit'
import { ThunkAction } from 'redux-thunk'

import rootReducer, { RootState } from './root';

const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;