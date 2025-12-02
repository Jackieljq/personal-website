# Personal Portfolio Website

A clean and modern personal portfolio website built with **Next.js 14**, **React**, and **Tailwind CSS** — inspired by Brittany Chiang’s layout.  
The site features a **sticky left sidebar** and a **scrollable right content area**, with modular styling and full responsiveness.

---

## ✨ Features

- 🧭 Sticky left sidebar with smooth navigation  
- 🌗 Light / Dark mode with theme toggle  
- 🎨 Clean typography and modular CSS (layout, components, typography, hero)  
- 📱 Fully responsive design  
- ⚡ Built with Next.js App Router (server components)  
- 🎯 Portfolio sections:
  - About  
  - Skills  
  - Experience (timeline style)  
  - Projects  
  - Education  

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14  
- **UI:** React, Tailwind CSS  
- **Styling:** Modular CSS + Tailwind utilities  
- **Language:** TypeScript  
- **Deployment:** Vercel  

---

## 📁 Project Structure
personal-website/
│
├─ app/
│  ├─ page.tsx
│  ├─ layout.tsx
│  ├─ globals.css
│  └─ styles/
│     ├─ layout.css
│     ├─ typography.css
│     ├─ components.css
│     └─ hero.css
│
├─ components/
│  ├─ Header.tsx
│  ├─ IntroSidebar.tsx      ← Sticky left column
│  ├─ Hero.tsx              ← About section
│  ├─ SkillsSection.tsx
│  ├─ ExperienceSection.tsx
│  ├─ ProjectsSection.tsx
│  ├─ EducationSection.tsx
│  └─ ThemeToggle.tsx
│
└─ public/

---

## 🚀 Local Development

### 1. Clone repository

```bash
git clone https://github.com/Jackieljq/personal-website.git
cd personal-website

2. Install dependencies
```bash
npm install

3. Start dev server
```bash
http://localhost:3000

# 🌐 Deployment on Vercel

Vercel is the official hosting platform for Next.js and provides seamless deployment.

---

## ▶ How to open the deployed website

Your live deployed site is available at:

👉 **https://personal-website-tau-gules.vercel.app/**

This link is public and always serves the latest code from the `main` branch.

---

## ▶ Deploy to Vercel (One-Click)

1. Go to **https://vercel.com**
2. Log in with GitHub
3. Click **Add New Project**
4. Select your repository **personal-website**
5. Keep all default settings:
   - Framework: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`
6. Click **Deploy**

After a few seconds, your project will be live.

---

## ▶ Automatic Deployment (Git Push → Auto Deploy)

Every push to GitHub automatically triggers a new Vercel deployment.

Example workflow:

```bash
git add .
git commit -m "update website layout"
git push
