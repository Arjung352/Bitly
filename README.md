# 🔗 Bitly – Link Shortener & Analytics Dashboard

Bitly is a full-stack Micro-SaaS application that allows users to shorten long URLs, generate QR codes, and track detailed analytics like total clicks, devices used, and geolocation. Designed to be minimal, powerful, and developer-friendly.

---

## 🚀 Features

- ✂️ **URL Shortener** – Instantly shorten long URLs
- 📊 **Analytics Dashboard** – Track total clicks, devices, and locations
- 📱 **QR Code Generator** – Generate scannable QR codes for any shortened URL
- 🔐 **Authentication** – Email/password login using JWT (Hardcoded user for testing)
- 🔍 **Pagination** – Quickly navigate and manage your links
- 🎯 **User-Specific Data** – Links are tied to individual users for multi-user support

---

## 👤 Demo User Credentials

Use the following credentials to log in and test the application:

- **Email**: `intern@dacoid.com`
- **Password**: `Test123`

---

## 🛠️ Tech Stack

**Frontend**:

- React.js
- Redux
- TailwindCSS

**Backend**:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Arjung352/Bitly.git

# Navigate to project directory
cd Bitly

# Install frontend dependencies
cd Frontend
npm install

# Install backend dependencies
cd ../Backend
npm install
```

## File Strcuture📁📂

arjung352-bitly/
├── README.md # Project documentation
├── Backend/ # Backend codebase
│ ├── package-lock.json # Dependency lock file
│ ├── package.json # Backend dependencies and scripts
│ ├── vercel.json # Vercel deployment configuration
│ ├── .gitignore # Git ignored files list
│ ├── api/
│ │ └── index.js # Entry point for Vercel serverless function
│ ├── controllers/
│ │ └── Url.js # Business logic for URL generation & analytics
│ ├── models/
│ │ └── urlModel.js # Mongoose schema/model for URLs
│ └── routes/
│ ├── LoginRoute.js # Login/authentication route
│ └── UrlRoute.js # Route to handle URL operations
├── Frontend/ # Frontend codebase
│ ├── README.md # Frontend-specific documentation (if any)
│ ├── eslint.config.js # Linting configuration
│ ├── index.html # HTML template used by Vite
│ ├── package-lock.json # Dependency lock file
│ ├── package.json # Frontend dependencies and scripts
│ ├── vite.config.js # Vite bundler configuration
│ ├── .gitignore # Git ignored files for frontend
│ ├── public/ # Static assets (e.g., icons, images)
│ └── src/ # Source code for frontend
│ ├── Dashboard/ # Analytics dashboard components
│ │ ├── Dashboard.jsx # Main dashboard layout
│ │ └── Table/
│ │ ├── Pagination.jsx # Handles paginated views
│ │ └── Table.jsx # Table view of shortened URLs
│ ├── Footer/
│ │ └── Footer.jsx # Footer component
│ ├── Home/ # Home page components
│ │ ├── Home.jsx # Landing page
│ │ ├── FAQ/
│ │ │ ├── FAQ.css # FAQ styling
│ │ │ └── FAQ.jsx # FAQ section component
│ │ └── UrlGeneration/
│ │ ├── UrlGeneration.jsx # URL shortener form and logic
│ │ └── Qrcode/
│ │ └── Qrcode.jsx # QR code generator component
│ ├── Login/
│ │ └── Login.jsx # Login page & authentication logic
│ ├── main/
│ │ ├── App.jsx # Main app layout and route definitions
│ │ ├── index.css # Global styles
│ │ ├── LoadingSpinner.jsx # Loading spinner component
│ │ └── main.jsx # Entry point of React application
│ ├── Navbar/
│ │ └── Navbar.jsx # Navigation bar component
│ └── Redux/ # Redux state management
│ ├── Slice/
│ │ └── UserSlice.js # Redux slice for user authentication
│ └── Store/
│ └── Store.js # Redux store configuration
