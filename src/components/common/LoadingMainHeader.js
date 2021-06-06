import React from 'react';
import logo from '../../assets/logo.svg';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const LoadingMainHeaderWrap = Styled.div`
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
  }
  .meter { 
    height: 10px;
    position: relative;
    background: #f3efe6;
    overflow: hidden;
  }
  .meter span {
      display: block;
      height: 100%;
  }
  #progress {
      background-color: #F79C43;
      animation: progressBar 10s ease-in-out;
      animation-fill-mode:both; 
  }
  @keyframes progressBar {
    0% { width: 0; }
    100% { width: 100%; }
  }
`;

const getTitle = path => {
  switch (path) {
    case '/recommendation/loading_selected':
    case '/recommendation/loading_selected/':
    case '/recommendation/loading_random':
    case '/recommendation/loading_random/':
      return '로딩중';
  }
};

const LoadingMainHeader = ({ history, location }) => {
  const title = getTitle(location.pathname);
  return (
    <LoadingMainHeaderWrap>
      <div className="logo">
        <img src={logo} alt="logo" onClick={() => history.push('/')} />
      </div>
      <div className="title">{title}</div>
      <div className="meter">
        <span id='style'>
          <span id="progress"></span>
        </span>
      </div>
    </LoadingMainHeaderWrap>
  );
};

export default withRouter(LoadingMainHeader);