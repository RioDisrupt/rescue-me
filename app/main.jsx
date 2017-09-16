'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <Router>
      <Route path="/" component={ExampleApp}/>
      <Route path='*' component={NotFound} />
    </Router>
)

render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('main')
)
