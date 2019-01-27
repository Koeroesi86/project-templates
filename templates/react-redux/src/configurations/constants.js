const appNameMeta = document.querySelector('meta[name="APP_NAME"]');
export const APP_NAME = appNameMeta ? appNameMeta.content : '';
