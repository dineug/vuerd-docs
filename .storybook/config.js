import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'
import VuerdCore from 'vuerd-core'
import TuiEditor from 'vuerd-plugin-tui.editor'
import 'vuerd-core/dist/vuerd-core.css'
import 'vuerd-plugin-tui.editor/dist/vuerd-plugin-tui.editor.css'
VuerdCore.use(TuiEditor)
Vue.use(VuerdCore)
Vue.use(Vuex)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories')
}

configure(loadStories, module)
