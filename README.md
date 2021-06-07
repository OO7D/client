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
  * `Welcome.js`: 사용자 이름 정보와 함께 인삿말을 출력하는 컴포넌트

* 회원가입 페이지(`/signup`)
  * `SignupContents.js`: 카카오 로그인 후 push됨. 회원가입 약관 및 성별, 연령대 값을 받는 컴포넌트

* 회원가입 완료 페이지(`/signupcomplete`)
  * `SignupComplete.js`: 회원가입 완료를 나타내는 컴포넌트

#### 2. 함수 호출 시 받아야 하는 정보

(1) `Welcome.js`

```js
// 사용자 정보
const userState = [
  {'name': '수연'}
]
```
#### UI 흐름 및 서버, 데이터베이스 연결

(i) 옷장에서 옷 고르기

![옷장에서 옷 고르기](https://user-images.githubusercontent.com/38969686/119990213-08ccb380-c003-11eb-94b8-4a8726bdefd2.jpg)

(ii) 랜덤으로 추천받기

![랜덤으로 추천받기](https://user-images.githubusercontent.com/38969686/119990226-0c603a80-c003-11eb-9bea-05af875e02da.jpg)

(iii) 선호도 테스트

<img width="960" alt="선호도 테스트" src="https://user-images.githubusercontent.com/38969686/120449191-2e263c80-c3ca-11eb-9c59-c5e99b2c15fb.png">

(iv) 심리 테스트

![심리 테스트](https://user-images.githubusercontent.com/38969686/120751627-4d94a500-c543-11eb-95d2-babf48a29d49.jpg)
