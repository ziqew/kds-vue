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
