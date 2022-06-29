import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidMount() {
    // this.props.fetchTodos();
  }

  componentDidUpdate(previousProps: AppProps): void {
    if (!previousProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo): JSX.Element => {
      return (
        <div
          key={todo.id}
          onClick={() => this.onTodoClick(todo.id)}
          style={{
            cursor: 'pointer',
            border: '1px solid gray',
            borderRadius: '0.25rem',
            padding: '0.25rem',
            margin: '0.5rem',
          }}
        >
          {todo.title}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onButtonClick}>Fetch</button>
          {this.state.fetching ? 'Loading...' : null}
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

const mapDispatchToProps = { fetchTodos, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(App);
