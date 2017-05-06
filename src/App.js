import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Root from './containers/root';
import { Provider } from 'react-redux'

export class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
