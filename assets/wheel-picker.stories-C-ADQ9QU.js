import{d as g,z as f,c as k,y as t,F as y,A as N,n as P,o as n,B as _}from"./vue.esm-bundler-D7vmZgKA.js";const v=40,a=g({__name:"NeoWheelPicker",props:{items:{},shownCount:{default:5}},setup(r){const l=r,i=f(null),p=k(()=>({height:`${v*l.shownCount}px`})),m=()=>{};return(u,W)=>(n(),t("div",{ref_key:"container",ref:i,class:"wheel-picker",style:P(p.value),onScroll:m},[(n(!0),t(y,null,N(u.items,(d,h)=>(n(),t("div",{key:h,class:"wheel-item"},_(d),1))),128))],36))}});a.__docgenInfo={exportName:"default",displayName:"NeoWheelPicker",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"shownCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],sourceFiles:["C:/work/experiments/vue-neobrutalism/src/components/wheel-picker/vue/NeoWheelPicker.vue"]};const C={title:"Components/NeoWheelPicker",component:a,tags:["autodocs"]},e={args:{items:["Apple","Banana","Orange","Mango","Peach","Grape"]},render:r=>({components:{NeoWheelPicker:a},setup:()=>({args:r}),template:"<NeoWheelPicker v-bind='args' />"})};var s,o,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    items: ["Apple", "Banana", "Orange", "Mango", "Peach", "Grape"]
  },
  render: args => {
    return {
      components: {
        NeoWheelPicker
      },
      setup: () => ({
        args
      }),
      template: "<NeoWheelPicker v-bind='args' />"
    };
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,C as default};
