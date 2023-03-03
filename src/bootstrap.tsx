import React from 'react';
import { createRoot } from 'react-dom/client';
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
  const rootNode = document.getElementById('app');

  if (rootNode) {
    createRoot(rootNode).render(<AppEntryPointWrapper />);
  }
}

init();
