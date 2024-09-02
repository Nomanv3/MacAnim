import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// replace 'Nomanv3' with your GitHub username and 'MacAnim' with your repository name
export default defineConfig({
  plugins: [react()],
  base: '/MacAnim/',
});
