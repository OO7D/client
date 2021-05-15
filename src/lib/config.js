import axios from 'axios';

const GoogleApiPOST = token => {
  axios
    .get(`${socialLoginAPI}/user/google`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      sessionStorage.setItem('token', res.data.token);
      alert('로그인 되었습니다');
      history.push('/home');
    })
    .catch(error => alert('Error가 발생하였습니다', error));
};
