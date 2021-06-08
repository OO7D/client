import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PublicRoute({ component: Component, restricted, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') && restricted ? (
          <Redirect to="/main" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;

// main으로 가는 조건은, login이 되어 있고, 해당 페이지가 restricted일 때
// 인데.. 처음엔 로그인이 안되어있잖아?
// 그러면, 랜딩 페이지에서 시작을 하는 게 맞는데
// 왜 main에서 시작을 하냐고?
