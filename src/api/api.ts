import { TreeDataRequest } from '@/api/api';
import { Get, Post } from '@/api/service';

/**
 * 获取多语言语言文件
 * @param {*} lang 语言(zh_cn, en等)
 * @returns 语言包数据Record<string, string>
 */
export const getLangeuageFile = (lang: string) => {
  return Get(`/lang/${lang}.json`);
};
/**
 * viewmode模式下，获取右侧具体设备
 * @param {*} object {}
 * @returns 树形数据[]
 */
export const queryTreeData = (params: TreeDataRequest) => {
  return Post('/sfsaas/api/filter/querytreedata', params);
};
