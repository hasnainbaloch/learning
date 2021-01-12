import './App.css';
import Layout from './components/Layout/Layout';
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <div className="page">
            {/* Routing */}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
