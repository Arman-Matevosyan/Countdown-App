import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppEntryPoint from './entry/AppEntryPoint';

const history = createBrowserHistory();

const AppEntryPointWrapper: React.FC = () => {
  return (
    <Router history={history}>
      <AppEntryPoint />
    </Router>
  );
};

async function init() {
  const rootNode = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
  );

  if (rootNode) {
    rootNode.render(<AppEntryPointWrapper />);
  }
}

init();
