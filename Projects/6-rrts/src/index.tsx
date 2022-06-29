import { Component } from 'react';
import { createRoot } from 'react-dom/client';

// Always describe the structure of props with an interface above the component
// You have to override the default, readonly empty objects
interface AppProps {
  color?: string;
}

// Would have been passed as the second generic
// interface AppState {
//   counter: number;
// }

// example of a functional component
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

class App extends Component<AppProps> {
  // annoying, finicky way of setting up state
  // constructor(props: AppProps) {
  //   super(props);

  //   this.state = { counter: 0 };
  // }

  // simpler way of setting up state, via overriding
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App color="red" />);
}
