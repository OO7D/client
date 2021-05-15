import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const client = axios.create({
  baseURL: '',
});

// api 작성 공간

function Google() {
  const googleLoginBtn = useRef(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    googleSDK();
  }, []);

  // Google OAuth
  const googleSDK = () => {
    window.googleSDKLoaded = () => {
      console.log(window.gapi);
      window.gapi.load('auth2', () => {
        const auth2 = window.gapi.auth2.init({
          client_id:
            '13133483190-l3msutanq9vke230331c0vtv5190cj99.apps.googleusercontent.com',
          scope: 'profile email',
        });
        // 버튼 클릭시 사용자정보 불러오기
        auth2.attachClickHandler(
          googleLoginBtn.current,
          {},
          googleUser => {
            const profile = googleUser.getBasicProfile();
            console.log(profile);
            console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
            setToken(googleUser.getAuthResponse().id_token);
            console.log(`ID: ${profile.getId()}`);
            console.log(`Name: ${profile.getName()}`);
            console.log(`Image URL: ${profile.getImageUrl()}`);
            console.log(`Email: ${profile.getEmail()}`);
          },
          error => {
            alert(JSON.stringify(error, undefined, 2));
          },
        );
      });
    };
    // 구글 SDK 불러오기
    (function (d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'google-jssdk');
  };

  return (
    <GoogleBtn id="gSignInWrapper">
      <span className="label" />
      <div ref={googleLoginBtn} id="customBtn" className="customGPlusSignin">
        <span className="icon"></span>
        <span className="buttonText">Login With Google</span>
      </div>
    </GoogleBtn>
  );
}
