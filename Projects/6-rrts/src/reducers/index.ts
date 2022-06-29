import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

// defining an interface to control what can be placed into the reducer
export interface StoreState {
  todos: Todo[];
}

// export type StoreState = ReturnType<typeof rootReducer>;

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
