import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

// setting up a response interface
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // telling axios what to expect to get back
    const res = await axios.get<Todo[]>(
      'http://jsonplaceholder.typicode.com/todos'
    );
    dispatch({
      type: ActionTypes.FetchTodos,
      payload: res.data,
    });
  };
};
