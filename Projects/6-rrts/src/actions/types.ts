import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  FetchTodos, // = 0
  DeleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
