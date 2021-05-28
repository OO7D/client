import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainHeader from './components/common/MainHeader';
import Main from './pages/Main';
import First from './pages/First';
import Signup from './pages/Signup';
import SignupComplete from './pages/SignupComplete';
import Test from './pages/Test';
import ClosetMain from './pages/ClosetMain';
import ClosetGrid from './pages/ClosetGrid';
import PrivateRoute from './lib/PrivateRoute';
import PublicRoute from './lib/PublicRoute';

function App() {
  return (
    <Switch>
      <Router>
        <MainHeader />
        <PublicRoute restricted={true} exact path="/" component={First} />
        <PrivateRoute exact path="/main" component={Main} />
        <PrivateRoute exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/signupcomplete" component={SignupComplete} />
        <PrivateRoute exact path="/test" component={Test} />
        <PrivateRoute exact path="/closet" component={ClosetMain} />
        <PrivateRoute exact path="/closet/grid" component={ClosetGrid} />
      </Router>
    </Switch>
  );
}

export default App;
