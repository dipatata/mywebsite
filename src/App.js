import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Spaceship from './spaceship/Spaceship';
import WorkInprogress from './workInProgress';
import Cv from './cv/cv';
import { withNamespaces } from 'react-i18next';
import LCH from './hoc/LanguageChangerHOC'
import Routes from './routes'

const colours=[0,1,2,3,4,5,6].sort((a, b) => (Math.random() * 3) - 1);

const App = ({t}) => {
  const LayoutWithNameSpaces = withNamespaces()(LCH(Layout));
  return (
    <BrowserRouter basename='/'>
      <Switch>  
        <Route path={Routes.spaceshipR} component={withNamespaces()(LCH(Spaceship))}/>
        <Route path={Routes.cvR} component={withNamespaces()(LCH(Cv))}/>
        <Route path={Routes.javaR} component={withNamespaces()(LCH(WorkInprogress))}/>
        <Route path={Routes.blogR} component={withNamespaces()(LCH(WorkInprogress))}/>
        <Route render={(props) => {
          return (
            <LayoutWithNameSpaces {...props} isAuthed={true} colours={colours}/>
          )
        }}/>
      </Switch>
    </BrowserRouter>
  );
}

export default withNamespaces()(App)