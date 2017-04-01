import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import RepoPage from './pages/RepoPage';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RepoPage />
      </Provider>
    );
  }
}

export default App
