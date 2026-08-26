# Abu Bakar Huzaifa — Portfolio

A minimal, neo-brutalist portfolio website built with **React** and **Vite**.

> *"I build backend systems I can defend, line by line."*

---

## ⚡ Features & Design

- **Neo-Brutalist Aesthetic**: High-contrast palette, bold hard borders (`#000000`), hard drop shadows, and vivid red accent highlights (`#FF3B1F`).
- **Typography**: Clean monospace styling (`'JetBrains Mono'`, `'Courier New'`, `monospace`).
- **Interactive Navigation**: Quick-access action buttons linking directly to:
  - [LinkedIn](https://linkedin.com/in/abubakarhuzaifa)
  - [GitHub](https://github.com/a-b-huzaifa)
  - Book a call (`mailto:darkking999@gmail.com`)
- **Responsive Layout**: Centered card layout that adapts seamlessly to various screen sizes.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS with custom properties / design tokens
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```text
FL-11_portfolio/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── assets/          # Internal media and assets
│   ├── App.css          # Core styles & brutalist design tokens
│   ├── App.jsx          # Main application & portfolio view
│   └── main.jsx         # Application entry point
├── index.html           # HTML template & page title
├── package.json         # Scripts and project dependencies
└── vite.config.js       # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/a-b-huzaifa/FL-11_portfolio.git
cd FL-11_portfolio
npm install
```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Builds the optimized production bundle in the `dist/` directory |
| `npm run preview` | Locally preview the production build output |
| `npm run lint` | Runs Oxlint to check code quality and linting |
