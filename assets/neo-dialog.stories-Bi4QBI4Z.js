import{d as B,b as q,v as b,x as E,y as S,c as $,a as d,n as p,s as L,z as A,o as T,A as m,l as z}from"./vue.esm-bundler-Bgq641VD.js";import{_ as w}from"./NeoButton-D7tk816K.js";import{I}from"./IconClose-B4iAdAU5.js";import"./use-bg-color-BDTrktI5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"neo-dialog__content"},r=B({__name:"NeoDialog",props:{shape:{default:"rounded"}},emits:["close"],setup(e,{emit:i}){const C=e,l=i,k=q(()=>[`neo-dialog__container--shape-${C.shape}`]),c=b("auto"),u=o=>{(o.key==="Escape"||o.keyCode===27)&&l("close")};return E(()=>{c.value=document.body.style.overflow||"auto",document.body.style.overflow="hidden",document.addEventListener("keydown",u)}),S(()=>{document.body.style.overflow=c.value,document.removeEventListener("keydown",u)}),(o,s)=>(T(),$("div",{class:"neo-dialog",role:"dialog",onClick:s[1]||(s[1]=A(x=>l("close"),["self"]))},[d("div",{class:L(["neo-dialog__container",k.value])},[d("div",{class:"neo-dialog__close",onClick:s[0]||(s[0]=x=>l("close"))},[p(o.$slots,"close",{},()=>[m(w,{"is-icon":"",variant:"reverse",size:"large","aria-label":"Close dialog"},{default:z(()=>[m(I)]),_:1})])]),d("div",V,[p(o.$slots,"default")])],2)]))}});r.__docgenInfo={exportName:"default",displayName:"NeoDialog",description:"",tags:{},props:[{name:"shape",required:!1,type:{name:"union",elements:[{name:'"rounded"'},{name:'"square"'}]},defaultValue:{func:!1,value:'"rounded"'}}],events:[{name:"close"}],slots:[{name:"close"},{name:"default"}],sourceFiles:["C:/work/experiments/vue-neobrutalism/src/components/dialog/vue/NeoDialog.vue"]};const j={title:"Components/NeoDialog",component:r,tags:["autodocs"],argTypes:{shape:{control:"select",options:["rounded","square"]}},render:e=>({components:{NeoDialog:r},setup:()=>({args:e}),template:'<div style="width: 500px; height: 500px"><NeoDialog v-bind="args"><div style="padding: 0 1rem"><h1>Title</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div></NeoDialog></div>'})},t={},n={args:{shape:"square"}},a={render:e=>({components:{NeoDialog:r,NeoButton:w},setup:()=>{const i=b(!1);return{args:e,isOpened:i}},template:`
      <div style="width: 300px; height: 300px;">
        <NeoButton @click="isOpened = true">Open</NeoButton>
        <NeoDialog v-if="isOpened" v-bind="args" @close="isOpened = false">
          <div><h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra
              interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div>
        </NeoDialog>
      </div>`})};var g,v,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var N,h,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    shape: "square"
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var _,D,O;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      NeoDialog,
      NeoButton
    },
    setup: () => {
      const isOpened = ref(false);
      return {
        args,
        isOpened
      };
    },
    template: \`
      <div style="width: 300px; height: 300px;">
        <NeoButton @click="isOpened = true">Open</NeoButton>
        <NeoDialog v-if="isOpened" v-bind="args" @close="isOpened = false">
          <div><h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra
              interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div>
        </NeoDialog>
      </div>\`
  })
}`,...(O=(D=a.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const G=["Rounded","Square","ButtonControlled"];export{a as ButtonControlled,t as Rounded,n as Square,G as __namedExportsOrder,j as default};
