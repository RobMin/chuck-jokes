import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/Header';
import JokesPage from 'routes/JokesPage';
import './styles.scss';

const App = () => {
  return (<>
    <Header/>
    <Router>
      <Switch>
        <Route path="/jokes/:id?" component={ JokesPage } />
        <Redirect to="/jokes" />
      </Switch>
    </Router>
  </>);
};

export default App;
