import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Recommendation from './pages/Recommendation';
import RandomLoading from './pages/RandomLoading';
import SelectedLoading from './pages/SelectedLoading';
import RandomRecResult from './pages/RandomRecResult';
import SelectedRecResult from './pages/SelectedRecResult';
import MainHeader from './components/common/MainHeader';
import LoadingMainHeader from './components/common/LoadingMainHeader';

function App() {
  // SY: 원래 location.pathname을 사용하려 했으나 그렇게 사용할 경우 undefined가 나와서 window. 사용
  if (window.location.pathname !== '/recommendation/loading_random' && 
  window.location.pathname !== '/recommendation/loading_selected')
    return (
      <BrowserRouter>
        <MainHeader></MainHeader>
        <Route exact path="/" component={Main} />
        <Route exact path="/recommendation" component={Recommendation}/>
        <Route exact path="/recommendation/result_random" component={RandomRecResult}/>
        <Route exact path="/recommendation/result_selected" component={SelectedRecResult}/>
      </BrowserRouter>  
    );
  else
    return (
      <BrowserRouter>
        <LoadingMainHeader></LoadingMainHeader>
        <Route exact path="/recommendation/loading_random" component={RandomLoading}/>
        <Route exact path="/recommendation/loading_selected" component={SelectedLoading}/>
      </BrowserRouter>  
    );
}

export default App;
