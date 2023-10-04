import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

const title = createElement('h1', 'title', 'Коммьюніті')

const FORM_DATA = [
  {
    tabs: [
      {
        tag: 'button',
        classes: ['tabs__button'],
        title: 'База знань',
        isActive: false,
      },
      {
        tag: 'button',
        classes: ['tabs__button', 'tabs--active'],
        title: 'Інформація',
        isActive: true,
      },
    ],
    buttons: [
      {
        tag: 'button',
        classes: ['post__button'],
        title: `Перейти до ком'юніті у Телеграм`,
      },
    ],
  },
]

const POST_DATA = [
  {
    image: '/img/post__image.png',
    title: `Що таке база знань?`,
    info: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте
    и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит
    информацию, являющуюся результатом решения предыдущих задач.`,
  },
]

const Main = createElement('main', 'main')
const Tabs = createElement('div', 'tabs')
const Buttons = createElement('div', 'buttons')

FORM_DATA.forEach((dataItem) => {
  dataItem.tabs.forEach((tabItem) => {
    const tab = createElement(
      tabItem.tag,
      tabItem.classes.join(' '),
      tabItem.title,
    )

    Tabs.append(tab)
  })

  dataItem.buttons.forEach((buttonItem) => {
    const button = createElement(
      buttonItem.tag,
      buttonItem.classes.join(' '),
      buttonItem.title,
    )

    Buttons.append(button)
  })
})

Main.append(Tabs)

const postData = createElement('div', 'post__data')

POST_DATA.forEach((postItem) => {
  const image = createElement('img', 'post__image')
  image.src = postItem.image

  Main.append(image)

  postData.append(
    createElement('h3', 'post__header', postItem.title),
  )

  postData.append(
    createElement('p', 'post__info', postItem.info),
  )

  Main.append(postData)
})

Main.append(Buttons)

page.append(title)
page.append(header)
page.append(Main)
