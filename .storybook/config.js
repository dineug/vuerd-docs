import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'
import VuerdCore from 'vuerd-core'
import 'vuerd-core/dist/vuerd-core.css'

Vue.use(Vuex)
Vue.use(VuerdCore)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories')
}

configure(loadStories, module)
