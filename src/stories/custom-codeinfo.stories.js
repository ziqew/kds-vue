import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';
import VueInfoAddon from 'storybook-addon-vue-info';

storiesOf('自定义|代码信息', module)
.addDecorator(VueInfoAddon)
.add('代码信息展示', 
     () => ({
    template: '<my-button :rounded="true">A Button with rounded edges</my-button>',
    }));