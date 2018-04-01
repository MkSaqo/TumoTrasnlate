import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Work from './Work.js';
import Team from './Team.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div>
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/Work.js" component={Work} />
              <Route path="/Team.js" component={Team} />
              <Route path="/Contact.js" component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
