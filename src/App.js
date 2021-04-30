import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App centering">
      {/* <Dashboard /> */}
      <Router>
      <Switch>
        <Route path="/" exact>
        <Login />
        </Route>
        <Route>
          <Dashboard path="dashboard" />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
