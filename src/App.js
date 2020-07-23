import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Spaceship from './spaceship/Spaceship';
import WorkInprogress from './workInProgress';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>  
        <Route path='/spaceship' component={Spaceship}/>
        <Route path='/java' component={WorkInprogress}/>
        <Route component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;