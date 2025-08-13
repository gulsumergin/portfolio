# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/89f6c49c-142e-467b-960f-9ffd16555574

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/89f6c49c-142e-467b-960f-9ffd16555574) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)


### How to run this project locally

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

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

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

### Useful Commands

- `npm install` : Install all dependencies
- `npm run dev` : Start the development server
- `npm run build` : Build the project for production
- `npm run lint` : Run linter (if configured)

### How to Contribute

1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your message"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request

### Notes

- All UI components are in `src/components/`
- For translations, check `src/contexts/LanguageContext.tsx`
- Styling uses Tailwind CSS and shadcn/ui

For more details, check code comments and file headers. İhtiyacın olursa daha fazla örnek ve açıklama ekleyebilirim!
- All UI components are in `src/components/`
- For translations, check `src/contexts/LanguageContext.tsx`
- Styling uses Tailwind CSS and shadcn/ui
- Backend API is in `server.js`

For more details, check code comments and file headers. İhtiyacın olursa daha fazla örnek ve açıklama ekleyebilirim!

### How to run the AI Chat backend

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
   Terminalde bu komutu yaz ve `Server running on port 5001` mesajını görmelisin.

4. **Start the frontend as usual**  
   ```sh
   cd "c:\Users\casper\OneDrive\Masaüstü\artisan-developer-main (1)\artisan-developer-main"
   npm run dev
   ```
   Terminalde bu komutu yaz ve `Server running on port 5001` mesajını görmelisin.

4. **Start the frontend as usual**  
   ```sh
   cd "c:\Users\casper\OneDrive\Masaüstü\artisan-developer-main (1)\artisan-developer-main"
   npm run dev
   ```
