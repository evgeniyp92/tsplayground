import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

// setting up a response interface
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// dispatch interface
export interface FetchTodosAction {
  type: ActionTypes.FetchTodos;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // telling axios what to expect to get back
    const res = await axios.get<Todo[]>(
      'http://jsonplaceholder.typicode.com/todos'
    );
    // limiting what can be dispatched within this scope
    dispatch<FetchTodosAction>({
      type: ActionTypes.FetchTodos,
      payload: res.data,
    });
  };
};
