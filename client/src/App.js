import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <Navbar />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
}


export default App;
