import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Spaceship from './spaceship';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>  
        <Route path='/site/spaceship' component={Spaceship}/>
        <Route component={Layout} />
      </Switch>
    </BrowserRouter>
    //<Redirect to='/hola' />
  );
}

export default App;