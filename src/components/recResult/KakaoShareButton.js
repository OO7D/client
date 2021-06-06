import React, { useEffect } from 'react'
import './Sns.css';
import kakaotalk from '../../assets/recResult/kakaotalk.png';

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  })

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 실행된 경우 window.Kakao로 접근 가능
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 초기화 방지
      if(!kakao.isInitialized()){ 
        kakao.init(''); //키 값
      }
      kakao.Link.createDefaultButton({
        // render에서 container에 해당하는 id를 찾아 그 부분에 렌더링
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '오늘 뭐 입을지 고민된다면??',
          description: '#날씨와 선호에 맞는 옷 추천 #ootd',
          imageUrl: 'https://lh3.googleusercontent.com/4S6Col00MAk-UcQIM4DTJDMJJIYtZ7PLF1jdG__D4h-CFI1yLBQx1XgldYW6p_ksFtYpc8rLpzjWxNKXKYIqPLEu8JEh0wjhBpNpJsZDZfdTp7N6boyTQOh3imhPMc2tFS7jPJlutpsUPXSmJ7Hoi-vF0H_ooRrxp96VnJmi7d6tTm-8MG1iGMR7igatr5LbKqhRx6Bg1GuHfQVf0J8fQM_RGcokgHhuv35w4vI14PjI4cdNMuklBVddOPVPnu-SNAiTsfEc4ByX-Rf4Be0WW0dieiFFUYISBKCUKAakW2eGxIrXmFY9Y_xsQ9JRWYUSOuVsscfgaHROC3vpGP1IPmTgO4DI6xjhfedkYTCasaunMzXHJFiM1SIv6KH883qZaCSrDdr1mmVL10BvifxQL83Qlo7LlcGYQQsgHhlP2tcjgfjvKNvbUI274gxrrrtI2GeBJoOKSGnkV0njlFM_ybBcjKi0bqeloQOOIzEqYneS-Ij7b6oRA8wikanvntp3DdUAePHx1_tWbhFLAdrcxz2sEcWEyj0l7IiherIAIQNH-y8i8vozuPG7L9nin05SyaR7BY7AVKJ-1g1pQnZAndrNbNLrIOG2wyD26xEbnUw0pzZvNjmL0nbe_jHWg0vLl7RwDof4uAkWa37WzXU7noUWJL0txu9pSlpY-EIWqSuCCMeuQuZK1rWtf26-MoARZNSap_qmf7X5QZO3aHr01IQ=w129-h47-no?authuser=0',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
        buttons: [
          {
            title: '나도 해볼래요!',
            link: {
              mobileWebUrl: 'http://localhost:3000/',
              webUrl: 'http://localhost:3000/',
            },
          },
        ],
      })
    }
  }

  return (
    <div className="kakao-share-button">
      {/* SY: onClick을 넣지 않으면 새로고침 시 카톡 공유 불가능, 다만 이렇게 넣어도 두번 클릭해야 한다는 문제 발생 */}
      <input id='kakao-link-btn' onClick={createKakaoButton} type='image' src={kakaotalk}></input>
    </div>
  )
}
export default KakaoShareButton