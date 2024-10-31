import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const target = {
  admin: 'https://admin.linklinkiot.com',
  dev: 'https://dev.linklinkiot.com',
  devhome: 'https://devhome.linklinkiot.com',
  devoffice: 'https://devoffice.linklinkiot.com',
  devbusiness: 'https://devbusiness.linklinkiot.com',
  home: 'https://home.linklinkiot.com',
  office: 'https://office.linklinkiot.com',
  business: 'https://business.linklinkiot.com',
  euhome: 'https://euhome.linklinkiot.com',
  euoffice: 'https://euoffice.linklinkiot.com',
  uatoffice: 'https://uatoffice.linklinkiot.com'
}['business'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/lang': {
        target,
        changeOrigin: true
      }
    }
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          // 'group-module': [
          //   './src/HomeView'
          // ]
        }
      }
    }
  }
});
