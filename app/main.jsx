'use strict'

/**
 * `babel-preset-env` converts this general import into a selection of specific
 * imports needed to polyfill the currently-supported environment (as specified
 * in `.babelrc`). As of 2017-06-04, this is primarily to support async/await.
 */
import 'babel-polyfill'

import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import TestButton from './components/button'

import Header from './components/header'
import PickScreen from './components/PickScreen'
import RescueeForm from './components/RescueeForm'
import Footer from './components/footer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

render(
  <Provider store={store}>
    <main>
      <div className="outer">
        <div className="app-container">
          <Header/>
          <Router>
            <Switch>
              <Route path='/choose' component={PickScreen} />
              <Route path='/gethelp' component={RescueeForm} />
              <Route exact path='/' component={TestButton} />
              <Route path='*' component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    </main>

  </Provider>,
  document.getElementById('main')
)
