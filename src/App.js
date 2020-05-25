import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Employment from './components/Employment';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (

      <Router>
        <div>
          <div className="header">
           <ul>
            <li>
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li>
              <Link to='/about' className="nav-link">About</Link>
            </li>
            <li>
              <Link to='/employment' className="nav-link">Employment</Link>
            </li>
            <li>
              <Link to='/projects' className="nav-link">Projects</Link>
            </li>
            <li>
              <Link to='/blog' className="nav-link">Blog</Link>
            </li>
            <li>
              <Link to='/contact' className="nav-link">Contact</Link>
            </li>
         </ul>
         </div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
             <About/>
            </Route>
            <Route path='/employment'>
              <Employment/>
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
      
  
  )

}

export default App;
