import './App.css';
import { DashboardPrivateRoute, PublictRoute } from './components/Layout';
import { Landing, Home, About, NotFound, Login } from './components/Pages'

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
        
        {/* Landing Layout with public route  */}
        <PublictRoute path="/landing" exact component={Landing} />
        <PublictRoute path="/login" exact component={Login} />
        
        {/* Dashboard Layout   */}
        <DashboardPrivateRoute path="/dashboard" exact component={Home} />
        <DashboardPrivateRoute path="/dashboard/about" exact component={About} />
        
        {/* Page not-found */}
        <Route component={NotFound} />
        <Redirect exact from={"*"} to={"/not-found"} />
      
      </Switch>
    </Router>

  );
}

export default App;
