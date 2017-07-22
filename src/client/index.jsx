import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route }   from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import fetch        from 'isomorphic-fetch';
import cookie       from 'cookie';

import configureStore from '../share/store/configureStore.jsx';
import routes         from '../share/routes.jsx';
import history        from '../share/history.jsx';
import i18n           from '../share/i18n';

import TrackList from '../share/component/TrackList.jsx';
import App       from '../share/containers/App.jsx';

const DEFAULT_LOCALE = 'en';

const initialState = window.__INITIAL_STATE__ || {};
const store        = configureStore(initialState);
const locale       = cookie.parse(document.cookie).locale || DEFAULT_LOCALE;

function loadLocale(localToLoad) {
  if(localToLoad == 'en'){
    return Promise.resolve({});
  }

  return fetch(`/static/lang${localeToLoad}.json`)
  .then(res => {
    if(res.status >= 400 ){
      throw new Error('Bad response from server');
    }
    return res.json();
  })
}

loadLocale(locale).then(localeData => {
  const i18nTools = new i18n.Tools({ localeData, locale });

  ReactDOM.render(
    <Provider store={store}>
      <i18n.Provider i18n={i18nTools}>
        <Router history={history}>
          {renderRoutes(routes)}
        </Router>
      </i18n.Provider>
    </Provider>,
    document.getElementById('app')
  );
}).catch(err => {
  console.error(err);
})


