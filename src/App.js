import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainHeader from './components/common/MainHeader';
import Main from './pages/Main';
import ClosetMain from './pages/ClosetMain';
import ClosetGrid from './pages/ClosetGrid';
import ClosetNew from './pages/ClosetNew';
import ClosetComplete from './pages/ClosetComplete';

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Route exact path="/" component={Main} />
      <Route exact path="/closet" component={ClosetMain} />
      <Route exact path="/closet/grid" component={ClosetGrid} />
      <Route exact path="/closet/new" component={ClosetNew} />
      <Route exact path="/closet/complete" component={ClosetComplete} />
      <Route exact path="/recommend" component={ClosetMain} />
      <Route exact path="/recommend/grid" component={ClosetGrid} />
    </BrowserRouter>
  );
}

export default App;
