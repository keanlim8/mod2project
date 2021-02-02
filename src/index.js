import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory} from 'react-router'
import { firebaseApp } from './firebase'
import { logUser } from './actions'
import reducer from './reducers'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const store = createStore(reducer)

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User has signed in or up', user)
    const { email } = user
    store.dispatch(logUser(email))
    browserHistory.push('/app')
  } else {
    console.log('user has signed out or need to sign in')
    browserHistory.replace('/signin')
  }
})

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

ReactDOM.render(
  <Provider store={store}>

    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  </Provider>, document.getElementById('root')
)
