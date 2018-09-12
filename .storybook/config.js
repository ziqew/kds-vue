import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuep from 'vuep';
import MyButton from '../src/components/Button.vue';
import Playground from '../src/components/Playground.vue';
import 'vuep/dist/vuep.css';

Vue.component('my-button', MyButton);
Vue.component('playground', Playground);
//Vue.use(Vuep /*, { codemirror options } */);
Vue.component('Vuep', Vuep);
Vue.use(Vuex);

setOptions({
  hierarchyRootSeparator: /\|/,
});


function loadStories() {
  require('../src/stories');

  const req = require.context('../src/stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

