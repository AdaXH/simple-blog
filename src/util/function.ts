import { emojiList, EMOJI_PREFIX } from './constants';

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
    str = str.replace(reg, `<img src="${src}"/>`)
  })
  return str
}
