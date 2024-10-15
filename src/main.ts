import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from '@/i18n/index';
import { isAppPlatform } from '@/utils/agent';
if (isAppPlatform()) {
  document.documentElement.setAttribute('data-platform', 'app');
} else {
  document.documentElement.setAttribute('data-platform', 'web');
}
const app = createApp(App);
app.use(i18n);
app.mount('#app');
