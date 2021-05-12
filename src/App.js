import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./Components/Layout/Landing";
import Navbar from "./Components/Layout/Navbar";
import CharacterList from "./Components/Character/CharacterList";
import CharacterDetail from "./Components/Character/CharacterDetail";
import EpisodeList from "./Components/Episode/EpisodeList";
import EpisodeDetail from "./Components/Episode/EpisodeDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/character-list" component={CharacterList} />
          <Route path="/character/:id" component={CharacterDetail} />
          <Route path="/episode-list" component={EpisodeList} />
          <Route path="/episode/:id" component={EpisodeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
