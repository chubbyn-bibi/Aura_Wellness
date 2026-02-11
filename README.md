# Playwright E-commerce Automation

## Automation Approach
This project follows an **automation QA**.

- **UI Automation (Playwright)** is prioritized to protect business-critical user journeys:
  - Login
  - Add to cart
- API tests are intentionally skipped because SauceDemo does not expose public APIs.
- Focus is on **stable selectors, fast feedback, and confidence to ship**.

## Tools
- **Playwright**: fast, reliable UI automation with auto-wait and tracing
- **Docker + Docker Compose**: one-command execution, consistent environment
- **SauceDemo (Hosted SUT)**: stable demo e-commerce app

## How to Run (Docker)
```bash
docker compose up --build
