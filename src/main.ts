import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { isAppPlatform } from '@/utils/agent';
if (isAppPlatform()) {
  document.documentElement.setAttribute('data-platform', 'app');
} else {
  document.documentElement.setAttribute('data-platform', 'web');
}
createApp(App).mount('#app');
