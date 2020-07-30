import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Spaceship from './spaceship/Spaceship';
import WorkInprogress from './workInProgress';
import Cv from './cv/cv';
import { withNamespaces } from 'react-i18next';

const App = ({t}) => {
  return (
    <BrowserRouter>
      <Switch>  
        <Route path='/spaceship' component={withNamespaces()(Spaceship)}/>
        <Route path='/cv' component={withNamespaces()(Cv)}/>
        <Route path='/java' component={withNamespaces()(WorkInprogress)}/>
        <Route component={withNamespaces()(Layout)} />
      </Switch>
    </BrowserRouter>
  );
}

export default withNamespaces()(App)