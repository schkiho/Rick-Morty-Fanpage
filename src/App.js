import './App.css';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'

import Landing from './Components/Layout/Landing'
import Navbar from './Components/Layout/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <Switch>
        <Route exact path="/" component={Landing}/>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
