import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react' // For React support

export default defineConfig({
  plugins: [
    react(), // Add React plugin
    tailwindcss(), // TailwindCSS plugin
  ],
  server: {
    hmr: {
      overlay: false, // Disables error overlay (optional)
    },
  },
})
