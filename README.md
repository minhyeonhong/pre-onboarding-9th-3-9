# 3주차 기업과제

> 원티드에서 진행하는 3주차 [플렉시스](http://flexsys.co.kr/) 기업과제 입니다.

<br/>

## [🔗 배포 URL]()

<br/>

## ⚙️ 프로젝트의 실행 방법

> 💡주의 : 해당 프로젝트의 데이터는 mock-data 입니다.

**Install**

```bash
npm install
```

**Start**

```bash
npm start
```

<br/>

## ✅ 요구사항

#### Assignment 1

> 시계열 차트 만들기
- 주어진 JSON 데이터의 key값(시간)을 기반으로 시계열 차트를 만들어주세요
하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
- Area 그래프의 기준값은 value_area 값을 이용해주세요
- Bar 그래프의 기준값은 value_bar 값을 이용해주세요
- 차트의 Y축에 대략적인 수치를 표현해주세요

#### Assignment 2

> 호버 기능 구현
- 특정 데이터 구역에 마우스 호버시 id, value_area, value_bar 데이터를 툴팁 형태로 제공해주세요

#### Assignment 3

> 필터링 기능 구현
- 특정 데이터를 하이라이트 하는 방식으로 구현해주세요
- 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
- 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
- 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

<br />

## 📽️ 데모 영상
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/90454621/230378281-6c5376b5-fb4f-4106-846e-29dfb7488b5a.gif)


## 📚 구현 기능 설명
- 첫 화면 진입 시 `전체` 데이터 하이라이트 상태를 적용합니다.
- 특정 데이터 구역을 클릭하면, 해당 id 값을 가진 데이터 구역이 하이라이트 처리되고, 버튼이 활성화됩니다.
- `react-router`의 `useSearchParams`로 필터링 기능을 구현하여 필터링 조건이 url의 query string으로 유지되도록 합니다.



<br/>

## ⚙️ 기술 스택
`TypeScript`
`CRA`
`axios`
`react-router-dom`
`ApexCharts.js`


<br/>

## 🗂️ 폴더구조

```bash
ㄴ 📁 public
   ㄴ 📁 mock
      ㄴ 📄 mock_data.json
ㄴ 📁 src
   ㄴ 📁 apis
      ㄴ 📄 instance.ts
   ㄴ 📁 components
      ㄴ 📁 ui
         ㄴ 📄 Button.tsx
         ㄴ 📄 Footer.tsx
         ㄴ 📄 Header.tsx
      ㄴ 📄 Chart.tsx
   ㄴ 📁 hooks
      ㄴ 📄 useMockData.ts
   ㄴ 📁 page
      ㄴ 📄 MainPage.tsx
   ㄴ 📁 types
      ㄴ 📄 chartTypes.ts
      ㄴ 📄 custom.d.ts
   ㄴ 📄 App.tsx
   ㄴ 📄 index.tsx
```

<br/>

## 🕖 타임라인

**_2023.03.13 ~ 2023.03.17 (5일)_**
| 기간 | 진행 사항 |
|------|------|
|2023/03/13| 사용 기술 스택 및 라이브러리 선정, git convention 및 폴더 구조 작성, 프로젝트 초기화 설정 |
|2023/03/15| 기능구현 |
|2023/03/16| 코드 리뷰 및 best practice 선정 |
|2023/03/17| 리팩토링 및 배포 |

<br/>

## 🧑🏻‍🏫 협업 방법

1. 빠른 소통과 업무 협업을 위해 `슬랙` 채널을 사용합니다.
2. 이슈별로 기능 구현 후 PR을 생성합니다.
3. `코드 리뷰`를 통해 `Best practice` 선정 후 develop에 merge합니다.
4. 추가 리팩토링 실시 후 배포합니다.

<br/>

## 📖 Commit Message Prefix

- `Feat`: 새로운 기능 추가
- `Fix`: 버그 수정
- `Docs`: 문서 수정, 파일 추가 및 삭제, 파일명 변경
- `Style`: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락 등)
- `Refactor`: 코드 리팩토링
- `Test`: 테스트 코드, 리펙토링 테스트 코드 추가
- `Chore`: 빌드 업무 수정, 패키지 매니저 수정(.gitignore 수정 등)
- `Init`: 초기셋팅 (esLint 적용 등)

<br/>

## 📖 Git Flow

- **master(main)** : 배포하는 브랜치
- **develop** : 개발 브랜치
- **feature** : 단위 기능을 개발하는 브랜치


<br/>

## 📖 Git Convention

- 안쓰는 코드들(콘솔, 주석)은 쌓아두지 말고 지워주세요!
- Pull → Commit → Push 순서로 작업해주세요!
- Push 전 코드를 실행하여 에러를 먼저 확인한 후, PR해요!
- PR을 거쳐 모든 팀원들이 승인 및 코드리뷰 후, merge 합니다. conflict 해결은 모든 팀원이 함께 참여해요!
- PR승인 후 squash and merge 를 하여 커밋을 합쳐주세요 > merge 된 branch는 꼭 삭제 해주세요!
  (\*develop branch는 개발 branch입니다. 삭제하지 말아주세요)

<br/>

## 🥸 팀원 소개

<table>
<tbody>
<tr>
<td  align="center">
<a  href="https://github.com/minhyeonhong"><img  src="https://avatars.githubusercontent.com/u/90454621?v=4(https://avatars.githubusercontent.com/u/90454621?v=4)"  width="100px;"  alt=""/>
<br  /><sub><b>민현홍</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/Hwang-Junsu"><img  src="https://avatars.githubusercontent.com/u/80745897?v=4(https://avatars.githubusercontent.com/u/80745897?v=4)"  width="100px;"  alt=""/><br  /><sub><b>황준수</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/eunrain"><img  src="https://avatars.githubusercontent.com/u/113877276?v=4(https://avatars.githubusercontent.com/u/113877276?v=4)"  width="100px;"  alt=""/><br  /><sub><b>고은비</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/yeon-kk"><img  src="https://avatars.githubusercontent.com/u/86847564?v=4(https://avatars.githubusercontent.com/u/86847564?v=4)"  width="100px;"  alt=""/><br  /><sub><b>곽연경</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/whl5105"><img  src="https://avatars.githubusercontent.com/u/73993670?v=4(https://avatars.githubusercontent.com/u/73993670?v=4)"  width="100px;"  alt=""/><br  /><sub><b>최수인</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/minhyeonhong"><img  src="https://avatars.githubusercontent.com/u/90454621?v=4(https://avatars.githubusercontent.com/u/90454621?v=4)"  width="100px;"  alt=""/><br  /><sub><b>김민영</b></sub></a><br  /></td>

</tbody>
</table>
