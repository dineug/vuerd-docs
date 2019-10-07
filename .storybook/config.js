import {configure, addParameters, addDecorator} from '@storybook/vue'
import {withContexts} from '@storybook/addon-contexts/vue'
import {language} from '../src/js/contexts'

import Vue from 'vue'
import '../src/js/markedHighlight'
import MarkDown from '../src/components/MarkDown.vue'
import VuerdCore from 'vuerd-core'
import TuiEditor from 'vuerd-plugin-tui.editor'
import ERD, {Vuerd} from 'vuerd-plugin-erd'
import 'vuerd-core/dist/vuerd-core.css'
import 'vuerd-plugin-tui.editor/dist/vuerd-plugin-tui.editor.css'
import 'vuerd-plugin-erd/dist/vuerd-plugin-erd.css'

VuerdCore.use(TuiEditor)
VuerdCore.use(ERD)
Vue.use(VuerdCore)

Vue.component('MarkDown', MarkDown)
Vue.component('Vuerd', Vuerd)

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

