### 2021 HUFS CAPSTONE DESIGN PROJECT
# OO7D : Outfit Of 7he Day

#### UI 흐름 및 서버, 데이터베이스 연결

(i) 옷장에서 옷 고르기

![옷장에서 옷 고르기](https://user-images.githubusercontent.com/38969686/119990213-08ccb380-c003-11eb-94b8-4a8726bdefd2.jpg)

(ii) 랜덤으로 추천받기

![랜덤으로 추천받기](https://user-images.githubusercontent.com/38969686/119990226-0c603a80-c003-11eb-9bea-05af875e02da.jpg)

(iii) 선호도 테스트

<img width="960" alt="선호도 테스트" src="https://user-images.githubusercontent.com/38969686/120449191-2e263c80-c3ca-11eb-9c59-c5e99b2c15fb.png">

(iv) 심리 테스트

![심리 테스트](https://user-images.githubusercontent.com/38969686/120751627-4d94a500-c543-11eb-95d2-babf48a29d49.jpg)

***

#### 2. 함수 호출 시 받아야 하는 정보

(i) RandomRecResult (랜덤으로 추천받기 결과 페이지)
```javascript
// 상의 정보
const upperState = [
    {name: '쉬폰 블라우스'},
    {category: '셔츠'},
    {season: '봄/가을'},
    {color: 'white'},
    {src: {blouse}}, // SY: 이미지는 절대 경로로 import
    {fileName: 'blouse'}, // SY: 파일명이 있어야지 이미지 화면에 표시 가능
    {isWebCrawl: 'true'},
    {href: 'https://www.naver.com/'}
  ];
  
  // 하의 정보
  const lowerState = [
    {name: '치마1'},
    {category: '치마'},
    {season: '봄/가을'},
    {color: 'black'},
    {src: {skirt}}, // SY: 이미지는 절대 경로로 import
    {fileName: 'skirt'},
    {isWebCrawl: 'false'}, // SY: 웹크롤링을 하지 않은 경우에는 빈 문자열을 href로 받아야 함
    {href: ''}
  ]
  
  // 사용자 정보
  const userState = [
    {name: '소희'},
    {style: '세미정장'}
  ]
  ```

(ii) SelectedRecResult (옷장에서 옷 고르기 결과 페이지)
```javascript
// 상의 정보
const upperState = [
    {name: '쉬폰 블라우스'},
    {category: '셔츠'},
    {season: '봄/가을'},
    {color: 'white'},
    {src: {blouse}},
    {fileName: 'blouse'},
    {isWebCrawl: 'false'},
    {href: 'https://www.naver.com/'},
    {selected: 'false'}
  ];
  
  // 하의 정보
  const lowerState = [
    {name: '치마1'},
    {category: '치마'},
    {season: '봄/가을'},
    {color: 'black'},
    {src: {skirt}},
    {fileName: 'skirt'},
    {isWebCrawl: 'true'},
    {href: ''},
    {selected: 'true'} // SY: 랜덤으로 추천받기와 유일하게 다른 부분, 선택됐는지에 대한 정보 받아야 함
  ]
  
  // 사용자 정보
  const userState = [
    {name: '소희'},
    {style: '세미정장'}
  ]
```

***

#### 3. 페이지 및 컴포넌트 설명
(i) 페이지
- Recommendation.js: 옷 추천 메인 페이지
- ClothSelect.js: 옷 추천 메인 페이지에서 '옷장에서 옷 고르기' 클릭 시 이동하는 페이지
- SelectedLoading.js: 옷장에서 옷 고르고 선택 버튼 누르면 나타나는 로딩 페이지
- SelectedRecResult.js: 옷장에서 선택한 상의 혹은 하의에 맞게 하의 혹은 상의를 추천해주는 페이지
- RandomLoading.js: 옷 추천 메인 페이지에서 '랜덤으로 추천받기' 클릭 시 이동하는 페이지
- RandomRecResult.js: 랜덤으로 상의와 하의를 추천해주는 페이지
- PreferenceTest.js: 선호도테스트 

(ii)컴포넌트
- :seedling: recommendation (추천 메인뷰)
  - Button.js: /recommendation의 옷장에서 옷 고르기, 랜덤으로 추천받기 버튼 생성하는데 사용

- :seedling: recResult (추천 결과뷰)
  - ClothBox.js: /recommendation/result_random에서 옷을 추천하기 위해 옷을 담는 박스로 사용. 옷, 옷의 이름, 옷의 색깔, 옷의 카테고리, 옷의 계절에 대한 정보가 나타남. 또한 웹크롤링을 한 경우 '쇼핑몰 바로가기'가 나타나며 하트를 누를 경우 데이터베이스에 정보가 반영됨.
  - ClothBoxSelected.js: /recommendation/result_selected에서 위의 ClothBox.js와 같은 역할을 함.
  - KakaoShareButton.js, Layout.js: 카카오 공유 버튼 생성 (문구 수정은 KakaoShareButton.js에서 가능)
  - MakeButton.js: 옷 추천 결과 페이지에서 '다시 추천받기'와 '다시 선택하기' 버튼을 생성하는데 사용
  - MakeModal.js: 옷 추천 결과 페이지에서 추천된 코디에 따라 1점부터 5점까지 점수를 매긴 후 평가해 주세요 버튼을 누르면 모달이 나타나는데 사용(평가해 주세요 버튼도 여기 안에 포함되어 있음)
  - RandomRecText.js: /recommendation/result_random에서 옷을 추천할 때 나타나는 문구
  - RatingBar.js: 옷 추천 결과 페이지에서 추천된 코디에 따라 1점부터 5점까지 점수를 매기는데 사용
  - Sns.js: 카카오, 페이스북, 트위터 공유 버튼을 화면에 표시하는데 사용

- :seedling: common (공통)
  - LoadingMainHeader.js: 로딩 페이지에서 Header부분을 나타내는데 사용 

***

#### 4. 개발 일지

- 21-05-26
  - 옷 추천 메인 페이지에서 옷장에서 옷 고르기를 클릭했을 때와 랜덤으로 추천받기를 클릭했을 때 각각 다른 로딩 페이지로 이동하게 함 (추후에 옷장에서 옷 고르기 클릭했을 때 grid로 이동하도록 수정)
  - RandomRecResult.js에서 이미지를 절대경로로 전달하여 ClothBox 컴포넌트에서 props를 전달받았을 때 이미지 에러가 나지 않게 함
  - App.js에서 url에 따라 페이지의 헤더 부분이 다르게 나타나게 함

- 21-05-27
  - 웹크롤링을 했는지 정보를 받아 '쇼핑몰 바로가기'가 나타나게 함
  - 선택된 옷이 상의인지 하의인지 정보를 받아 박스에 테두리가 나타나게 함
  - 선택된 옷의 추천 문구를 작성함
  - 버튼 클릭시 검은색 테두리가 표시되지 않게 함
  - Styled의 개행 삭제
  - 옷장에서 옷 고르기 클릭했을 때 clothSelect 페이지로 이동하게 함
  - 추천 결과 페이지에서 다시 추천받기, 다시 선택하기 눌렀을 때 각각 알맞게 이동하게 함

- 21-05-28
  - clothSelect 페이지에서 선택 버튼 클릭 시 모달창이 화면에 나타나게 함
  - radio 크기 및 색상 변경

- 21-05-28 회의
  - 역할 분담: 선호도 테스트 (추위, 더위를 타는 정도는 일단 보류), 심리 테스트 보류
  - 뒤로 가기가 가능하게 window.location을 사용하지 않고 로컬에 정보가 쌓이게 history.push로 변경함

- 21-05-29
  - MakeButton.js에서 '다시 추천받기'버튼 클릭 시 랜덤으로 추천받는 경우와 옷장에서 고른 옷으로 추천받는 경우 다른 url로 이동하게 수정
  - :exclamation: 추후 개선하면 좋을 점 :exclamation: 현재는 RandomRecResult/SelectedRecResult -> MakeModal -> Sns -> MakeButton으로 props를 계속 전달해줘야 함. MakeButton에서 url에 따라 다른 href로 이동할 수 있게 수정하면 좋을 것이라 생각됨 

- 21-05-30
  - 선호도테스트에서 화면에 보여야 할 것들 배치
  - 이미지 src를 배열에 담아 '평가해 주세요' 버튼 클릭 시 다음 이미지가 보이게 함
  -  :exclamation: ratingBar의 초기값 설정 시 바가 움직이지 않는 문제 발생 -> 해결(21-05-31)

- 21-05-31
  - :dancers: ratingBar의 초기값 설정 시 바가 움직이지 않는 문제 해결 :dancers: : useState를 사용하여 value 값을 get하고 setValue를 통해 value 값을 set 함으로써 문제 해결
  - 선호도테스트에서 화면에 나타나는 요소들 대략적인 형태 잡음
  - 왼쪽, 오른쪽 화살표 클릭 시 이미지가 변경되게 함
  - :exclamation: ratingBar의 값을 각각의 이미지와 어떻게 연결할 것인지 생각해보기

- 21-06-01
  - :exclamation: 선호도테스트에서 10개의 옷에 대한 rating 정보를 저장하면서 인덱스를 사용한 배열 정보가 수정되지 않는 문제 발생(하단의 코드 참조) -> 해결(21-06-01)
  ```javascript
  let ratings = [null, null, null, null, null, null, null, null, null, null];
  function setRating(){
  ratings[selectedCloth] = Number(_value);
  }
  ```

  - 위의 코드는 ratings 배열의 수정으로 이어지지 않음.
  - :dancers: 선호도테스트에서 ratingBar 관련 모든 문제 해결 :dancers: : 이미지를 넘길 때마다 초기값인 3으로 지정되지 않는 문제, bar가 움직이지 않는 문제, 이미 rating한 이미지임에도 설정한 점수대로 보이지 않는 문제 모두 해결
  - 10번째 코디 평가 완료할 시 모달 생성 및 확인 버튼 누르면 메인 페이지로 이동하게 함
  - 성별 정보를 받아 성별에 따라 다른 옷이 나타날 수 있게 환경 설정

- 21-06-02
  - 선호도 테스트 흐름도 작성 

- 21-06-03 ~ 21-06-04
  - 심리 테스트 구현 및 흐름도 작성 

- 21-06-05
  - 심리 테스트 문제의 답안이 담긴 배열이 모달의 확인 버튼을 누르면 console에 나타나게 함
  - :exclamation: 다음에 useState의 setter 관련 render 공부하기
