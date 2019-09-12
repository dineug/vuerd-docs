import {storiesOf} from '@storybook/vue'
import Demo from '../components/Demo.vue'

const stories = storiesOf('Demo|Live', module)

stories.add('vuerd-core', () => ({
  components: {Demo},
  template: `<Demo/>`,
}))


