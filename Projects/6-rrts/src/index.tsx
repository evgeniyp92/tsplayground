import { Component } from 'react';
import { createRoot } from 'react-dom/client';

// Always describe the structure of props with an interface above the component
interface AppProps {
  color?: string;
}

class App extends Component<AppProps> {
  state: { counter: number } = { counter: 0 };

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
  createRoot(container).render(<App />);
}
