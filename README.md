# 🏫 Reno Task — School Directory (Next.js + IndexedDB)

A simple and modern **School Management Directory** built with **Next.js (src-based)**, **React Hook Form**, and **IndexedDB** for local data storage — no external database required!

This project allows users to:

* Add new schools with details (name, address, contact, image, etc.)
* Store and retrieve data offline using IndexedDB
* View all schools in a clean, responsive UI
* Easily navigate between Add and Show views

---

## 🎥 Demo

Check out the project in action:

👉 [View Demo Video](review/Output.webm)

---

## 🚀 Features

✅ Add school details with form validation  
✅ Live image preview before saving  
✅ Persistent local data using IndexedDB  
✅ Responsive UI built with TailwindCSS  
✅ Offline-ready — no backend required  
✅ Fast navigation using Next.js Router  

---

## 🧩 Tech Stack

| Layer         | Technology                               |
| ------------- | ---------------------------------------- |
| Frontend      | **Next.js (App Router, src/ directory)** |
| Styling       | **TailwindCSS**                          |
| Form Handling | **React Hook Form**                      |
| Database      | **IndexedDB (browser local)**            |
| Routing       | **Next.js App Router**                   |

---

## 📁 Folder Structure

```
reno-task/
│
├── src/
│   ├── app/
│   │   ├── page.tsx             # Add School form UI
│   │   ├── show-schools/
│   │   │   └── page.tsx         # List all saved schools
│   └── lib/
│       └── db.ts                # IndexedDB utility functions
│
├── public/
│   └── images/                  # Placeholder images (optional)
│
├── review/
│   └── Output.webm              # Demo video for README
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

> Note: Project uses a `src/` directory — all application code lives under `src/` (e.g., `src/app`, `src/lib`).

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sharadmrsingh/reno-task.git
cd reno-task
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧠 How It Works

1. The app uses **IndexedDB** for local storage via a small helper in `src/lib/db.ts`.
2. When a user adds a school, the form validates all inputs using `react-hook-form`.
3. The school data (including a preview image URL) is saved locally via `addSchool()` in `src/lib/db.ts`.
4. The “Show Schools” page retrieves data from IndexedDB using `getSchools()` and displays it in a responsive grid.
5. All operations happen client-side — no server or API calls required.

---

## 🧪 Example Data Fields

| Field    | Type   | Validation                             |
| -------- | ------ | -------------------------------------- |
| name     | string | required                               |
| address  | string | required                               |
| city     | string | required                               |
| state    | string | required                               |
| contact  | string | 10-digit numeric                       |
| email_id | string | valid email                            |
| image    | File   | required (preview saved as object URL) |

---

## 🧾 Important Files

* `src/app/page.tsx` — Add School form UI (react-hook-form + validation + image preview)
* `src/app/show-schools/page.tsx` — Schools listing (responsive cards)
* `src/lib/db.ts` — IndexedDB helper (openDB, addSchool, getSchools)
* `public/` — Static files and placeholders
* `review/Output.webm` — Demo video used in README

---

## 🧹 Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Run development server              |
| `npm run build` | Build for production                |
| `npm start`     | Run production server (after build) |

---

## 📦 Deployment

You can deploy this project to **Vercel** or **Netlify** as a static Next.js app. Because the app is fully client-side (uses IndexedDB), no backend is required—just make sure the `public/` and `review/` folders are included in the repository when deploying.

**Note on assets:** hosting large media in `public/` is okay for demos, but for production consider hosting large videos externally (YouTube / Cloudinary / S3) to save bandwidth.

---

## 🧑‍💻 Contributing

Contributions welcome — feel free to open issues or PRs. Suggested improvements:

Feel free to fork this project and submit pull requests.
Suggestions and improvements are always welcome!

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

**Made with ❤️ using Next.js (src/) and IndexedDB**
