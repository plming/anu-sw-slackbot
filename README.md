# ANU SW Slackbot
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deploy to App Engine](https://github.com/plming/anu-sw-slackbot/actions/workflows/main.yml/badge.svg)](https://github.com/plming/anu-sw-slackbot/actions/workflows/main.yml)

## ๐ข ์๊ฐ
[์๋๋ํ๊ต SW์ตํฉ๊ต์ก์](https://sw.anu.ac.kr)๋ด ์๋ก์ด ์ง์์ฌ์์ด ๊ฒ์๋ผ๋ ๋์น๋ ๊ฒฝ์ฐ๊ฐ ์๊ฒจ ๋ง๋ , ์ฑ๋์ ๋ฉ์์ง๋ฅผ ์ ์กํ์ฌ ์๋ ค์ฃผ๋ ์ฌ๋ ๋ด์๋๋ค.

## ๐  ์ฌ์ฉ ๋๊ตฌ
* Node.js
* Typescript
* Slack API - Webhook์ผ๋ก ์ฑ๋์ ๋ฉ์์ง ์ ์ก
* MongoDB - ๊ฒ์ํ ํฌ๋กค๋ง ๊ฒฐ๊ณผ๋ฅผ ์ ์ฅ
* Google Cloud Platform
  * App Engine - ์ฑ ๋ฐฐํฌ
  * Cloud Scheduler - ์ง์์ฌ์ ๊ฒ์ํ์ ๋ณ๊ฒฝ์ฌํญ์ ์ฃผ๊ธฐ์ ์ผ๋ก ํ์ธํ๋ cron ์์ ์ฒ๋ฆฌ
* Insomnia - REST API ํ์คํธ์ฉ์ผ๋ก ์ฌ์ฉ

## ๐ฅ ๋ฐฐํฌ
### ๋ก์ปฌ ํ๊ฒฝ
```bash
# ์ฌ๋๋ด ์๋ฒ ์คํ
npm run start

# OS์์ /run์ GET ์์ฒญํ๋๋ก cron ์์ ์ค์ 
```
### Google Cloud Platform
```bash
# Google Cloud SDK ์ด๊ธฐํ
gcloud init

# App Engine์ ๋ฐฐํฌ
gcloud app deploy

# ์ดํ Cloud Scheduler์ ์ /run์ GET ์์ฒญํ๋๋ก cron ์์ ์ค์ 
```

## ๐ป ๋ฐ๋ชจ
<img width="50%" alt="slackbot demo" src="https://user-images.githubusercontent.com/8957536/174318945-e9ed98c4-4cbf-4737-8153-e8fa4dff93d4.png">

> [Slack ๋ผ์ด๋ธ ๋ฐ๋ชจ](https://join.slack.com/t/anu-sw-slackbot/shared_invite/zt-1a97t7g3n-o8cWFgwSHBDhqqHBFekYyQ)

## ๐ TODO
- [ ] ์ฌ๋ ๋ฉ์์ง UI ๊ฐ์ 
- [ ] ๊ธฐ์กด ์ง์์ฌ์ ๋ด์ฉ ๋ณ๊ฒฝ์ ์ถ๊ฐ๋ก ์๋ฆฌ๋ ๊ธฐ๋ฅ ๊ตฌํ
- [x] Github Actions๋ฅผ ์ฌ์ฉํ์ฌ ์ง์์  ๋ฐฐํฌ(CD) ๊ตฌํ
  - ์ฐ์  Cloud Build์์ Github push๋ฅผ ์ถ์ ํ๊ฒ ํ์์ง๋ง, ๋จ์ repo ๋ณต์ ๋ผ์ secret์ ์ ๋ฌํ๋๊ฒ ๋ถ๊ฐ๋ฅ
  - ๋ฐ๋ผ์ Github Actions๋ฅผ ์ฌ์ฉํด .env ํ์ผ ์์ฑ ๋ฐ ์ฃผ์ํจ
- [x] ๋น๋๊ธฐ ์ฒ๋ฆฌ ๋ก์ง ๊ฐ์ 
  - web scraping ๊ณผ์ ์์ ๋คํธ์ํฌ I/O์ ์๊ฐ์ด ๋ง์ด ์์๋จ
  - ๋น๋๊ธฐ ์ฒ๋ฆฌ ํ์ต ํ async, await, promise๋ฅผ ์ฌ์ฉํด ๋ฆฌํฉํ ๋งํจ
  - ๊ฐ๋ฐํ๊ฒฝ ๊ธฐ์ค 7s์์ <1s๋ก ๋จ์ถ์ํด