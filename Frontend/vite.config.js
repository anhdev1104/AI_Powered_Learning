<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
>>>>>>> a3c28d8fe8b9f2933ceccff407450ca93974b740

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
})
=======
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
    },
  },
});
>>>>>>> a3c28d8fe8b9f2933ceccff407450ca93974b740
