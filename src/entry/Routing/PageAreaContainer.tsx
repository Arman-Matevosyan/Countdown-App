import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import { Home } from '../../sections/Home';
import { Header } from '../../sections/Header';
import { Footer } from '../../sections/Footer';

import '../../assets/style.scss';

const PageAreaContainer = () => (
  <>
    <Header />
    <Switch>
      <Route exact component={Home} path={routes.home} />
    </Switch>
    <Footer />
  </>
);

export default PageAreaContainer;
