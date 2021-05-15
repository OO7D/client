import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import First from './pages/First';
import Signup from './pages/Signup';
import SignupComplete from './pages/SignupComplete';
import Test from './pages/Test';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={First} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signupcomplete" component={SignupComplete} />
      <Route exact path="/test" component={Test} />
    </BrowserRouter>
  );
}

export default App;
