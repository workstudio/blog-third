import { VALUABLE_LINKS } from '/@/config/app.config'
import { LanguageKey } from '/@/language'
import { RouteName, CategorySlug } from '/@/app/router'
import { getPageRoute, getCategoryFlowRoute } from '/@/transforms/route'
import { getTargetCDNURL } from '/@/transforms/url'

export interface MenuItem {
  id: string
  route?: string
  url?: string
  i18nKey: LanguageKey
  icon?: string
  imageIcon?: string
  divider?: boolean
  newWindow?: boolean
  disabledUppercase?: boolean
  hot?: boolean
}

export const menus: Array<MenuItem> = [
  {
    id: RouteName.Home,
    route: '/',
    icon: 'icon-home-fill',
    i18nKey: LanguageKey.PAGE_HOME
  },
  {
    id: CategorySlug.Book,
    route: getCategoryFlowRoute(CategorySlug.Book),
    icon: 'icon-code',
    i18nKey: LanguageKey.CATEGORY_BOOK
  },
  {
    id: CategorySlug.Figure,
    route: getCategoryFlowRoute(CategorySlug.Figure),
    icon: 'icon-thinking',
    i18nKey: LanguageKey.CATEGORY_FIGURE
  },
  {
    id: RouteName.diagram,
    route: getCategoryFlowRoute(CategorySlug.Diagram),
    icon: 'icon-lens',
    i18nKey: LanguageKey.CATEGORY_DIAGRAM
  },
  {
    id: RouteName.About,
    route: getPageRoute(RouteName.About),
    icon: 'icon-swordsman',
    i18nKey: LanguageKey.PAGE_ABOUT
  },
  {
    id: RouteName.Merch,
    route: getPageRoute(RouteName.Merch),
    divider: true,
    hot: true,
    icon: 'icon-rubik',
    i18nKey: LanguageKey.PAGE_MERCH
  },
  {
    id: 'graphic',
    url: VALUABLE_LINKS.GRAPHIC,
    icon: 'icon-like',
    newWindow: true,
    i18nKey: LanguageKey.PAGE_GRAPHIC
  },
  {
    id: 'book-reader',
    url: VALUABLE_LINKS.BOOK_READER,
    icon: 'icon-like',
    newWindow: true,
    i18nKey: LanguageKey.PAGE_BOOK_READER
  },


  /*{
    id: RouteName.Home,
    route: '/',
    icon: 'icon-home',
    i18nKey: LanguageKey.PAGE_HOME
  },
  {
    id: CategorySlug.Code,
    route: getCategoryFlowRoute(CategorySlug.Code),
    icon: 'icon-code',
    i18nKey: LanguageKey.CATEGORY_CODE
  },
  {
    id: CategorySlug.Insight,
    route: getCategoryFlowRoute(CategorySlug.Insight),
    icon: 'icon-insight',
    i18nKey: LanguageKey.CATEGORY_INSIGHT
  },
  {
    id: 'github',
    url: VALUABLE_LINKS.GITHUB,
    icon: 'icon-github',
    i18nKey: LanguageKey.PAGE_GITHUB,
    newWindow: true
  },
  {
    id: RouteName.Lens,
    route: getPageRoute(RouteName.Lens),
    icon: 'icon-lens',
    i18nKey: LanguageKey.PAGE_LENS
  },
  {
    id: RouteName.About,
    route: getPageRoute(RouteName.About),
    icon: 'icon-swordsman',
    i18nKey: LanguageKey.PAGE_ABOUT
  },
  {
    id: RouteName.Guestbook,
    route: getPageRoute(RouteName.Guestbook),
    i18nKey: LanguageKey.PAGE_GUESTBOOK,
    icon: 'icon-comment'
  },
  {
    id: RouteName.App,
    route: getPageRoute(RouteName.App),
    imageIcon: getTargetCDNURL('/images/page-app/logo.png'),
    i18nKey: LanguageKey.PAGE_APP,
    divider: true
  },
  {
    id: 'nft',
    route: getPageRoute(RouteName.Nft),
    imageIcon: getTargetCDNURL('/images/third-party/opensea.svg'),
    i18nKey: LanguageKey.PAGE_NFT,
    disabledUppercase: true,
    hot: true,
    divider: true
  }*/
]
