import { FetchTodosAction, Todo } from '../actions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.FetchTodos:
      return action.payload;
    default:
      return state;
  }
};
