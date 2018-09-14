import { storiesOf } from '@storybook/vue';
import Playground from '../Playground.vue';

storiesOf('按钮', module)
    .add('Button', () => ({
        render(h) {
            return h(Playground, { props: { type: 'button' } });
        },
    }));
