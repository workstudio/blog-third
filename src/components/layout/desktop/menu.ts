import { RouteName, CategorySlug } from '/@/app/router'
import { getPageRoute, getCategoryFlowRoute } from '/@/transforms/route'
import { LanguageKey } from '../../../language'
import { VALUABLE_LINKS } from '/@/config/app.config'

export interface MenuItem {
  id: string
  icon: string
  i18nKey: LanguageKey
  divider?: boolean
  newWindow?: boolean
  hot?: boolean
  route?: string
  url?: string
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
    id: 'github',
    url: VALUABLE_LINKS.GITHUB,
    icon: 'icon-github',
    newWindow: true,
    i18nKey: LanguageKey.PAGE_GITHUB
  },*/
  /*{
    id: RouteName.Lens,
    route: getPageRoute(RouteName.Lens),
    icon: 'icon-lens',
    i18nKey: LanguageKey.PAGE_LENS
  },*/
  /*
  {
    id: RouteName.Job,
    route: getPageRoute(RouteName.Job),
    icon: 'icon-horse',
    i18nKey: LanguageKey.PAGE_JOB
  },
  */
  /*{
    id: RouteName.Freelancer,
    route: getPageRoute(RouteName.Freelancer),
    icon: 'icon-coin-s',
    i18nKey: LanguageKey.PAGE_FREELANCER
  },*/
  /*{
    id: RouteName.Guestbook,
    route: getPageRoute(RouteName.Guestbook),
    icon: 'icon-comment',
    i18nKey: LanguageKey.PAGE_GUESTBOOK
  },*/
  /*{
    id: RouteName.App,
    route: getPageRoute(RouteName.App),
    divider: true,
    icon: 'icon-app',
    i18nKey: LanguageKey.PAGE_APP
  },*/
]
