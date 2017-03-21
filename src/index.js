import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { browserHistory } from 'react-router';

import Routes from './routes';
import './index.scss';

const store = createStore(
    combineReducers({
        form: formReducer,
        routing: routerReducer
    })
);
const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
    <Provider store={store}>
        <Routes history={history}/>
    </Provider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);
