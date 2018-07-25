import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Landing from './Landing';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'landing'
    }
  }
  render() {
    // let mainStyle = {
    //   justifyContent: 'center'
    // }

    return (
      <main style={{ display: 'flex' }}>
        <aside className="asidecontainer">
          <NavBar />
          <div className="navspacer" />
        </aside>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </main>
    );
  }
}

export default App;
