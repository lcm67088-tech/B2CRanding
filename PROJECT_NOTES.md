# PROJECT_NOTES

## 2026-05-29

- `landing.papainsight.co.kr` 도메인은 서버에서 `/var/www/landing.papainsight.co.kr` 정적 폴더를 바라보는 것으로 확인됐다.
- 서버의 해당 배포 폴더는 `Git`(깃: 코드 버전 관리 도구) 저장소가 아니었다.
- 랜딩 페이지 관리는 `GitHub`(깃허브: 코드 저장소 서비스) 저장소 `lcm67088-tech/B2CRanding` 기준으로 정리한다.
- `assets/` 폴더의 이미지와 리소스는 그대로 유지한다.
- `v2` 랜딩 페이지 내용을 기본 배포 파일인 `index.html`, `styles.css`, `script.js`에 반영한다.
- 기존 기본 파일은 `archives/2026-05-29-before-v2/`에 보관한다.

## 배포 참고

- 서버에서 이 저장소를 배포 폴더로 직접 연결하려면 `/var/www/landing.papainsight.co.kr`를 백업한 뒤 `GitHub` 원격 저장소와 연결해야 한다.
- 현재 작업은 로컬 저장소 파일 정리이며, 서버 배포 폴더의 파일 변경은 별도 서버 명령으로 진행해야 한다.
