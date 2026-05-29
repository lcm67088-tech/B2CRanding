# ERROR_LOG

## 2026-05-29

- `E:\codex\Randing` 루트에서 `git status --short --branch`, `git remote -v`를 실행했지만 해당 폴더가 `Git`(깃: 코드 버전 관리 도구) 저장소가 아니어서 실패했다.
  - 원인: 실제 저장소는 하위 폴더 `E:\codex\Randing\B2CRanding`에 있었다.
  - 조치: `B2CRanding` 폴더로 이동해 원격 저장소와 상태를 확인했다.
- `AGENTS.md`, `PROJECT_NOTES.md`, `CHANGELOG.md`, `README.md`를 루트에서 읽으려 했으나 일부 파일이 없어서 실패했다.
  - 원인: 문서가 저장소 루트에 없거나 아직 생성되지 않았다.
  - 조치: `B2CRanding` 저장소 안에 필요한 문서를 생성하고 `README.md`를 갱신했다.
- Codex 내장 브라우저 연결을 시도했으나 샌드박스 초기화 오류로 실패했다.
  - 원인: 브라우저 런타임 초기화 중 `windows sandbox failed` 오류가 발생했다.
  - 조치: 로컬 `Playwright`(플레이라이트: 브라우저 자동화 테스트 도구) 실행으로 대체 검증을 진행한다.
- 로컬 `node_modules`의 `playwright` 실행을 시도했으나 `playwright-core` 모듈이 없어 실패했다.
  - 원인: `E:\codex\Randing\node_modules` 의존성 설치가 불완전했다.
  - 조치: Codex 번들 런타임의 `Node.js`(노드제이에스: 자바스크립트 실행 환경)와 패키지를 사용해 재검증한다.
- `node --check ops\google-sheet-submit.apps-script.gs`로 `Google Apps Script`(구글 앱스 스크립트: 구글 서비스 자동화 코드) 문법 검사를 시도했으나 `.gs` 확장자를 `Node.js`가 직접 처리하지 못해 실패했다.
  - 원인: `Node.js` 문법 검사 명령은 `.gs` 확장자를 기본 자바스크립트 파일로 인식하지 않는다.
  - 조치: 파일 내용을 읽어 `Function` 생성자로 파싱하는 방식으로 문법 검사를 대체한다.
