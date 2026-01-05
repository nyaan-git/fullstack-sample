# Fullstack Sample App

React + Spring Boot + PostgreSQL のフルスタック構成サンプルアプリです。

## 技術スタック

| 領域 | 技術 |
|------|------|
| Frontend | React + Vite (TypeScript) |
| Backend | Spring Boot 3.x (Java 21) |
| Database | PostgreSQL 15 |
| インフラ | Docker Compose |

## 構成図

```
┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│   React     │────▶│ Spring Boot │────▶│  PostgreSQL  │
│   :5173     │ API │    :8080    │     │    :5432     │
└─────────────┘     └─────────────┘     └──────────────┘
```

## セットアップ

### 必要なもの

- Docker
- Node.js
- Java 21

### 起動方法

#### 開発モード（推奨）

```bash
# DB を起動
docker-compose up -d db

# Backend を起動
cd backend
./gradlew bootRun

# Frontend を起動（別ターミナル）
cd frontend
npm install
npm run dev
```

#### Docker で全部起動

```bash
docker-compose up --build
```

### アクセス

- Frontend: http://localhost:5173
- Backend API: http://localhost:8080/api/messages

## API

| Method | Endpoint | 説明 |
|--------|----------|------|
| GET | /api/messages | メッセージ一覧取得 |
| POST | /api/messages | メッセージ作成 |

### リクエスト例

```bash
# 一覧取得
curl http://localhost:8080/api/messages

# 作成
curl -X POST http://localhost:8080/api/messages \
  -H "Content-Type: application/json" \
  -d '{"content": "こんにちは"}'
```

## ディレクトリ構成

```
fullstack-sample/
├── docker-compose.yml
├── frontend/
│   ├── src/
│   │   └── App.tsx
│   └── package.json
└── backend/
    ├── Dockerfile
    ├── build.gradle
    └── src/main/java/com/example/backend/
        ├── BackendApplication.java
        ├── Message.java
        ├── MessageRepository.java
        ├── MessageController.java
        └── WebConfig.java
```
