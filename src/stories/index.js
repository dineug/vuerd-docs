import {storiesOf} from '@storybook/vue'
import Demo from '../components/Demo'

storiesOf('Live', module).addParameters({
    options: {
      showPanel: false,
    },
  })
  .add('Demo', () => ({
    components: {Demo},
    template: '<Demo/>'
  }))
