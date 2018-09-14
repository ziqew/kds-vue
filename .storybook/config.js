import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuep from 'vuep';
import Playground from '../src/Playground.vue';
import 'vuep/dist/vuep.css';

Vue.component('playground', Playground);
Vue.component('Vuep', Vuep);
Vue.use(Vuex);


function loadStories() {
  require('../src/stories');

  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

