import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import DevTools, { ImportExportTool } from './DevTools';
import routes from '../config/routes.js';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { store, history } = this.props;

    const isDevEnv = process.env.NODE_ENV === 'development';

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <App>{routes}</App>

            {isDevEnv &&
              <div>
                <DevTools />
                <ImportExportTool />
              </div>
            }
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
