# Contributing

Thanks for your interest in improving Bizdavar Group's web platform.

## Before you start

1. Open an issue for significant behavior or architecture changes.
2. Fork the repository or create a feature branch.
3. Keep changes focused and avoid unrelated formatting churn.
4. Never commit credentials, customer information, server backups, or generated secrets.

## Local checks

Run:

```bash
npm run audit
```

The audit must pass before a pull request is ready for review.

## Pull requests

A good pull request should include:

- a clear problem statement
- a concise description of the solution
- screenshots for visible UI changes
- testing notes
- any deployment or migration considerations

Use conventional, descriptive commit messages where practical, for example:

```
feat: add multilingual service landing page
fix: correct canonical URL generation
docs: clarify cPanel deployment process
```

## Engineering principles

- preserve multilingual behavior across Persian, Turkish, and English
- prefer simple, maintainable solutions over unnecessary dependencies
- keep production deployment reproducible
- document non-obvious architectural decisions
- treat accessibility, performance, SEO, and security as product requirements
