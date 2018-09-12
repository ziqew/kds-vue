import { storiesOf } from '@storybook/vue';
import Centered from '@storybook/addon-centered';

import MyButton from '../components/Button.vue';

storiesOf('插件|Centered', module)
  .addDecorator(Centered)
  .add('rounded', () => ({
    components: { MyButton },
    template: '<my-button :rounded="true">A Button with rounded edges</my-button>',
  }));
