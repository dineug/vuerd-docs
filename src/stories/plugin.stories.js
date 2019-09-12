import {storiesOf} from '@storybook/vue'
import markdown from '../js/markdown'
import store from '../store'

const stories = storiesOf('Plugin|Command', module)

stories.add('editor', () => ({
  computed: {md: () => markdown[`./${store.state.locale}/editor.md`]},
  template: `<MarkDown :value="md"/>`,
}))

stories.add('theme', () => ({
  computed: {md: () => markdown[`./${store.state.locale}/theme.md`]},
  template: `<MarkDown :value="md"/>`,
}))
