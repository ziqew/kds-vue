import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';
import VueInfoAddon from 'storybook-addon-vue-info';
import Playground from '../components/Playground.vue';

storiesOf('自定义|playground 按钮', module)
.add('playground 按钮', 
     () => ({
    template: '<playground></playground>'
    }));