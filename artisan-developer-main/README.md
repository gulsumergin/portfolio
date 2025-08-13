
# Portfolio Project

This is a personal portfolio web application built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. It also includes a simple Node.js backend for AI chat functionality.

---

## Getting Started (Frontend)

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   ```
2. **Go to the project folder**
   ```sh
   cd "c:\Users\casper\OneDrive\Masaüstü\artisan-developer-main (1)\artisan-developer-main"
   ```
3. **Install dependencies**
   ```sh
   npm install
   ```
4. **Start the development server**
   ```sh
   npm run dev
   ```
   After running `npm run dev`, open your browser and go to [http://localhost:5173](http://localhost:5173) (or the address shown in your terminal) to view your project.

---

## Project Structure

```
artisan-developer-main/
  ├── public/                # Static assets (favicon, robots.txt, etc.)
  ├── src/                   # Main source code
  │   ├── assets/            # Images and media
  │   ├── components/        # Reusable React components
  │   ├── contexts/          # React context providers
  │   ├── hooks/             # Custom React hooks
  │   ├── lib/               # Utility functions
  │   ├── pages/             # Page components (route-based)
  │   ├── App.tsx            # Main React app
  │   ├── main.tsx           # Entry point
  │   └── ...
  ├── package.json           # Project metadata and scripts
  ├── tailwind.config.ts     # Tailwind CSS config
  ├── vite.config.ts         # Vite config
  └── ...
```

## Useful Commands

- `npm install` : Install all dependencies
- `npm run dev` : Start the development server
- `npm run build` : Build the project for production
- `npm run lint` : Run linter (if configured)

---

## How to run the AI Chat backend

1. **Go to your project root folder**
   ```sh
   cd "c:\Users\casper\OneDrive\Masaüstü\artisan-developer-main (1)"
   ```
2. **Install backend dependencies**
   ```sh
   npm install express cors openai dotenv
   ```
3. **Start the backend server**
   ```sh
   node server.js
   ```
   You should see `Server running on port 5001` in your terminal.

4. **Start the frontend as usual**  
   ```sh
   cd "c:\Users\casper\OneDrive\Masaüstü\artisan-developer-main (1)\artisan-developer-main"
   npm run dev
   ```

---

## Technologies Used

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS
- Node.js (for backend)

---

## Contribution

1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your message"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request

---

## Notes

- All UI components are in `src/components/`
- For translations, check `src/contexts/LanguageContext.tsx`
- Styling uses Tailwind CSS and shadcn/ui
- Backend API is in `server.js`

For more details, check code comments and file headers.
