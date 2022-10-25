import { HomePage } from '../support/pages/home_Page'
import { PageFactory } from '../support/pages/page_Factory'
import { NAVIGATION_ITEMS, PAGES } from '../support/types/types'

const homePage: HomePage = PageFactory.getPage(PAGES.HOME) as HomePage

describe('Onliner navigation bar tests', () => {

    beforeEach(() => {
        homePage.visitPage()
    })

    const pageTitlesMap = {
        'Catalog': 'Все суперцены!',
        'Auto': 'Автобарахолка',
        'Realt': 'Продажа',
        'Tasks': 'Заказы',
        'Baraholka': 'Барахолка',
    }

    for (const pageTitle in pageTitlesMap) {
        it(`Should navigate to the "${pageTitle}" page`, () => {
            const key = pageTitle.toUpperCase() as keyof typeof NAVIGATION_ITEMS
            homePage.navigationBar.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS[key])
            homePage.waitTillPageHeaderIncludeText(pageTitle, pageTitlesMap[pageTitle as keyof typeof pageTitlesMap])
        })
    }
})