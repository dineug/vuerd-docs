import {configure, addParameters, addDecorator} from '@storybook/vue'
import {withContexts} from '@storybook/addon-contexts/vue'
import {language} from '../src/js/contexts'

import Vue from 'vue'
import '../src/js/vuerd-core'
import '../src/js/markedHighlight'
import MarkDown from '../src/components/MarkDown.vue'

Vue.component('MarkDown', MarkDown)

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    showPanel: false,
  },
})

addDecorator(withContexts(language))

configure(loadStories, module)

