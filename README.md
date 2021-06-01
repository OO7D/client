### 2021 HUFS CAPSTONE DESIGN PROJECT
# OO7D : Outfit Of 7he Day

#### 1. 페이지 및 컴포넌트 설명

(1) 페이지

* `First.js`: 서비스 소개와 카카오 로그인을 통해 회원가입으로 redirect하는 랜딩 페이지
* `Signup.js`: 카카오 로그인을 하면 자동으로 push되는, 회원가입을 위한 페이지
* `SignupComplete.js`: 회원가입 요건을 충족하고 이동시 나타나는 회원가입 완료 페이지
* `Main.js`: 로그인 후 옷장과 선호도 테스트 등 모든 서비스로 이동할 수 있는 페이지
* `Mypage.js`: 마이페이지
* `Test.js`: 선호도테스트 페이지(현재 공백)

(2) 컴포넌트

* 랜딩페이지(`/`)
  * `LandingCard.js`: 랜딩 페이지 내 카드 컴포넌트
  * `LandingContents.js`: 카카오 로그인을 포함한 모든 나머지 컨텐츠들을 합친 컴포넌트

* 메인페이지(`/main`)
  * `Circle.js`: 메인페이지 내에서 각 이미지 뒤에 공통으로 쓰이는 원 컴포넌트. 실제 사용시 색상만 변경해서 반영
  * `MainContents.js`: 메인페이지 각 이미지 뒤의 원을 제외한, 나머지 모든 컴포넌트

* 회원가입 페이지(`/signup`)
  * `SignupContents.js`: 카카오 로그인 후 push됨. 회원가입 약관 및 성별, 연령대 값을 받는 컴포넌트

* 회원가입 완료 페이지(`/signupcomplete`)
  * `SignupComplete.js`: 회원가입 완료를 나타내는 컴포넌트

