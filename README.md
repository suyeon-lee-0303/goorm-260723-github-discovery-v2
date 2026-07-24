# GitHub Discovery

> Discover Better Repositories with AI

AI 기반 GitHub Repository Discovery Platform (풀 MVP).

## 스택

- React 19 + Vite + TypeScript + Tailwind CSS v4 + TanStack Query
- Vercel Serverless Functions (`/api`)
- GitHub OAuth + iron-session
- OpenAI GPT 분석
- Neon PostgreSQL 캐시/저장

## 로컬 실행

1. `.env.example`을 복사해 `.env.local`을 만들고 값을 채웁니다.

```bash
cp .env.example .env.local
```

필수 값:

- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`
- `SESSION_SECRET` (32자 이상)
- `OPENAI_API_KEY`
- `APP_URL=http://localhost:5173`
- `DATABASE_URL` (Neon — 없으면 메모리 캐시만 사용)

2. GitHub OAuth App 설정

- Homepage URL: `http://localhost:5173`
- Authorization callback URL: `http://localhost:5173/api/auth/callback`

3. 터미널 두 개에서 실행:

```bash
npm install
npm run dev:api
npm run dev
```

- UI: http://localhost:5173  
- API는 Vite가 `/api`를 `localhost:3000`(vercel dev)으로 프록시합니다.

## 화면

| 경로 | 설명 |
|------|------|
| `/` | Landing + GitHub 로그인 |
| `/dashboard` | Profile, Developer DNA, Learning Compass |
| `/analysis` | Skill Ranking, Coaching, Activity |
| `/recommendations` | AI 추천 Repository |

## API

| Method | Path | 설명 |
|--------|------|------|
| GET | `/api/auth/github` | OAuth 시작 |
| GET | `/api/auth/callback` | OAuth 콜백 |
| GET | `/api/auth/me` | 세션 사용자 |
| POST | `/api/auth/logout` | 로그아웃 |
| GET | `/api/profile` | GitHub 프로필 |
| GET | `/api/repos` | 내 Repository |
| GET | `/api/starred` | Starred |
| POST | `/api/analyze` | 강제 재분석 |
| GET | `/api/dashboard` | 대시보드 합성 데이터 |
| GET | `/api/analysis` | 분석 화면 데이터 |
| GET | `/api/recommendation` | 추천 Repository |

## Neon

스키마는 첫 DB 사용 시 자동 생성됩니다. 수동 적용은 [`api/_lib/schema.sql`](api/_lib/schema.sql)을 참고하세요.

분석 결과는 약 30분 TTL로 Neon + 메모리에 캐시됩니다.

## Vercel 배포

1. 이 리포를 Vercel에 Import
2. Environment Variables에 `.env.local`과 동일한 키 등록
3. `APP_URL`을 배포 URL로 변경 (예: `https://your-app.vercel.app`)
4. GitHub OAuth App callback을 `{APP_URL}/api/auth/callback`으로 업데이트
5. Deploy

```bash
npx vercel
```

빌드 확인:

```bash
npm run build
```

## 보안

- `.env.local` / secrets는 커밋하지 마세요 (`.gitignore`에 포함됨)
- GitHub access token은 httpOnly 세션 쿠키에만 저장하고 DB에는 프로필·분석만 저장합니다
