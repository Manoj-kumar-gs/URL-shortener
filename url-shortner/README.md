# url-shortner - URL Shortener

url-shortner is a simple and lightweight URL shortener built using **Next.js** and **MongoDB**. It allows users to convert long URLs into short, easy-to-share links without requiring any login or signup.

---

## ✨ Features

- 🔗 Shorten long URLs instantly
- 🧩 Custom short names (aliases)
- ⚡ Instant redirection based on short name
- 🌐 No sign up or login required
- 🗄️ URL data is stored in MongoDB
- 🧠 Clean and minimal UI

---

## 📂 Project Structure

- `/app`
  - `page.js` – Home page
  - `/about/page.js` – About page
  - `/shortener/page.js` – Shortener form and URL generation
  - `/[urlshortname]/page.js` – Dynamic route to redirect based on shortened name
- `/api/generate/route.js` – API route to create short URLs
- `/lib/mongodb.js` – MongoDB connection utility

---

## 🚀 How It Works

1. On the **Shortener page**, users can enter a long URL and a custom short name.
2. On clicking **Generate**, a `POST` request is sent to `/api/generate`.
3. The server:
   - Connects to MongoDB
   - Checks if the short name already exists
   - If not, stores the mapping `{ url, shortenURL }` in the collection
4. Users can access the shortened link at: http://localhost:3000/your-short-name
5. This URL hits the dynamic route `[urlshortname]/page.js`, which:
- Fetches the original URL from MongoDB
- Redirects the user to the original URL in a **new tab**

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Manoj-kumar-gs/LinkTree-clone.git
cd url-shortner

2. Install dependencies:
npm install

3. Configure environment variables:
Create a .env.local file and add your MongoDB URI:
MONGODB_URI=your-mongodb-connection-string

4. Run the development server
npm run dev

5. Open http://localhost:3000 in your browser.

Tecnologies Used:
Next.js 15
MongoDB
Tailwind CSS