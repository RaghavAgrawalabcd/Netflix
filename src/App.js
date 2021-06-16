import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homescreen from './screens/Homescreen';


function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/"><Homescreen /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
