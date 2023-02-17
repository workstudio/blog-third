import type { LanguageMap } from '.'
import { LanguageKey } from './key'
import { META } from '/@/config/app.config'

export const zhLangMap: LanguageMap = {
  [LanguageKey.APP_SLOGAN]: META.zh_sub_title,

  [LanguageKey.CATEGORY_BOOK]: '书籍/感悟',
  [LanguageKey.CATEGORY_FIGURE]: '大人物',
  [LanguageKey.CATEGORY_DIAGRAM]: '图片的故事',
  [LanguageKey.PAGE_BOOK_READER]: '阅读',
  [LanguageKey.PAGE_GRAPHIC]: '图表/图说',
  [LanguageKey.PAGE_HOME]: '首页',

  [LanguageKey.CATEGORY_INSIGHT]: '无色庵',
  [LanguageKey.CATEGORY_CODE]: '宁静寺',
  [LanguageKey.PAGE_GITHUB]: '丹青阁',

  [LanguageKey.PAGE_ARCHIVE]: '过往',
  [LanguageKey.PAGE_ABOUT]: '关于我们',
  [LanguageKey.PAGE_GUESTBOOK]: '留言板',

  [LanguageKey.PAGE_SPONSOR]: '赞助',
  [LanguageKey.PAGE_APP]: '客户端',
  [LanguageKey.PAGE_LENS]: '茫涯',
  [LanguageKey.PAGE_NFT]: '藏品',
  [LanguageKey.STATISTIC_ARTICLES]: '全站文章',
  [LanguageKey.STATISTIC_COMMENTS]: '全站评论',
  [LanguageKey.STATISTIC_TAGS]: '全站标签',
  [LanguageKey.STATISTIC_TODAY_VIEWS]: '今日阅读',
  [LanguageKey.STATISTIC_TOTAL_VIEWS]: '累计阅读',
  [LanguageKey.STATISTIC_TOTAL_UPVOTES]: '共获点赞',
  [LanguageKey.STATISTIC_AVERAGE_EMOTION]: '匿名评分',
  [LanguageKey.EMPTY_PLACEHOLDER]: '空空如也',
  [LanguageKey.NOT_FOUND]: '众里寻他 我已不再',
  [LanguageKey.BACK_TO_HOME_PAGE]: '山河万里 长歌归故',
  [LanguageKey.GUESTBOOK_SLOGAN]: '此心光明 亦复何言',
  [LanguageKey.AD]: '广而告之',
  [LanguageKey.BARRAGE]: '畅言',
  [LanguageKey.FEEDBACK]: '反馈',
  [LanguageKey.TO_TOP]: '回到顶部',
  [LanguageKey.TO_BOTTOM]: '下一屏',
  [LanguageKey.ORIGIN_ORIGINAL]: '原创',
  [LanguageKey.ORIGIN_REPRINT]: '转载',
  [LanguageKey.ORIGIN_HYBRID]: '衍生',
  [LanguageKey.ACTION_ON]: '开',
  [LanguageKey.ACTION_OFF]: '关',
  [LanguageKey.MUSIC_PLACEHOLDER]: '五音六律，七弦八度',
  [LanguageKey.SEARCH_PLACEHOLDER]: '上下求索',
  [LanguageKey.ANNOUNCEMENT_PLACEHOLDER]: '空空如也',
  [LanguageKey.CATEGORY_UNCATEGORIZED]: '未分类',
  [LanguageKey.TAG_PLACEHOLDER]: '无标签',
  [LanguageKey.ARTICLE_TITLE]: '文不加点',
  [LanguageKey.ARTICLE_VIEWS]: '次阅读',
  [LanguageKey.ARTICLE_PLACEHOLDER]: '空空如也',
  [LanguageKey.ARTICLE_READ_ALL]: '阅读余下全文',
  [LanguageKey.ARTICLE_RENDERING]: '渲染中..',
  [LanguageKey.HOT_ARTICLE_LIST_TITLE]: '群贤毕至',
  [LanguageKey.ARTICLE_LIST_LOADMORE]: '加载更多',
  [LanguageKey.ARTICLE_LIST_LOADING]: '正在加载',
  [LanguageKey.ARTICLE_LIST_NO_MORE]: '没有更多',
  [LanguageKey.COMMENT_LIST_EMPTY]: '期待你的捷足先登',
  [LanguageKey.COMMENT_UPVOTE]: '赞',
  [LanguageKey.COMMENT_DOWNVOTE]: '踩',
  [LanguageKey.COMMENT_DELETE]: '删除',
  [LanguageKey.COMMENT_DELETE_CONFIRM]: '确定要删除此评论吗？此操作不可恢复',
  [LanguageKey.COMMENT_REPLY]: '回复',
  [LanguageKey.COMMENT_REPLY_CANCEL]: '取消回复',
  [LanguageKey.COMMENT_MODERATOR]: '博主',
  [LanguageKey.COMMENT_SORT_OLD]: '最早',
  [LanguageKey.COMMENT_SORT_NEW]: '最新',
  [LanguageKey.COMMENT_SORT_HOT]: '最热',
  [LanguageKey.COMMENT_POST_NAME]: '名字',
  [LanguageKey.COMMENT_POST_EMAIL]: '邮箱',
  [LanguageKey.COMMENT_POST_SITE]: '网址',
  [LanguageKey.COMMENT_POST_CONTENT]: '内容',
  [LanguageKey.COMMENT_POST_PLACEHOLDER]: '愿你的见解一针见血',
  [LanguageKey.COMMENT_POST_ERROR_CONTENT]: '内容需要在 3000 字以内',
  [LanguageKey.QUERY_PARAMS_ERROR]: '请求参数错误：',
  [LanguageKey.POST_ACTION_ERROR]: '操作失败，详细原因 > 控制台',
  [LanguageKey.SUBMIT]: '提交',
  [LanguageKey.SUBMITTING]: '提交中...',
  [LanguageKey.MOMENT_AM]: '上午',
  [LanguageKey.MOMENT_PM]: '下午',
  [LanguageKey.MOMENT_JUST_NOW]: '刚刚',
  [LanguageKey.MOMENT_MINUTES]: '分钟',
  [LanguageKey.MOMENT_HOURS]: '小时',
  [LanguageKey.MOMENT_WEEKS]: '周',
  [LanguageKey.MOMENT_DAYS]: '天',
  [LanguageKey.MOMENT_MONTHS]: '个月',
  [LanguageKey.MOMENT_YEAR]: '年',
  [LanguageKey.MOMENT_AGO]: (args: { date: string }) => `${args.date}前`
}
