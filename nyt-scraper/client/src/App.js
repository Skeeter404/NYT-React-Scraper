import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from 'react-materialize';
import Nav from './components/Nav';
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
            </Switch>
          </main>
          <Footer copyrights="Copyright 2018 © Bronson Bird"
            moreLinks={<a className="grey-text text-lighten-4 right" href="https://github.com/Skeeter404">Github</a>}>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
