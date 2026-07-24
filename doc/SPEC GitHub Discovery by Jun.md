# GitHub Discovery

## AI 기반 GitHub Repository Discovery Platform

### 기술명세서 (v1.0)

---

# 1. 프로젝트 개요

## 프로젝트명

**GitHub Discovery**

---

## 슬로건

> **Discover Better Repositories with AI**

---

## 목표

GitHub 사용자의 활동 데이터를 분석하여

* Developer DNA
* 관심 기술 스택
* 학습 현황
* 부족한 기술
* 추천 Repository

를 AI가 자동으로 생성하는 웹 서비스 구축

---

## 핵심 가치

GitHub는 단순한 코드 저장소가 아니라

> **개발자의 학습 이력과 관심사를 보여주는 데이터 플랫폼**

GitHub Discovery는

GitHub API와 OpenAI를 활용하여

사용자 맞춤형

> **AI Developer Coach**

를 제공한다.

---

# 2. 주요 사용자

### 개인 개발자

* 학생
* 바이브코더
* 취업 준비생
* 오픈소스 기여자

---

### 교육기관

* 부트캠프
* 대학
* 사내 교육

---

### 기업

* 개발자 역량 분석
* 기술 트렌드 분석
* 채용 참고자료

---

# 3. 기술 스택

## Frontend

* React 19
* Vite
* TypeScript
* Tailwind CSS
* React Router
* TanStack Query
* Recharts

---

## Backend

Vercel Serverless Functions

또는

Node.js + Express

---

## AI

OpenAI GPT API

활용 기능

* Repository 분석
* 관심 기술 추출
* 기술 스택 분류
* 학습 방향 추천
* Repository 추천

---

## Database

MVP

SQLite

↓

Production

Neon PostgreSQL

---

## 인증

GitHub OAuth

또는

Personal Access Token (PAT)

---

# 4. 시스템 아키텍처

```text
React

      │

GitHub OAuth

      │

GitHub API

      │

Repository Data

      │

Serverless API

      │

OpenAI GPT

      │

AI Analysis

      │

Neon DB

      │

Dashboard
```

---

# 5. GitHub API 활용

## 사용자

```text
GET /users/{username}
```

---

## Repository

```text
GET /users/{username}/repos
```

---

## Star

```text
GET /users/{username}/starred
```

---

## Following

```text
GET /users/{username}/following
```

---

## Followers

```text
GET /users/{username}/followers
```

---

## Organization

```text
GET /users/{username}/orgs
```

---

## Repository Detail

```text
GET /repos/{owner}/{repo}
```

---

## Language

```text
GET /repos/{owner}/{repo}/languages
```

---

# 6. 수집 데이터

## 사용자 정보

* 이름
* 소개
* 회사
* 지역
* 가입일
* Followers
* Following

---

## Repository

* 이름
* 설명
* Language
* Topics
* Stars
* Forks
* Updated At

---

## Star Repository

* 이름
* Owner
* Language
* Topics
* Star 수
* Description

---

## Organization

* 회사
* 프로젝트

---

# 7. AI 분석

## Developer DNA

예시

```text
Frontend

92%

Backend

71%

AI

100%

Cloud

58%

Data

42%
```

---

## 관심 기술

```text
★★★★★ AI Agent

★★★★★ React

★★★★ MCP

★★★★ RAG

★★★★ Prompt Engineering

★★ Docker

★★ Kubernetes
```

---

## Learning Radar

현재

```text
React

TypeScript

AI

Prompt
```

↓

추천

```text
Docker

Redis

CI/CD

FastAPI

Terraform
```

---

## Repository Summary

예)

LangGraph

↓

GPT

↓

```text
LangGraph는

복잡한 AI Agent Workflow를 구축하기 위한
Framework이며

State 기반 Agent를 쉽게 구현할 수 있습니다.
```

---

## AI 코칭

예)

```text
최근 30일 동안

AI Agent 관련 Repository를

12개 Star했습니다.

다음 단계로는

Docker

Redis

FastAPI

학습을 추천합니다.
```

---

# 8. 추천 시스템

추천 기준

* Star Repository
* Fork Repository
* Language
* Topics
* Following
* Trending

↓

추천

```text
OpenHands

CrewAI

FastAPI

Supabase

TanStack Query
```

---

# 9. Dashboard

## Home

GitHub Profile

↓

Developer DNA

↓

Learning Radar

↓

AI Summary

↓

Repository Recommendation

---

# 10. 주요 화면

## Hero

