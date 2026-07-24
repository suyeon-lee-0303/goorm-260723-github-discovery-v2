# GitHub Discovery

> Discover Better Repositories with AI

AI 기반 GitHub Repository Discovery Platform입니다.  
기술명세(`doc/SPEC GitHub Discovery by Jun.md`)와 VCD 디자인 시스템을 바탕으로 **UI-first MVP**를 구현했습니다.

## 이번 작업 요약 (Phase 1: UI)

### 주요 내용

- Vite + React 19 + TypeScript 프로젝트 스캐폴딩
- Tailwind CSS v4 디자인 토큰 반영 (`DESIGN.md` 컬러·타이포·간격·글래스모피즘)
- 브랜드명 **GitHub Discovery**로 통일 (디자인 시안의 DevDNA AI → 명세 기준 변경)
- 디자인 4화면을 React 페이지로 이식하고 mock 데이터로 연결
- React Router 라우팅 및 공통 레이아웃(TopNav / SideNav / MobileBottomNav)
- Recharts 기반 Developer DNA 레이더 차트
- 추천 Repository 클라이언트 검색 필터

### 화면 구성

| 경로 | 화면 | 주요 구성 |
|------|------|-----------|
| `/` | Landing | Hero, Precision Insights 벤토, CTA |
| `/dashboard` | Main Dashboard | Profile, Developer DNA, Learning Compass, AI Coaching |
| `/analysis` | AI Tech Analysis | Skill Ranking, Coaching cards, Activity Stream |
| `/recommendations` | Repository Recommendations | 추천 카드, 토픽 칩, 검색 필터 |

### 오류·이슈 수정

| 이슈 | 조치 |
|------|------|
| `create-vite`가 `doc/`가 있는 비어 있지 않은 디렉터리에서 취소됨 | `/tmp`에 스캐폴드 후 프로젝트로 복사 |
| TypeScript 6.0에서 `baseUrl` deprecation으로 `tsc -b` 실패 | `tsconfig.app.json`에 `ignoreDeprecations: "6.0"` 추가 |
| 디자인 HTML의 `strikethrough_s` 아이콘이 DNA 의미와 불일치 | Material Symbol `genetics`로 교체 |
| 브랜드명 불일치 (DevDNA AI vs GitHub Discovery) | UI 전역을 GitHub Discovery로 통일 |

### 프로젝트 구조

```text
src/
  components/
    charts/          # DeveloperDnaChart (Recharts)
    layout/          # TopNav, SideNav, AppShell, MobileBottomNav
  data/mock.ts       # Phase 1 mock 데이터
  pages/             # Landing, Dashboard, Analysis, Recommendations
  types/             # 공통 타입
  index.css          # Tailwind v4 @theme 디자인 토큰
doc/
  SPEC GitHub Discovery by Jun.md
```

## 스택

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- React Router
- Recharts

## 실행

```bash
npm install
npm run dev
```

프로덕션 빌드:

```bash
npm run build
npm run preview
```

## 다음 단계 (Phase 2: API / AI 연동)

1. GitHub OAuth 로그인
2. GitHub API 연동 (profile / repos / starred)
3. OpenAI GPT 분석 (`/api/analyze`) — Developer DNA, Learning Radar
4. Repository 추천 엔진
5. Neon PostgreSQL 저장
6. Vercel 배포
