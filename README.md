# 🚀 Mobje SaaS Analytics Platform - Under Development

A modern, lightweight customer behavior tracking SaaS built with Next.js, Prisma, and PostgreSQL.

---

## 🧠 Overview

This project is a simplified analytics platform (similar to Google Analytics / Hotjar) that allows businesses to:

* Track user activity on their websites
* Monitor page views and events
* Visualize data in a clean dashboard

---

## ⚙️ Tech Stack

* **Frontend & Backend**: Next.js (App Router)
* **Database**: PostgreSQL
* **ORM**: Prisma
* **Hosting**: Vercel
* **Database Hosting**: TBC

---

## 📦 Features (MVP)

* 🔐 Authentication (Register / Login)
* 🏢 Multi-tenant architecture (Organizations)
* 🌐 Website tracking (via script)
* 📊 Analytics dashboard (page views, events)

---

## 🏗️ Project Structure

```
app/
  (auth)/
  (dashboard)/
  api/

lib/
  db.ts

prisma/
  schema.prisma

components/
```

---

## 🧱 Database Schema

Core models:

* **Organization**
* **User**
* **Site**
* **Event**

Relationship:

```
User → Organization → Sites → Events
```

---

## 🚀 Getting Started

Instruction wil be provided once MVP is complete

---

## 🧠 Architecture

```
Client Website → tracker.js → API → Database → Dashboard
```

---

## ⚠️ Current Status

🚧 MVP in development
🔜 Database setup complete
🔜 Authentication system
🔜 Tracking API
🔜 Dashboard UI

---

## 🔮 Future Improvements

* Real-time analytics
* Event batching
* Heatmaps
* Funnel tracking
* AI insights

---

## 💡 Learning Goals

This project focuses on:

* Full-stack development with Next.js
* Prisma & PostgreSQL fundamentals
* SaaS architecture (multi-tenancy)
* Performance and scalability patterns

---

## 🧑‍💻 Author

**Bivek Jang Gurung**  
Front-End Developer | React Specialist 
📍 Sydney, Australia  
🌐 [bivekgurung.com](https://bivekgurung.com)  
💼 [LinkedIn](https://www.linkedin.com/in/bivek-gurung-b4602a62/)

---


## 📄 License

This project is licensed under the **MIT License** — free to explore, use, and learn from.

---

## 🙌 Acknowledgements

Inspired by modern analytics tools like Google Analytics, Hotjar, and Mixpanel.
