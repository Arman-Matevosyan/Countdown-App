import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './sections/Home';
import { Header } from './sections/Header';
import { Footer } from './sections/Footer';
import './assets/style.scss';

const AppEntryPointWrapper: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
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
