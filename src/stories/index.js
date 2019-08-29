import {storiesOf} from '@storybook/vue'
import Pure from '../components/Pure'

storiesOf('Demo', module)
  .add('pure', () => ({
    components: {Pure},
    template: '<Pure/>'
  }))
