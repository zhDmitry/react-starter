import React, { Component } from 'react'
import PropTypes from 'prop-types'
import browserHistory from 'react-router/es/browserHistory'
import Router from 'react-router/es/Router'

import { Provider } from 'react-redux'

export class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}
