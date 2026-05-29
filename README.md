# B2CRanding

`landing.papainsight.co.kr` 랜딩 페이지 정적 파일 저장소입니다.

## GitHub

- 저장소: `https://github.com/lcm67088-tech/B2CRanding.git`
- 기본 브랜치: `main`

## 주요 파일

- `index.html`: 실제 배포용 `HTML`(에이치티엠엘: 화면 구조 코드)
- `styles.css`: 실제 배포용 `CSS`(씨에스에스: 화면 스타일 코드)
- `script.js`: 실제 배포용 `JS`(제이에스: 화면 동작 코드)
- `assets/`: 이미지와 정적 리소스
- `archives/`: 이전 배포 파일 보관 폴더
- `ops/google-sheet-submit.apps-script.gs`: 상담 폼 수신용 `Google Apps Script`(구글 앱스 스크립트: 구글 서비스 자동화 코드)

## 이번 v2 반영 기준

`index-v2.html`, `styles-v2.css`, `script-v2.js` 내용을 기본 배포 파일인 `index.html`, `styles.css`, `script.js`에 반영했습니다.

기존 기본 파일은 아래에 보관했습니다.

```text
archives/2026-05-29-before-v2/
```

## 서버 배포 참고

현재 서버에서 확인된 도메인 연결 폴더는 다음과 같습니다.

```text
/var/www/landing.papainsight.co.kr
```

서버 배포 폴더가 아직 `GitHub`(깃허브: 코드 저장소 서비스)와 직접 연결되어 있지 않다면, 서버에서 해당 폴더를 백업한 뒤 이 저장소를 기준으로 연결해야 합니다.

## 설문 응답 시트

상담 폼은 `script.js`와 `script-v2.js`에서 `Google Apps Script`(구글 앱스 스크립트: 구글 서비스 자동화 코드)로 전송됩니다.

시트 저장 로직은 `ops/google-sheet-submit.apps-script.gs`에 있으며, 시트 헤더명 기준으로 값을 매핑합니다. 현재 폼에 없는 `플레이스 MID값`, `수정된 플레이스 주소` 컬럼은 빈칸으로 저장합니다.

현재 웹 앱 URL:

```text
https://script.google.com/macros/s/AKfycbzwg-ZKLZSYVLuZK6vTWBlGL8gg7fvU4tFIAtLlMX6xTbs1qdYYPRhaJ6TLINaPq3EH/exec
```
