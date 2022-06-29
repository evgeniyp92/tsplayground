import { FetchTodosAction, Todo, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.FetchTodos:
      return action.payload;
    default:
      return state;
  }
};
