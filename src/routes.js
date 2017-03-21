import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import SearchPage from './search-page/search-page-container';

const Routes = props => {
    return (
    <Router history={props.history}>
        <Route path="/" component={App} />
        <Route path="/search" component={SearchPage} />

    </Router>
    );
};

export default Routes;