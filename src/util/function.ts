import Cookies from 'js-cookie';
import { emojiList, EMOJI_PREFIX, VALID_DOMAIN } from './constants';

/**
 * 小时，分钟，秒，带0格式化
 * @param no
 * @returns
 */
export function stringTime(no: number): string {
  const str = `${no}`;
  return str.length === 1 ? `0${str}` : str;
}

/**
 * stringify对象 {a: "b"} => ?a=b
 * @param data
 * @returns
 */
export function stringify(originUrl: string, data?: Record<string, any>): string {
  if (!data) return originUrl;
  let res = originUrl;
  Object.keys(data).forEach((key, index) => {
    res += `${index === 0 ? '?' : '&'}${key}=${data[key]}`;
  });
  return res;
}

interface Time {
  year: string;
  month: string;
  day: string;
}

/**
 * 日期格式化
 * @param time
 * @returns
 */
export function parseTime(time: string | Date, isDate = false): Partial<Time> | string {
  if (/-/.test(time as string)) return time as string;
  if (!time) return {};
  const d = isDate ? new Date(time as Date) : new Date(Number(time));
  return {
    year: `${d.getFullYear()}`,
    month: `${stringTime(d.getMonth() + 1)}`,
    day: `${stringTime(d.getDate())}`,
  };
}

/**
 * 打开qq
 */
export function openQQ() {
  window.open('http://wpa.qq.com/msgrd?v=3&uin=3532371088&site=qq&menu=yes');
}

/**
 * 随机获取数组中的一项
 * @param arg
 * @returns
 */
export function getRandomItem<T = any>(arg: T[]): T {
  return arg[Math.floor(Math.random() * arg.length)];
}

/**
 * 简版随即洗牌
 * @param arr
 * @returns
 */
export function simpleShuffle<T extends any[]>(arr: T): T {
  return arr.sort(() => 0.5 - Math.random());
}

/**
 * 随机bool值
 * @returns {boolean}
 */
export function randonBool(): boolean {
  return Math.random() > 0.5;
}

export function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
  e?.stopPropagation?.();
}

/**
 * 替换emoji
 * @param value
 * @returns
 */
export function replaceEmoji(value: string): string {
  if (!value) return '';
  return replace(value);
}

function replace(str: string): string {
  emojiList.forEach(({ code, src }) => {
    const reg = new RegExp(`${EMOJI_PREFIX}${code}${EMOJI_PREFIX}`, 'g');
    str = str.replace(reg, `<img src="${src}"/>`);
  });
  return str;
}

/**
 * qq登陆窗口
 */
export function qqSign() {
  try {
    // return window.QC.Login.showPopup({
    //   appId: '101902433',
    //   redirectURI: 'http://adaxh.site/qq',
    // });
    return window.open(
      // `https://graph.qq.com/oauth2.0/show?redirect_uri=${encodeURIComponent('http://adaxh.site/qq')}`,
      'https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=101902433&response_type=token&scope=all&redirect_uri=https%3A%2F%2Fadaxh.site%2Fqq',
      'QQ登录',
      'width=550,height=420,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1',
    );
  } catch (error) {
    // ingore
  }
}

export function signOut(reload = true) {
  VALID_DOMAIN.forEach((domain) => {
    Cookies.remove('token', { domain });
  });
  window.QC.Login.signOut();
  if (reload) {
    window.location.reload();
  }
}

export function sleep(timer = 500) {
  return new Promise((reolve) => {
    setTimeout(reolve, timer);
  });
}
