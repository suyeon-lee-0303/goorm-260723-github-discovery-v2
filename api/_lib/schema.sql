-- Run in Neon SQL editor if auto-migrate is disabled
CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  github_id BIGINT UNIQUE NOT NULL,
  username TEXT NOT NULL,
  name TEXT,
  avatar_url TEXT,
  bio TEXT,
  company TEXT,
  location TEXT,
  followers INT DEFAULT 0,
  following INT DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_analyses (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  github_id BIGINT NOT NULL,
  developer_dna JSONB NOT NULL,
  learning_radar JSONB NOT NULL,
  summary TEXT,
  recommendation JSONB,
  analysis_payload JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS ai_analyses_github_id_created_at_idx
  ON ai_analyses (github_id, created_at DESC);
