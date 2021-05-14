import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainHeader from './components/common/MainHeader';
import Main from './pages/Main';
import ClosetMain from './pages/ClosetMain';
import ClosetGrid from './pages/ClosetGrid';

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Route exact path="/" component={Main} />
      <Route exact path="/closet" component={ClosetMain} />
      <Route exact path="/closet/grid" component={ClosetGrid} />
    </BrowserRouter>
  );
}

export default App;
