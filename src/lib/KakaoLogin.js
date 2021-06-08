import React, { Component } from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import KakaoLoginImg from '../assets/kakao.png';
import axios from 'axios';

const ButtonWrap = Styled.div`
  background-image: url(${KakaoLoginImg});
  background-repeat: no-repeat;
  margin: 38px auto;
  color: transparent;
  width: 183px;
  height: 45px;
`;

const { Kakao } = window;

class KakaoLogin extends Component {
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
          success: function (authObj) {
            fetch(`${Kakao.Auth.getAccessToken}`, {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              method: 'POST',
              body: JSON.stringify({
                access_token: authObj.access_token,
              }),
            })
              .then(res => res.json())
              .then(res => {
                console.log(res.access_token);
                // console.log('정상적으로 로그인 되었습니다.', auth);)
                localStorage.setItem('token', res.access_token);
                this.setState({
                  isLogin: true,
                });
                alert('로그인 되었습니다.');
                this.props.history.push('/signup');
              });
          },
          fail: err => {
            console.log(JSON.stringify(err));
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
  componentDidMount() {
    if (Kakao.Auth.getAccessToken()) {
      this.setState({
        isLogin: true,
      });
    }
  }

  render() {
    const { isLogin } = this.state;
    const loginView = <ButtonWrap onClick={this.loginWithKakao}></ButtonWrap>;

    return <div className="App">{loginView}</div>;
  }
}

export default withRouter(KakaoLogin);

// logoutWithKakao = () => {
//   if (Kakao.Auth.getAccessToken()) {
//     console.log(
//       '카카오 인증 액세스 토큰이 존재합니다.',
//       Kakao.Auth.getAccessToken(),
//     );
//     Kakao.Auth.logout(() => {
//       console.log('로그아웃 되었습니다.', Kakao.Auth.getAccessToken());
//       this.setState({
//         isLogin: false,
//       });
//       localStorage.clear();
//     });
//   }
// };
