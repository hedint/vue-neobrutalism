import{d as S,b as p,v as c,x as A,y as L,c as T,a as d,n as g,s as v,z as $,o as z,A as f,l as I}from"./vue.esm-bundler-Bgq641VD.js";import{_ as k}from"./NeoButton-D7tk816K.js";import{I as V}from"./IconClose-B4iAdAU5.js";import"./use-bg-color-BDTrktI5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const M={class:"neo-dialog__content"},a=S({__name:"NeoDialog",props:{shape:{default:"rounded"}},emits:["close"],setup(e,{emit:r}){const x=e,B=r,q=p(()=>[`neo-dialog__container--shape-${x.shape}`]),i=c(!1),l=()=>{i.value||(i.value=!0,setTimeout(()=>{B("close")},300))},u=c("auto"),m=o=>{(o.key==="Escape"||o.keyCode===27)&&l()},E=p(()=>({"neo-dialog--close-animating":i.value}));return A(()=>{u.value=document.body.style.overflow||"auto",document.body.style.overflow="hidden",document.addEventListener("keydown",m)}),L(()=>{document.body.style.overflow=u.value,document.removeEventListener("keydown",m)}),(o,R)=>(z(),T("div",{class:v(["neo-dialog",E.value]),role:"dialog",onClick:$(l,["self"])},[d("div",{class:v(["neo-dialog__container",q.value])},[d("div",{class:"neo-dialog__close",onClick:l},[g(o.$slots,"close",{},()=>[f(k,{"is-icon":"",variant:"reverse",size:"large","aria-label":"Close dialog"},{default:I(()=>[f(V)]),_:1})])]),d("div",M,[g(o.$slots,"default")])],2)],2))}});a.__docgenInfo={exportName:"default",displayName:"NeoDialog",description:"",tags:{},props:[{name:"shape",required:!1,type:{name:"union",elements:[{name:'"rounded"'},{name:'"square"'}]},defaultValue:{func:!1,value:'"rounded"'}}],events:[{name:"close"}],slots:[{name:"close"},{name:"default"}],sourceFiles:["C:/work/experiments/vue-neobrutalism/src/components/dialog/vue/NeoDialog.vue"]};const H={title:"Components/NeoDialog",component:a,tags:["autodocs"],argTypes:{shape:{control:"select",options:["rounded","square"]}},render:e=>({components:{NeoDialog:a},setup:()=>({args:e}),template:'<div style="width: 500px; height: 500px"><NeoDialog v-bind="args"><div style="padding: 0 1rem"><h1>Title</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div></NeoDialog></div>'})},s={},t={args:{shape:"square"}},n={render:e=>({components:{NeoDialog:a,NeoButton:k},setup:()=>{const r=c(!1);return{args:e,isOpened:r}},template:`
      <div style="width: 300px; height: 300px;">
        <NeoButton @click="isOpened = true">Open</NeoButton>
        <NeoDialog v-if="isOpened" v-bind="args" @close="isOpened = false">
          <div><h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra
              interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div>
        </NeoDialog>
      </div>`})};var h,N,_;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(_=(N=s.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var y,C,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    shape: "square"
  }
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var O,b,w;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const J=["Rounded","Square","ButtonControlled"];export{n as ButtonControlled,s as Rounded,t as Square,J as __namedExportsOrder,H as default};
