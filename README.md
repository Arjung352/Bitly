# 🔗 Bitly – Link Shortener & Analytics Dashboard

Bitly is a full-stack Micro-SaaS application that allows users to shorten long URLs, generate QR codes, and track detailed analytics like total clicks, devices used, and geolocation. Designed to be minimal, powerful, and developer-friendly.

## 🚀 Features

- ✂️ **URL Shortener** – Instantly shorten long URLs
- 📊 **Analytics Dashboard** – Track total clicks, devices, and locations
- 📱 **QR Code Generator** – Generate scannable QR codes for any shortened URL
- 🔐 **Authentication** – Email/password login using JWT (Hardcoded user for testing)
- 🔍 **Search & Pagination** – Quickly navigate and manage your links
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
- TailwindCSS

**Backend**:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication


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
cd Backend
npm install
