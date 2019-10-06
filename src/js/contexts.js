import store from '../store'

export const language = [
  {
    icon: 'globe',
    title: 'Languages',
    components: [
      {
        name: 'Languages.Provider',
        props: ['locale'],
        watch: {
          locale(value) {
            store.commit('setLocale', value)
          },
        },
        template: `<div><slot /></div>`,
      },
    ],
    params: [
      {
        name: 'English',
        props: {
          locale: 'en',
        },
        default: true,
      },
      {
        name: '한국어',
        props: {
          locale: 'ko',
        },
      },
    ],
    options: {
      cancelable: false,
    },
  },
]
