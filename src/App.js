import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainHeader from './components/common/MainHeader';
import Main from './pages/Main';
<<<<<<< HEAD
import First from './pages/First';
import Signup from './pages/Signup';
import SignupComplete from './pages/SignupComplete';
import Test from './pages/Test';
=======
import ClosetMain from './pages/ClosetMain';
import ClosetGrid from './pages/ClosetGrid';
>>>>>>> cbdc9c8d392685ea23ff76928dc1fad992bd8de4

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Route exact path="/" component={First} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signupcomplete" component={SignupComplete} />
      <Route exact path="/test" component={Test} />
=======
      <MainHeader />
      <Route exact path="/" component={Main} />
      <Route exact path="/closet" component={ClosetMain} />
      <Route exact path="/closet/grid" component={ClosetGrid} />
>>>>>>> cbdc9c8d392685ea23ff76928dc1fad992bd8de4
    </BrowserRouter>
  );
}

export default App;
