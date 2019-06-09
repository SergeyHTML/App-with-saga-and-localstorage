import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './app.scss';
import MainPage from './components/MainPage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className="App">

          <Switch>
            <Route path='/' component={MainPage} />
          </Switch>

        </div>
      </Router>
  );
}

export default App;
