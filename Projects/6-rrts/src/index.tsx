import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';

import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
