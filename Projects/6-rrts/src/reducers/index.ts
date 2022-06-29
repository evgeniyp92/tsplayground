import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

// export type StoreState = ReturnType<typeof rootReducer>;

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
