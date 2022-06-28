import { Component } from 'react';
import { createRoot } from 'react-dom/client';

// Always describe the structure of props with an interface above the component
interface AppProps {
  color?: string;
}

class App extends Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}
