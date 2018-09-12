import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';


storiesOf('自定义|Vue Playground', module)
  // Works if Vue.component is called in the config.js in .storybook
  .add('vuep', () => ({
    template: '<vuep :template="code"></vuep>',
  }));  
