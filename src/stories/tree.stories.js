import { storiesOf } from '@storybook/vue';
import Playground from '../Playground.vue';

storiesOf('树', module)
    .add('Tree', () => ({
        render(h) {
            return h(Playground, { props: { type: 'tree' } });
        },
    }));
