import {storiesOf} from '@storybook/vue'
import Pure from '../components/Pure'

storiesOf('demo', module)
  .add('pure', () => ({
    components: {Pure},
    template: '<Pure/>'
  }))
