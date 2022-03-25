export function setCache(key: string, data: Record<string, any>) {
  try {
    window.localStorage.setItem(key, data instanceof Object ? JSON.stringify(data) : data);
  } catch (error) {
    //
  }
}

export function getCache(key: string) {
  const str = window.localStorage.getItem(key);
  if (str) {
    try {
      return JSON.parse(str);
    } catch (error) {
      return str;
    }
  }
  return null;
}

export function createScript(wd: string) {
  const script = document.querySelector('#__SEARCH__SCRIPT');
  if (script) {
    document.head.removeChild(script);
  }
  const s = document.createElement('script');
  s.id = '__SEARCH__SCRIPT';
  s.src = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${wd}&cb=${cb}`;
  document.head.appendChild(s);
}
