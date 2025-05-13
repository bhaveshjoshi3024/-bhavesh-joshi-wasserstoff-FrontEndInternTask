# 📝 Real-Time Collaborative Editor

A simple browser-based real-time collaborative text editor built using **Next.js**, **JavaScript**, and the **BroadcastChannel API** — with no backend or database.

---

## 📌 Features

- ✅ Real-time multi-user editing
- ✅ Shows active users
- ✅ Displays who edited last and when
- ✅ Username prompt on load
- ✅ No backend or database required
- ✅ Fully client-side with `BroadcastChannel`

---

## 🔍 How It Works

- When a user opens the app, they're prompted to enter a username.
- The app uses `BroadcastChannel` to sync:
  - User presence (`UserList`)
  - Text changes (`Editor`)
- All tabs communicate via the browser API to simulate real-time collaboration.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Language**: JavaScript (no TypeScript)
- **Styling**: Tailwind CSS
- **Real-Time Sync**: BroadcastChannel API
- **Deployment**: [Vercel](https://vercel.com)

---

## 📂 Project Structure

```bash
.
├── components/
│   ├── Editor.js          # ContentEditable area with real-time sync
│   ├── UserList.js        # Shows active users and current username
│   └── UsernamePrompt.js  # (Optional) Separate prompt component
├── pages/
│   └── index.js           # Main entry point and layout
├── utils/
│   └── useBroadcast.js    # Custom hook for handling real-time sync
├── public/
├── styles/
└── README.md


 Getting Started
1. Clone the Repository
git clone https://github.com/your-username/realtime-collab-editor.git
cd realtime-collab-editor
2. Install Dependencies
npm install
3. Run the App
npm run dev

## 🌐 Live Demo  
👉 **[Click here to try it live](https://bhavesh-joshi-wasserstoff-front-end-intern-task.vercel.app)**

---

## 🙋‍♂️ Author  
**Bhavesh Joshi**  
- 🧑‍💻 GitHub: [bhaveshjoshi3024](https://github.com/bhaveshjoshi3024)  
- 🔗 LinkedIn: [Bhavesh Joshi](https://www.linkedin.com/in/bhavesh-joshi-626a98184)

