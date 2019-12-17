## 실행방법

```
git clone https://github.com/dwook/blended-CodingTest-FrontEnd.git
cd blended-CodingTest-FrontEnd
yarn install
yarn start
```

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

-

## 배운점 및 아쉬운점

-
