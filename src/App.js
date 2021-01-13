import './App.css';
import { DashboardLayoutRoute, LandingLayoutRoute } from './components/Layout';
import { Landing, Home, About, NotFound } from './components/Pages'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="page">
          {/* Routing */}
          <Switch>
            <Route path="/" exact>
              <Redirect to="/landing" />
            </Route>
            <LandingLayoutRoute path="/landing" exact component={Landing} />
            <DashboardLayoutRoute path="/dashboard/home" exact component={Home} />
            <DashboardLayoutRoute path="/dashboard/about" exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
