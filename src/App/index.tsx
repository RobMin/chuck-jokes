import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/Header';
import JokesPage from 'routes/JokesPage';
import Footer from 'components/Footer';
import './styles.scss';

const App = () => {
  return (<div className="App">
    <Header/>
    <div className="App-body">
      <Router>
        <Switch>
          <Route path="/jokes/:id?" component={ JokesPage } />
          <Redirect to="/jokes" />
        </Switch>
      </Router>
    </div>
    <Footer/>
  </div>);
};

export default App;
