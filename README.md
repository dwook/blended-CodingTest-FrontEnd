## 실행방법

```
git clone https://github.com/dwook/blended-CodingTest-FrontEnd.git
cd blended-CodingTest-FrontEnd
yarn install
yarn start
```

## 배포

[https://blended-movie.netlify.com/](https://blended-movie.netlify.com//)

## 요구사항

1. User can see all the latest movie on the front page

- [x] `GET/movie/latest` API는 응답이 영화가 한편만 나와서 `GET/discover/movie` API를 사용해 primary_release_date 기준으로 현재시간에서 내림차순으로 보여지게 하였습니다.

2. User scroll down to see all other movies according to release date

- [x] 화면 하단으로 스크롤 할때마다, 영화가 20개씩 추가되도록 구현하였습니다.

3.  User can click on any of the movie to go to their own separate page

- [x] React Router를 이용하여, 영화를 클릭하면 상세페이지(/movies/:id)로 이동할 수 있게 하였습니다.

4.  User can then see all about the movie ratings, about, actors present on each separate movie page

- [x] 상세페이지에서 영화평점, 개요, 배우 정보를 보여지게 하였습니다.

## 문제해결

- 작업 초기에 스크롤을 할 때마다 영화 리스트가 추가되는 스크롤 이벤트를 최상위 App 컴퍼넌트에 작성했었습니다. 작업이 진행하면서, 상세페이지를 보여주는 Details 컴퍼넌트, 영화 리스트를 보여주는 List 컴퍼넌트로 분리되었습니다. Details 컴퍼넌트 작업을 하다가, 발생하지 말아야할 스크롤 이벤트가 발생하고 있다는 것을 Redux Dev Tool을 통해 확인했습니다. 스크롤 이벤트를 최상위 App 컴퍼넌트에서 List 컴퍼넌트에서만 발생하도록 변경하여서 문제를 해결했습니다.

## 배운점 및 아쉬운점

- 컴퍼넌트를 분리하면서, 이벤트 관리에 주의해야겠다는 생각을 했습니다.
- git 커밋 메시지에 맞는 코드 변경만을 작성해야 하는 데, 아직 부족한 것 같습니다. 커밋 메시지에 맞는 코드만이 반영될 수 있도록 더 노력해야겠습니다.
