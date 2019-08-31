import {storiesOf} from '@storybook/vue'
import Pure from '../components/Pure'

storiesOf('Demo', module)
  .add('default', () => ({
    components: {Pure},
    template: '<Pure/>'
  }))
