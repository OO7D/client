import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import MainHeader from './components/common/MainHeader';
import Recommendation from './pages/Recommendation';
import RandomLoading from './pages/RandomLoading';
import SelectedLoading from './pages/SelectedLoading';
import RandomRecResult from './pages/RandomRecResult';
import SelectedRecResult from './pages/SelectedRecResult';
import LoadingMainHeader from './components/common/LoadingMainHeader';
import ClothSelect from './pages/ClothSelect';
import PreferenceTest from './pages/PreferenceTest';
import MindTest from './pages/MindTest';
import MindTestResult from './pages/MindTestResult';
import ClosetMain from './pages/ClosetMain';
import ClosetGrid from './pages/ClosetGrid';
import ClosetNew from './pages/ClosetNew';
import ClosetComplete from './pages/ClosetComplete';
import Main from './pages/Main';
import First from './pages/First';
import Signup from './pages/Signup';
import SignupComplete from './pages/SignupComplete';
import Test from './pages/Test';
import PrivateRoute from './lib/PrivateRoute';
import PublicRoute from './lib/PublicRoute';
import Mypage from './pages/Mypage';

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  // 사진 입력받아서 저장하는 부분
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
    <Router>
      {/* SY: 헤더를 정하는 Switch */}
      <Switch>
        <Route
          exact
          path="/recommendation/loading_selected"
          component={LoadingMainHeader}
        />
        <Route
          exact
          path="/recommendation/loading_random"
          component={LoadingMainHeader}
        />
        <Route path="/recommendation" component={MainHeader} />
        <Route path="/" component={MainHeader} />
      </Switch>
      {/* SY: 페이지 내용을 정하는 Switch */}
      <Switch>
        {/* 상민 */}
        <Route exact path="/" component={First} />
        <Route exact path="/main" component={Main} />
        {isSignedUp ? (
          <Route exact path="/main" component={Main} />
        ) : (
          <Route exact path="/signup" component={Signup} />
        )}
        {/* <PublicRoute exact path="/signup" component={Signup} /> */}
        <Route exact path="/test" component={Test} />
        <Route exact path="/signupcomplete" component={SignupComplete} />
        <Route exact path="/closet" component={ClosetMain} />
        <Route exact path="/closet/grid" component={ClosetGrid} />
        <Route exact path="/mypage" component={Mypage} />

        <Route exact path="/" component={Main} />
        {/* 수연 */}
        <Route exact path="/recommendation" component={Recommendation} />
        <Route
          exact
          path="/recommendation/result_random"
          component={RandomRecResult}
        />
        <Route
          exact
          path="/recommendation/result_selected"
          component={SelectedRecResult}
        />
        <Route
          exact
          path="/recommendation/cloth_select"
          component={ClothSelect}
        />
        <Route
          exact
          path="/recommendation/loading_random"
          component={RandomLoading}
        />
        <Route
          exact
          path="/recommendation/loading_selected"
          component={SelectedLoading}
        />
        <Route exact path="/preference_test" component={PreferenceTest} />
        <Route exact path="/mind_test" component={MindTest} />
        <Route exact path="/mind_test/result" component={MindTestResult} />
        {/* 소희님 */}
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
      </Switch>
    </Router>
  );
}

export default App;
