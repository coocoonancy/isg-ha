import { getLangeuageFile } from '@/api/api';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: getPreferredLanguage(), // 初始语言环境
  fallbackLocale: 'en', // 后备语言环境
  messages: {},
  legacy: false,
  globalInjection: true
});

/**
 * 获取浏览器或用户选择的语言
 * @returns string 用户或浏览器的优先语言
 */
function getPreferredLanguage(): string {
  // 从 localStorage 获取用户选择的语言
  const userLanguage = localStorage
    .getItem('lang')
    ?.replace(/-/g, '_')
    .toLowerCase();

  // 浏览器的语言列表
  const browserLanguages = navigator.languages.map(lang =>
    lang.replace(/-/g, '_').toLowerCase()
  );

  // 从 localStorage 获取多语言支持列表，若不存在则返回空数组
  const localLanguageList: string[] = JSON.parse(
    localStorage.getItem('localLanguageList') || '[]'
  );

  // 如果用户选择的语言在多语言列表中，优先使用用户语言
  if (userLanguage && localLanguageList.includes(userLanguage)) {
    return userLanguage;
  }

  // 如果存在多语言支持列表，则从浏览器语言中选择匹配的
  if (localLanguageList.length > 0) {
    return (
      browserLanguages.find(lang => localLanguageList.includes(lang)) || 'en'
    );
  }

  // 默认返回 'zh_cn' 或 'en'
  return browserLanguages[0]?.startsWith('zh') ? 'zh_cn' : 'en';
}

/**
 * 获取语言文件并合并到 i18n
 * @param lang 语言代码
 */
async function loadLanguageFile(lang: string) {
  const res = await getLangeuageFile(lang);
  i18n.global.mergeLocaleMessage(lang, res);
  i18n.global.locale.value = lang;
}

/**
 * 设置并保存语言
 * @param lang 语言代码，默认从浏览器或用户选择
 */
export async function setI18nLanguage(lang: string = getPreferredLanguage()) {
  localStorage.setItem('lang', lang);
  await loadLanguageFile(lang);
}

setI18nLanguage(); // 初始化时调用

export default i18n;
