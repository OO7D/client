import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
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
import Mypage from './pages/Mypage';

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <Switch>
      <Router>
        <MainHeader />
        <PublicRoute restricted={true} exact path="/" component={First} />
        <PrivateRoute exact path="/main" component={Main} />
        {isSignedUp ? (
          <PrivateRoute exact path="/main" component={Main} />
        ) : (
          <PublicRoute exact path="/signup" component={Signup} />
        )}
        {/* <PublicRoute exact path="/signup" component={Signup} /> */}
        <PrivateRoute exact path="/test" component={Test} />
        <PrivateRoute exact path="/signupcomplete" component={SignupComplete} />
        <PrivateRoute exact path="/closet" component={ClosetMain} />
        <PrivateRoute exact path="/closet/grid" component={ClosetGrid} />
        <PrivateRoute exact path="/mypage" component={Mypage} />
      </Router>
    </Switch>
  );
}

export default App;
