const ctx = require.context('./', true, /\/components\/.*\.vue$/);
const ctxraw = require.context('!!raw-loader!./', true, /\/components\/.*\.vue$/);

const components = ctx.keys().map(ctx);
const components_source = ctxraw.keys().map(ctxraw);
console.log(components);
console.log(components_source);

export default {
    components,
    get
}

for(let i = 0; i < components.length; i++){
    components[i].source = components_source[i];
}

function get(name){
    for(let c of components){
        if(c.default.name == name){
            return c;
        }
    }
}
