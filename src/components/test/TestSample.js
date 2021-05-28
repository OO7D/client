import React, { Component } from 'react';
import Styled from 'styled-components';
import KakaoLoginImg from '../../assets/kakao.png';

const ButtonWrap = Styled.div`
  background-image: url(${KakaoLoginImg});
  background-repeat: no-repeat;
  color: transparent;
  width: 183px;
  height: 45px;
`;

const { Kakao } = window;

class TestSample extends Component {
  state = {
    isLogin: false,
  };
  loginWithKakao = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject('Kakao 인스턴스가 존재하지 않습니다.');
        }
        Kakao.Auth.login({
          success: auth => {
            console.log('정상적으로 로그인 되었습니다.', auth);
            this.setState({
              isLogin: true,
            });
          },
          fail: err => {
            console.error(err);
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
  logoutWithKakao = () => {
    if (Kakao.Auth.getAccessToken()) {
      console.log(
        '카카오 인증 액세스 토큰이 존재합니다.',
        Kakao.Auth.getAccessToken(),
      );
      Kakao.Auth.logout(() => {
        console.log('로그아웃 되었습니다.', Kakao.Auth.getAccessToken());
        this.setState({
          isLogin: false,
        });
        localStorage.clear();
      });
    }
  };
  componentDidMount() {
    if (Kakao.Auth.getAccessToken()) {
      console.log('액세스 토큰이 존재합니다. 세션을 유지합니다.');
      this.setState({
        isLogin: true,
      });
    }
  }
  render() {
    const { isLogin } = this.state;

    const loginView = (
      <div>
        <p>로그인화면</p>
        <ButtonWrap onClick={this.loginWithKakao}>로그인</ButtonWrap>
      </div>
    );

    const mainView = (
      <div>
        <p>메인 화면</p>
        <ButtonWrap onClick={this.logoutWithKakao}>카카오 로그아웃</ButtonWrap>
      </div>
    );
    return <div className="App">{isLogin ? mainView : loginView}</div>;
  }
}

export default TestSample;
