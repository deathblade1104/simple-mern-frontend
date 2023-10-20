import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import NewPlaces from './modules/places/pages/NewPlaces';
import Users from './modules/users/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';

function App() {
  return (
    <div>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            {/* Make sure you have wrapped your app with a BrowserRouter */}
            <Route path='/users' exact>
              <Users />
            </Route>
            <Route path='/places/new' exact>
              <NewPlaces />
            </Route>
            {/* This Redirect should work to redirect to the root route when no other routes match */}
            <Redirect to='/' />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
