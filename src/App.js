import React, {Component} from 'react';
import Routes from './config/routes'
import store from './redux/store'
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
