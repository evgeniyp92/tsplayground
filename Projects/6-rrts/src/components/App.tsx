import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

export class App extends Component<AppProps> {
  componentDidMount() {
    // this.props.fetchTodos();
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo): JSX.Element => {
      return (
        <div
          key={todo.id}
          style={{
            cursor: 'pointer',
            border: '1px solid gray',
            borderRadius: '0.25rem',
            padding: '0.25rem',
            margin: '0.5rem',
          }}
          onClick={(e: React.MouseEvent) => {
            console.log(e.target);
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
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

const mapDispatchToProps = { fetchTodos };

export default connect(mapStateToProps, mapDispatchToProps)(App);