```text
Discover Your Developer DNA
```

---

## Developer DNA

Radar Chart

---

## Technology Ranking

| 기술         | 관심도 |
| ---------- | --: |
| AI Agent   | 100 |
| React      |  95 |
| TypeScript |  90 |
| Cloud      |  60 |

---

## Repository Recommendation

Card UI

* Repository
* Star 수
* 설명
* AI 추천 이유

---

## Activity

최근

* Star
* Fork
* Repository 생성

Timeline

---

# 11. 데이터 모델

## User

```text
id

githubId

username

avatar

bio

company

followers

following

createdAt
```

---

## Repository

```text
id

name

owner

language

topics

stars

forks

description

updatedAt
```

---

## AIAnalysis

```text
userId

developerDNA

technologyScore

learningRadar

summary

recommendation

createdAt
```

---

# 12. API 설계

```text
GET

/api/profile
```

사용자 정보

---

```text
GET

/api/repos
```

Repository

---

```text
GET

/api/starred
```

Star 목록

---

```text
POST

/api/analyze
```

GPT 분석

---

```text
GET

/api/recommendation
```

추천 Repository

---

```text
GET

/api/dashboard
```

Dashboard

---

# 13. 프로젝트 구조

```text
src/

 api/

 components/

 pages/

 hooks/

 store/

 types/

 utils/

 services/

 github.ts

 openai.ts

 recommendation.ts

 charts/

api/

 profile.ts

 repos.ts

 starred.ts

 analyze.ts

 recommendation.ts
```

---

# 14. 환경변수

```text
GITHUB_CLIENT_ID=

GITHUB_CLIENT_SECRET=

GITHUB_TOKEN=

OPENAI_API_KEY=

DATABASE_URL=
```

---

# 15. MVP 개발 순서

### Step 1

GitHub OAuth 로그인

---

### Step 2

GitHub API 연결

* Profile
* Repositories
* Starred

---

### Step 3

Dashboard UI

---

### Step 4

OpenAI GPT 분석

---

### Step 5

Developer DNA 생성

---

### Step 6

Repository 추천

---

### Step 7

Learning Radar 구현

---

### Step 8

Vercel 배포

---

# 16. 향후 확장 로드맵

### Phase 2

* GitHub Trending 자동 수집 및 개인 맞춤 추천
* GitHub Actions·Workflow 분석
* Commit 및 Contribution Heatmap 분석
* AI 기반 README 품질 평가 및 개선 제안
* Repository 난이도 및 학습 예상 시간 분석

### Phase 3

* Hugging Face 모델 및 Space 추천 연계
* Roadmap.sh 학습 로드맵 자동 연결
* GitHub Sponsors 및 오픈소스 기여 추천
* 팀 단위 Developer DNA 비교 및 기술 매칭
* AI Career Coach 및 이력서·포트폴리오 자동 생성

---

# 17. MVP 구현 우선순위

| 우선순위 | 기능                                     | 구현 난이도 |
| ---- | -------------------------------------- | ------ |
| ①    | GitHub OAuth 로그인 및 GitHub API 연동       | ★★☆☆☆  |
| ②    | Repository·Starred 데이터 수집 및 대시보드       | ★★☆☆☆  |
| ③    | OpenAI GPT 기반 Developer DNA 및 기술 스택 분석 | ★★★☆☆  |
| ④    | Learning Radar와 AI 학습 코칭               | ★★★☆☆  |
| ⑤    | Repository 추천 엔진 및 GitHub Trending 연계  | ★★★★☆  |

## 바이브코딩 교육 관점의 핵심 포인트

이 프로젝트는 단순한 GitHub API 예제를 넘어 **현대적인 AI SaaS 아키텍처**를 경험하는 데 초점을 맞춥니다.

* **Frontend:** React + Vite + Tailwind CSS
* **Backend:** Vercel Serverless Functions
* **Authentication:** GitHub OAuth
* **External APIs:** GitHub REST API + OpenAI API
* **Database:** Neon PostgreSQL
* **Visualization:** Recharts
* **Deployment:** GitHub → Vercel CI/CD

특히 **GitHub → AI 분석 → 시각화 → 개인 맞춤 추천**이라는 흐름은 학습자가 API 활용, LLM 통합, 데이터 분석, 추천 시스템, 클라우드 배포를 하나의 프로젝트에서 모두 경험할 수 있도록 설계되어 있어, 10일간의 바이브코딩 과정의 캡스톤 프로젝트로 적합합니다.
