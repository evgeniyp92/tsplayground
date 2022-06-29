import { FetchTodosAction, Todo } from '../actions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (action: FetchTodosAction, state: Todo[] = []) => {
  switch (action.type) {
    case ActionTypes.FetchTodos:
      return action.payload;
    default:
      return state;
  }
};
