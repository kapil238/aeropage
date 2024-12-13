import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Projects from './Demos';
import AdminDemo from './AdminDemo';
import SecurityDemo from './SecurityDemo';
import Contact from './Features';
import Footer from './Landing ';
import Login from './Login'; // Import the Login component if it exists
import Agency from './Agency'
import About from './About';

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
      <About/>
      <Projects />
      <AdminDemo />
      <SecurityDemo />
      <Contact />
      <Footer />

      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/login" component={Login} />
        <Route path="/Agency" component={Agency} />

        <Route path="/security-demo" component={SecurityDemo} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};


export default App;
