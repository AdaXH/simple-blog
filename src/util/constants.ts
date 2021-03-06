import showdown from 'showdown';

export const converter = new showdown.Converter();

const SEC = 1000;
const MINS = 60 * SEC;
const HOUR = SEC * 60;
const DAY = 24 * HOUR;

const d = new Date();
const curYear = d.getFullYear();
const curMonth = d.getMonth() + 1;
const curDay = d.getDate();

export const TIME = {
  MINS,
  SEC,
  HOUR,
  DAY,
  curYear,
  curMonth,
  curDay,
};

export const RANDOM_COLORS = [
  '#9aa8aa',
  '#778491',
  '#dccfbc',
  '#c6ccc8',
  '#b0a095',
  '#b1d5ce',
  '#dcceab',
  'rgba(221,155,155, 1)',
  '#6ba9b2',
  '#abcbdc',
];

export const EMOJI_PREFIX = '::';

const mock = {
  success: true,
  emojis: [
    {
      _id: '5fb4e9d61d2e576feb00d981',
      code: 'danyanxiao',
      src: 'http://sinacloud.net/ada.bucket/emoji/danyanxiao.png',
    },
    {
      _id: '5fb4e9e483270f03c10e47e1',
      code: 'dianzan',
      src: 'http://sinacloud.net/ada.bucket/emoji/dianzan.png',
    },
    {
      _id: '5fb4c0cb794904d56f1ce848',
      code: 'fennu',
      src: 'http://sinacloud.net/ada.bucket/emoji/fennu.png',
      __v: 0,
    },
    {
      _id: '5fb4c0cf794904d56f1ce849',
      code: 'fennuhuaji',
      src: 'http://sinacloud.net/ada.bucket/emoji/fennuhuaji.png',
      __v: 0,
    },
    {
      _id: '5fb4c0d4794904d56f1ce84a',
      code: 'guaiqiao',
      src: 'http://sinacloud.net/ada.bucket/emoji/guaiqiao.png',
      __v: 0,
    },
    {
      _id: '5fb4c0d8794904d56f1ce84b',
      code: 'huaji',
      src: 'http://sinacloud.net/ada.bucket/emoji/huaji.png',
      __v: 0,
    },
    {
      _id: '5fb4c0dd794904d56f1ce84c',
      code: 'jingku',
      src: 'http://sinacloud.net/ada.bucket/emoji/jingku.png',
      __v: 0,
    },
    {
      _id: '5fb4c0e3794904d56f1ce84d',
      code: 'jingya',
      src: 'http://sinacloud.net/ada.bucket/emoji/jingya.png',
      __v: 0,
    },
    {
      _id: '5fb4c0e7794904d56f1ce84e',
      code: 'kewang',
      src: 'http://sinacloud.net/ada.bucket/emoji/kewang.png',
      __v: 0,
    },
    {
      _id: '5fb4c0f6794904d56f1ce851',
      code: 'low',
      src: 'http://sinacloud.net/ada.bucket/emoji/low.png',
      __v: 0,
    },
    {
      _id: '5fb4c0fc794904d56f1ce852',
      code: 'miyanxiao',
      src: 'http://sinacloud.net/ada.bucket/emoji/miyanxiao.png',
      __v: 0,
    },
    {
      _id: '5fb4c100794904d56f1ce853',
      code: 'miyanxiao1',
      src: 'http://sinacloud.net/ada.bucket/emoji/miyanxiao1.png',
      __v: 0,
    },
    {
      _id: '5fb4c118794904d56f1ce854',
      code: 'mojing',
      src: 'http://sinacloud.net/ada.bucket/emoji/mojing.png',
      __v: 0,
    },
    {
      _id: '5fb4c11c794904d56f1ce855',
      code: 'moneyface',
      src: 'http://sinacloud.net/ada.bucket/emoji/moneyface.png',
      __v: 0,
    },
    {
      _id: '5fb4c120794904d56f1ce856',
      code: 'outu',
      src: 'http://sinacloud.net/ada.bucket/emoji/outu.png',
      __v: 0,
    },
    {
      _id: '5fb4c124794904d56f1ce857',
      code: 'qiang',
      src: 'http://sinacloud.net/ada.bucket/emoji/qiang.png',
      __v: 0,
    },
    {
      _id: '5fb4c128794904d56f1ce858',
      code: 'shuijiao',
      src: 'http://sinacloud.net/ada.bucket/emoji/shuijiao.png',
      __v: 0,
    },
    {
      _id: '5fb4c12c794904d56f1ce859',
      code: 'smile',
      src: 'http://sinacloud.net/ada.bucket/emoji/smile.png',
      __v: 0,
    },
    {
      _id: '5fb4c130794904d56f1ce85a',
      code: 'tushe',
      src: 'http://sinacloud.net/ada.bucket/emoji/tushe.png',
      __v: 0,
    },
    {
      _id: '5fb4c135794904d56f1ce85b',
      code: 'weiqu',
      src: 'http://sinacloud.net/ada.bucket/emoji/weiqu.png',
      __v: 0,
    },
    {
      _id: '5fb4c13e794904d56f1ce85c',
      code: 'xiaoxin',
      src: 'http://sinacloud.net/ada.bucket/emoji/xiaoxin.png',
      __v: 0,
    },
    {
      _id: '5fb4c143794904d56f1ce85d',
      code: 'xiaoyan',
      src: 'http://sinacloud.net/ada.bucket/emoji/xiaoyan.png',
      __v: 0,
    },
    {
      _id: '5fb4c149794904d56f1ce85e',
      code: 'xiexiao',
      src: 'http://sinacloud.net/ada.bucket/emoji/xiexiao.png',
      __v: 0,
    },
    {
      _id: '5fb4c14e794904d56f1ce85f',
      code: 'xieyanxiao',
      src: 'http://sinacloud.net/ada.bucket/emoji/xieyanxiao.png',
      __v: 0,
    },
    {
      _id: '5fb4c152794904d56f1ce860',
      code: 'yeah',
      src: 'http://sinacloud.net/ada.bucket/emoji/yeah.png',
      __v: 0,
    },
    {
      _id: '5fb4c157794904d56f1ce861',
      code: 'yihuo',
      src: 'http://sinacloud.net/ada.bucket/emoji/yihuo.png',
      __v: 0,
    },
    {
      _id: '5fb4dde4a019e433cb4482a7',
      code: 'daku',
      src: 'http://sinacloud.net/ada.bucket/emoji/daku.png',
      __v: 0,
    },
    {
      _id: '5fb4e6587f6389539df93287',
      code: 'liuhan',
      src: 'http://sinacloud.net/ada.bucket/emoji/liuhan1.png',
      __v: 0,
    },
    {
      _id: '5fd35ff414a6af00aa69f94f',
      code: 'waitou',
      src: 'http://sinacloud.net/ada.bucket/emoji/waitou.jpg',
      __v: 0,
    },
    {
      _id: '5fd3606714a6af00aa69f950',
      code: 'girlLaugh',
      src: 'http://sinacloud.net/ada.bucket/emoji/girllaugh.gif',
      __v: 0,
    },
    {
      _id: '5fd3666a14a6af00aa69f951',
      code: 'catLook',
      src: 'http://sinacloud.net/ada.bucket/emoji/catlook.gif',
      __v: 0,
    },
    {
      _id: '5fd36aba52139400ac8ea2a2',
      code: '1551',
      src: 'http://sinacloud.net/ada.bucket/emoji/1551.jpg',
      __v: 0,
    },
    {
      _id: '5fd36b0252139400ac8ea2a3',
      code: 'cat1',
      src: 'http://sinacloud.net/ada.bucket/emoji/cat1.gif',
      __v: 0,
    },
    {
      _id: '5fd36b2452139400ac8ea2a4',
      code: 'cat2',
      src: 'http://sinacloud.net/ada.bucket/emoji/cat2.gif',
      __v: 0,
    },
    {
      _id: '5fec8edcecb3a900a830db85',
      code: 'catyao',
      src: 'http://sinacloud.net/ada.bucket/emoji/catyao.gif',
      __v: 0,
    },
    {
      _id: '5ffd8a7bd33d9200aa028d13',
      code: 'catbeat',
      src: 'http://sinacloud.net/ada.bucket/emoji/catbeat.gif',
      __v: 0,
    },
    {
      _id: '5ffd8a9cd33d9200aa028d14',
      code: 'cattou',
      src: 'http://sinacloud.net/ada.bucket/emoji/cattou.gif',
      __v: 0,
    },
    {
      _id: '6121d6681f61e400a84976ba',
      code: 'dadada',
      src: 'http://sinacloud.net/ada.bucket/emoji/.gif',
      __v: 0,
    },
  ],
  traceId: 'a6be4b4c-07f9-4dfe-a032-02384c874b56',
  pid: 169,
  ppid: 168,
};

export const emojiList = mock.emojis;

export const NO_ERRPR_APIS = ['/api/getUserInfoByToken'];

export const VALID_DOMAIN = ['adaxh.site', '.adaxh.site', 'localhost', '.applinzi.com'];
