import { combineReducers } from 'redux-starter-kit'

import descriptorReducer from './descriptor';

const rootReducer = combineReducers({
    descriptor:  descriptorReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;