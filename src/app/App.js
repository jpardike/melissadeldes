import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from '../components/nav/nav';
import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <NavBar />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/" component={Home} />
        </Switch>

        <Contact />
        
        <Footer />
      </div>
    )
  }
}

export default App;
