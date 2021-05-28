import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Recommendation from './pages/Recommendation';
import RandomLoading from './pages/RandomLoading';
import SelectedLoading from './pages/SelectedLoading';
import RandomRecResult from './pages/RandomRecResult';
import SelectedRecResult from './pages/SelectedRecResult';
import MainHeader from './components/common/MainHeader';
import LoadingMainHeader from './components/common/LoadingMainHeader';
import ClothSelect from './pages/ClothSelect';

function App() {
    return (
      <Router>
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
        </Switch>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recommendation" component={Recommendation}/>
          <Route exact path="/recommendation/result_random" component={RandomRecResult}/>
          <Route exact path="/recommendation/result_selected" component={SelectedRecResult}/>
          <Route exact path="/recommendation/cloth_select" component={ClothSelect}/>
          <Route exact path="/recommendation/loading_random" component={RandomLoading}/>
          <Route exact path="/recommendation/loading_selected" component={SelectedLoading}/>
        </Switch>
      </Router>
    );
}

export default App;