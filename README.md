<div align="center">

# 📡 StackRadar — Frontend

### Next.js · TypeScript · Tailwind CSS · Recharts

**The UI layer of StackRadar — AI-powered tech stack trend analyzer**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[Live Demo](#) · [Backend Repo](https://github.com/haseebcodess/stackradar-backend) · [Report Bug](https://github.com/haseebcodess/stackradar-frontend/issues)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Pages](#-pages)
- [Components](#-components)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Local Setup](#-local-setup)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Author](#-author)

---

## 🧭 Overview

This is the frontend repository for StackRadar. It connects to the
FastAPI backend to display real-time market demand data, technology
growth trends, skill analysis results, and tech battle comparisons.

The UI is built with Next.js 14 App Router, styled with Tailwind CSS,
and uses Recharts for all data visualizations. The color palette uses
Coral and Warm Yellow as primary accents on a clean white background.

> **Backend repository:**
> https://github.com/haseebcodess/stackradar-backend

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Main dashboard — all 4 sections |
| `/about` | What StackRadar is, why it was built, FAQs |
| `/developer` | Developer profile and contact |

---

## 🧩 Components

| Component | Description |
|-----------|-------------|
| `Sidebar` | Fixed left navigation with anchor + page links |
| `Footer` | 4-column footer with links and data sources |
| `PageLayout` | Shared wrapper for About and Developer pages |
| `LoadingScreen` | Animated loading screen shown on first data fetch |
| `MarketDemand` | Horizontal bar chart — top 15 technologies |
| `GrowthTrends` | Line chart with 5-year history and forecast |
| `SkillAnalysis` | Skill input, match score, learn next, gap chart |
| `TechBattle` | VS comparison cards with bar charts |

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 14 | React framework with App Router and SSR |
| TypeScript | 5.0 | Type safety across all components |
| Tailwind CSS | 3.4 | Utility-first styling |
| Recharts | 2.12 | Bar charts, line charts, data visualization |
| Axios | 1.7 | HTTP client for API requests |
| Lucide React | 0.383 | Icon library |

---

## 📁 Project Structure