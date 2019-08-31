import {storiesOf} from '@storybook/vue'
import Demo from '../components/Demo'

storiesOf('Live', module)
  .add('Demo', () => ({
    components: {Demo},
    template: '<Demo/>'
  }))
