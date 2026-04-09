# Contributing Guide

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production-ready code only |
| `develop` | Integration branch — all features merge here first |
| `feature/*` | New features (e.g. `feature/ai-pipeline`) |
| `fix/*` | Bug fixes |
| `hotfix/*` | Critical production fixes |

## Workflow

```
feature/your-feature
        │
        ▼
    develop  ──── CI passes ────▶  main
```

1. Branch off `develop`: `git checkout -b feature/your-feature develop`
2. Commit with clear messages: `feat: add CLIP encoder`, `fix: FAISS index path`
3. Open a Pull Request targeting `develop`
4. At least 1 review required before merge

## Commit Convention

```
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Formatting
refactor: Code restructure
test:     Tests
chore:    Build / tooling
```
