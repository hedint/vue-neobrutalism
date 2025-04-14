import{d as P,B as w,C as A,u as R,b as T,D as $,E as F,c as O,m as U,q as j,o as z}from"./vue.esm-bundler-Bgq641VD.js";const G=["disabled"],l=P({inheritAttrs:!1,__name:"NeoInput",props:w({type:{default:"text"},placeholder:{default:""},isDisabled:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},isSuccess:{type:Boolean,default:!1},shape:{default:"rounded"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const s=e,c=A(e,"modelValue"),B=R(),C=T(()=>[`neo-input--shape-${s.shape}`,{"neo-input--disabled":s.isDisabled,"neo-input--error":s.isError,"neo-input--success":s.isSuccess}]);return(M,p)=>$((z(),O("input",U(j(B),{"onUpdate:modelValue":p[0]||(p[0]=k=>c.value=k),disabled:M.isDisabled,class:["neo-input",C.value]}),null,16,G)),[[F,c.value]])}});l.__docgenInfo={exportName:"default",displayName:"NeoInput",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"InputType"},defaultValue:{func:!1,value:'"text"'}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"isDisabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isError",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isSuccess",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shape",required:!0,type:{name:"NeoShape"},defaultValue:{func:!1,value:'"rounded"'}}],sourceFiles:["C:/work/experiments/vue-neobrutalism/src/components/input/vue/NeoInput.vue"]};const J={title:"Components/NeoInput",component:l,tags:["autodocs"],argTypes:{isDisabled:{control:"boolean"},isError:{control:"boolean"},placeholder:{control:"text"}},render:e=>({components:{NeoInput:l},setup:()=>({args:e}),template:"<NeoInput v-bind='args' />"})},a={},r={args:{shape:"pill"}},o={args:{shape:"square"}},t={args:{isDisabled:!0}},n={args:{isError:!0}},u={args:{isSuccess:!0}};var d,i,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    shape: "pill"
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,v,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    shape: "square"
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,D,q;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(q=(D=t.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var E,N,V;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isError: true
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var I,x,_;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isSuccess: true
  }
}`,...(_=(x=u.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const K=["Rounded","Pill","Square","Disabled","Error","Success"];export{t as Disabled,n as Error,r as Pill,a as Rounded,o as Square,u as Success,K as __namedExportsOrder,J as default};
