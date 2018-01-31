import React from 'react'
import { render } from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './static/css/common.scss'
import rootReducer from './reducers'
import AuthRoute from './components/authRoute/authroute'
import Register from './containers/register/register'
import Login from './containers/login/login'
import BossInfo from './containers/bossinfo/bossinfo'
import GeniusInfo from './containers/geniusinfo/geniusinfo'
import DashBoard from './components/dashboard/dashboard'
const store = createStore(rootReducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path="/geniusInfo" component={GeniusInfo}></Route>
          <Route path="/bossInfo" component={BossInfo}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route component={DashBoard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
