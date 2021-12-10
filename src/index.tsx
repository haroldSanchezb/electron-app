import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';

const render = () => {
  ReactDOM.render(<App/>, document.getElementById('root-app'));
}

render();
