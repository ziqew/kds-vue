<template>
  <div>
      <vuep :template="code" :scope="scope"></vuep>
  </div>
</template>
<script>
// framework imports
//import RawLoader from '../rawLoader'
import Vue$ from 'vue/dist/vue.min.js'
import Vuep from 'vuep'
import 'element-ui/lib/theme-chalk/index.css';
import 'vuep/dist/vuep.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue$.use(ElementUI);
const ElementUIComponents = {};
//const ctx = require.context('./', true, /\/components\/.*\.vue$/);
//const ctxraw = require.context('!!raw-loader!./', true, /\/components\/.*\.vue$/);
const ctxraw = require.context('!!raw-loader!./', true, /\/components\/button\/Button.vue/);
//const components = ctx.keys().map(ctx);
const components_source = ctxraw.keys().map(ctxraw);


Object.keys(ElementUI).forEach(k => {
  if (k[0].match(/[A-Z]/)) {
    ElementUIComponents[`el-${hypenlize(k).toLowerCase()}`] = ElementUI[k]
  }
});

const ElementUIScope = {Vue: Vue$, ElementUI, ElementUIComponents};
console.log('ElementUI>>>>>>>>',ElementUI);
console.log('ElementUIComponents>>>>>>>>',ElementUIComponents);

// for(let i = 0; i < components.length; i++){
//     components[i].source = components_source[i];
// }

// function get(name){
//     for(let c of components){
//         if(c.default.name == name){
//             //c.default.components=ElementUIComponents;
//             return c;
//         }
//     }
// }



// components imports
export default {
  name: 'playground',
  components: {
    Vuep
  },
  data () {
    return {
      scope: ElementUIScope,
      code: ''
    }
  },
  props:{
      type:''
  },
  created () {
      let type = this.type;
      let cp= components_source[0];
      //cp.default.components=ElementUIComponents;
      this.code= cp;
      console.log("code>>>",this.code);
      // let sourceArray = get(type).source.split('#');
      // this.code = sourceArray[0].substring(0,sourceArray[0].length - 1) + 'ElementUIComponents' + sourceArray[1].substring(1,sourceArray[1].length);
      // console.log("code>>>",this.code);
  }
}
// private helpers
function hypenlize (s) {
  return s.replace(/([A-Z])/g, function (_, a) {
      return `-${a.toLowerCase()}`
  }).slice(1)
}
</script>

