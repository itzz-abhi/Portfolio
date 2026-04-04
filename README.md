# Portfolio

# 🚀 Abhishek Singh — Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

🔗 **Live Demo:** [portfolio-pi-woad-54.vercel.app](https://portfolio-pi-woad-54.vercel.app)

---

## ✨ Features

- ⚡ Smooth animations powered by **Framer Motion**
- 📱 Fully **responsive** design for all screen sizes
- 🌙 Clean, modern **dark theme** UI
- 📬 **Working contact form** with EmailJS integration
- 🔄 Scroll-triggered animations for an engaging experience

---

## 📂 Sections

| Section | Description |
|--------|-------------|
| 🏠 Hero / About | Introduction and personal summary |
| 🛠️ Skills | Tech stack and tools |
| 💼 Projects | Showcase of work and projects |
| 📬 Contact | EmailJS-powered contact form |

---

## 🛠️ Tech Stack

- **React** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations
- **EmailJS** — Contact form email service
- **Vite** — Build tool
- **Vercel** — Deployment

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/itzz-abhi/Portfolio.git

# Navigate to project
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📬 EmailJS Setup (Contact Form)

To enable the contact form:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Add an **Email Service** (Gmail recommended)
3. Create an **Email Template** with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Update `src/components/ContactSection.tsx`:

```tsx
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. Any push to the `main` branch triggers an automatic redeployment.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📫 Contact

**Abhishek Singh**
- 📧 itsabhi8433@gmail.com
- 📍 Mathura, Uttar Pradesh, India
- 🌐 [portfolio-pi-woad-54.vercel.app](https://portfolio-pi-woad-54.vercel.app)
