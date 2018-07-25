import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Landing from './Landing';
import RegisterDevs from './RegisterDevs';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'landing'
    }
  }
  render() {

    return (
      <main style={{ display: 'flex' }}>
        <aside className="asidecontainer">
          <NavBar />
          <div className="navspacer" />
        </aside>
        <Switch>
          <Route path="/register/business" component={Landing} />
          <Route path="/register/devs" component={RegisterDevs} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </main>
    );
  }
}

export default App;
