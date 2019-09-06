import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDom.render(
    <HashRouter>
      <Component/>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
