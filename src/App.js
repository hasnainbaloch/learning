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
      <Switch>

        {/* Redirect to landing Layout   */}
        <Route path="/" exact>
          <Redirect to="/landing" />
        </Route>
        
        {/* Landing Layout   */}
        <LandingLayoutRoute path="/landing" exact component={Landing} />
        
        {/* Dashboard Layout   */}
        <DashboardLayoutRoute path="/dashboard" exact component={Home} />
        <DashboardLayoutRoute path="/dashboard/about" exact component={About} />
        
        {/* Page not-found */}
        <Route component={NotFound} />
        <Redirect exact from={"*"} to={"/not-found"} />
      
      </Switch>
    </Router>

  );
}

export default App;
