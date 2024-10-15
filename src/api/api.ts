import { Get } from '@/api/service';
/**
 * 获取多语言语言文件
 * @param {*} lang 语言(zh_cn, en等)
 * @returns 语言包数据
 */
export const getLangeuageFile = (lang: string) => {
  return Get(`/lang/${lang}.json`);
};
