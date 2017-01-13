import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { config } from './firebase';
import reducers from './reducers';
import Routes from './router';
import '../style/style.css';

class App extends Component {
  componentDidMount() {
		firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
