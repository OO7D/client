import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainHeader from './components/common/MainHeader';
import Main from './pages/Main';
import ClosetMain from './pages/ClosetMain';
import ClosetGrid from './pages/ClosetGrid';
import ClosetNew from './pages/ClosetNew';
import ClosetComplete from './pages/ClosetComplete';

function App() {
  const [pic, setPic] = React.useState(null);
  const [clothes, setClothes] = React.useState({
    image: pic,
    title: '바지 1',
    colors: { white: 92, gray: 8 },
    type: '바지',
    weather: '봄/가을',
  });
  useEffect(() => {
    setClothes({
      ...clothes,
      image: pic,
    });
  }, [pic]);

  return (
    <BrowserRouter>
      <MainHeader />
      <Route exact path="/" component={Main} />
      <Route
        exact
        path="/closet"
        component={() => <ClosetMain pic={pic} setPic={setPic} />}
      />
      <Route exact path="/closet/grid" component={ClosetGrid} />
      <Route
        exact
        path="/closet/new"
        component={() => (
          <ClosetNew pic={pic} clothes={clothes} setClothes={setClothes} />
        )}
      />
      <Route
        exact
        path="/closet/new/edit"
        component={() => (
          <ClosetNew pic={pic} clothes={clothes} setClothes={setClothes} />
        )}
      />
      <Route
        exact
        path="/closet/complete"
        component={() => <ClosetComplete setPic={setPic} />}
      />
      <Route exact path="/recommend" component={ClosetMain} />
      <Route exact path="/recommend/grid" component={ClosetGrid} />
    </BrowserRouter>
  );
}

export default App;
