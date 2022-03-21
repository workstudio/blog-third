/**
 * @file App config
 * @module config.app
 * @author Surmon <https://github.com/surmon-china>
 */

export const DEFAULT_DELAY = 468
export const LONG_ARTICLE_THRESHOLD = 16688
export const PRIMARY_COLOR = '#0088f5'
export const GA_MEASUREMENT_ID = 'UA-84887611-3'
//export const ADSENSE_CLIENT_ID = 'ca-pub-4710915636313788'
export const ADSENSE_CLIENT_ID = 'pub-4930630866352851'

export const META = Object.freeze({
  title: '日拱一卒',
  zh_sub_title: '跬步千里，小流江海',
  en_sub_title: 'Step by step, small rivers and seas',
  domain: 'canliang.wang',
  url: 'https://canliang.wang',
  author: 'muxiulin'
})

export const SPECIAL_LINKS = Object.freeze([
  {
    name: 'iconfont',
    url: 'https://www.iconfont.cn/'
  },
  {
    name: `GitHub`,
    url: 'https://github.com'
  },
  {
    name: `PM2`,
    url: 'https://pm2.keymetrics.io/'
  },
  {
    name: `Vite`,
    url: 'https://vitejs.dev/'
  },
  {
    name: `Disqus`,
    url: 'https://disqus.com/'
  }
])

export const THIRD_IDS = Object.freeze({
  YOUTUBE_CHANNEL_ID: `UCoL-j6T28PLSJ2U6ZdONS0w`,
  MUSIC_163_BGM_ALBUM_ID: '638949385',
  GITHUB_USER_ID: 'surmon-china',
  TWITTER_USER_ID: 'surmon7788',
  INSTAGRAM_USERNAME: 'surmon666',
  INSTAGRAM_FB_ID: '17841405600281893'
})

export const VALUABLE_LINKS = Object.freeze({
  BOOK_READER: 'http://book.canliang.wang',
  GRAPHIC: 'http://culture.91zuiai.com/graphic',
  RSS: '/rss.xml',
  SITE_MAP: '/sitemap.xml',
  SPONSOR: '/sponsor',

  GITHUB_SURMON_ME: 'https://github.com/surmon-china/surmon.me',
  GITHUB_NODEPRESS: 'https://github.com/surmon-china/nodepress',
  GITHUB_SURMON_ME_NATIVE: 'https://github.com/surmon-china/surmon.me.native',
  GITHUB_BLOG_STAR_LIST: 'https://github.com/stars/surmon-china/lists/surmon-me',
  APP_APK_FILE:
    'https://raw.githubusercontent.com/surmon-china/surmon.me.native/master/dist/android/surmon.me.apk',

  THROW_ERROR: 'https://throwerror.io',
  FOX_FINDER: 'https://foxfinder.io',
  GITHUB: 'https://github.com/surmon-china',
  GITHUB_SPONSORS: 'https://github.com/sponsors/surmon-china',
  PAYPAL: 'https://www.paypal.me/surmon',
  UPWORK: 'https://www.upwork.com/freelancers/~0142e621258ac1770d',
  MARKDOWN: 'https://daringfireball.net/projects/markdown/',

  GOOGLE_LIVE_MAP: 'https://www.google.com/maps/d/embed?mid=1sRx6t0Yj1TutbwORCvjwTMgr70r62Z6w&z=3',
  QQ_GROUP:
    'https://shang.qq.com/wpa/qunwpa?idkey=837dc31ccbcd49feeba19430562be7bdc06f4428880f78a391fd61c8af714ce4',
  TELEGRAM: 'https://t.me/surmon',
  TELEGRAM_GROUP: 'https://t.me/joinchat/F6wOlxYwSCUpZTYj3WTAWA',
  SPOTIFY: 'https://open.spotify.com/user/v0kz9hpwpbqnmtnrfhbyl812o',
  MUSIC_163: `https://music.163.com/#/playlist?id=${THIRD_IDS.MUSIC_163_BGM_ALBUM_ID}`,
  YOUTUBE_CHANNEL: `https://www.youtube.com/channel/${THIRD_IDS.YOUTUBE_CHANNEL_ID}`,
  DOUBAN: 'https://www.douban.com/people/nocower',
  ZHIHU: 'https://www.zhihu.com/people/surmon',
  WEIBO: 'https://weibo.com/surmon',
  QUORA: 'https://www.quora.com/profile/Surmon',
  STACK_OVERFLOW: 'https://stackoverflow.com/users/6222535/surmon?tab=profile',
  LEETCODE_CN: 'https://leetcode-cn.com/u/surmon',
  LINKEDIN: 'https://www.linkedin.com/in/surmon',
  INSTAGRAM: `https://www.instagram.com/${THIRD_IDS.INSTAGRAM_USERNAME}`,
  TWITTER: `https://twitter.com/${THIRD_IDS.TWITTER_USER_ID}`
})
