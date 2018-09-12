import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';
import Welcome from '../components/Welcome.vue';
import App from '../App.vue';

storiesOf('Welcome', module)
   .add('Welcome', () => ({
  render: h => h(Welcome, { props: { goToButton: linkTo('Button') } }),
}));

storiesOf('应用', module)
    .add('App', () => ({
  render: h => h(App),
}));

// Works if Vue.component is called in the config.js in .storybook
storiesOf('按钮', module)
  .add('rounded', 
     () => ({
    template: '<my-button :rounded="true">A Button with rounded edges</my-button>',
    }))
  .add('square', () => ({
    template: '<my-button :rounded="false">A Button with square edges</my-button>',
  }));
