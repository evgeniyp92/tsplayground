import axios from 'axios';
import { Dispatch } from 'redux';

enum ReduxActions {
  FetchTodos = 'FETCH_TODOS',
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/todos');
    dispatch({
      type: ReduxActions.FetchTodos,
      payload: res.data,
    });
  };
};
