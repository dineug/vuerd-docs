import {storiesOf} from '@storybook/vue'
import markdown from '../js/markdown'
import store from '../store'

const stories = storiesOf('Component|Structure', module)

stories.add('vuerd-core', () => ({
  computed: {md: () => markdown[`${store.state.locale}/vuerd-core.md`]},
  template: `<MarkDown :value="md"/>`,
}))
