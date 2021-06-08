import React from 'react';
import logo from '../../assets/logo.svg';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainHeaderWrap = Styled.div`
  .logo {
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 110px;
  }
  img:hover {
    cursor: pointer;
  }
  .title {
    height: 37px;
    color: #F79C43;
    padding-left: 19px;
    text-align: top;
    font-size: 23px;
    font-weight: bold;
    border-bottom: 1px solid black;
  }
`;

const getTitle = path => {
  switch (path) {
    case '/preference_test':
      return '선호도 테스트';
    case '/closet':
    case '/closet/grid':
      return '옷장';
    case '/closet/new':
    case '/closet/new/edit':
      return '옷 추가';
    case '/closet/complete':
      return '완료';
    case '/recommend':
    case '/recommend/grid':
    case '/recommendation':
    case '/recommendation/':
      return '옷 추천';
    case '/recommendation/result_random':
    case '/recommendation/result_selected':
      return '추천결과';
    case '/mind_test':
    case '/mind_test/':
    case '/mind_test/result':
    case '/mind_test/result/':
      return '심리 테스트';
    default:
      return '';
  }
};

const MainHeader = ({ history, location }) => {
  const title = getTitle(location.pathname);

  return (
    <MainHeaderWrap>
      <div className="logo">
        <img src={logo} alt="logo" onClick={() => history.push('/')} />
      </div>
      <div className="title">{title}</div>
    </MainHeaderWrap>
  );
};

MainHeader.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(MainHeader);
