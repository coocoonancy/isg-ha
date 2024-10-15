export const isAppPlatform = (): boolean => {
  const userAgent = navigator.userAgent;

  // 判断是否为移动App的用户代理
  if (/android/i.test(userAgent)) {
    return true;
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return true;
  }

  return false; // 默认返回web平台
};
