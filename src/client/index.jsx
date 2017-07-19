import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router }   from 'react-router-dom';
import fetch        from 'isomorphic-fetch';
import cookie       from 'cookie';

import configureStore from '../share/store/configureStore.jsx';
import routes         from '../share/routes.jsx';
import history        from '../share/history.jsx';
import i18n           from '../share/i18n';

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
      {/*<i18n.Provider i18n={i18nTools}>*/}
        <Router children={routes} history={history} />
      {/*</i18n.Provider>*/}
    </Provider>,
    document.getElementById('app')
  );
}).catch(err => {
  console.error(err);
})


