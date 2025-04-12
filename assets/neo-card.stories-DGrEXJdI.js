import{f as E}from"./index-fRFe1AOP.js";import{d as O,e as G,c as J,f as K,n as M,l as Q,p as U,j as W,o as X,g as Y,k as Z}from"./vue.esm-bundler-D7vmZgKA.js";import{u as ee}from"./use-bg-color-BOruhpce.js";const u=O({__name:"NeoCard",props:{shape:{default:"rounded"},bgColor:{default:"neo-white"},interactive:{type:Boolean,default:!1},component:{default:"div"},isDisabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:R}){const a=e,T=R,{bgClassName:z,bgStyle:H}=ee("neo-card",G(a,"bgColor")),$=J(()=>[z.value,`neo-card--shape-${a.shape}`,{"neo-card--disabled":a.isDisabled,"neo-card--interactive":a.interactive}]),j=r=>{if(a.isDisabled){r.preventDefault();return}T("click",r)};return(r,ae)=>(X(),K(W(r.component),{class:U(["neo-card",$.value]),style:M(Q(H)),onClick:j},{default:Y(()=>[Z(r.$slots,"default")]),_:3},8,["class","style"]))}});u.__docgenInfo={exportName:"default",displayName:"NeoCard",description:"",tags:{},props:[{name:"shape",required:!1,type:{name:"NeoShape"},defaultValue:{func:!1,value:'"rounded"'}},{name:"bgColor",required:!1,type:{name:"NeoBgColor"},defaultValue:{func:!1,value:'"neo-white"'}},{name:"interactive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"component",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"div"'}},{name:"isDisabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["C:/work/experiments/vue-neobrutalism/src/components/card/vue/NeoCard.vue"]};const te={title:"Components/NeoCard",component:u,tags:["autodocs"],args:{onClick:E()},render:e=>({components:{NeoCard:u},setup:()=>({args:e}),template:'<div style="width: 300px; height: 300px;"><NeoCard v-bind="args" @click="args.onClick"><div style="padding: 0 1rem"><h1>Title</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div></NeoCard></div>'})},s={},o={args:{shape:"pill"},render:e=>({components:{NeoCard:u},setup:()=>({args:e}),template:'<div style="width: 600px;"><NeoCard v-bind="args" @click="args.onClick"><div style="padding: 0 1rem 3rem;  text-align: center;"><h1>Title</h1><p style="width: 80%; margin: 0 auto;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div></NeoCard></div>'})},t={args:{shape:"square"}},n={args:{interactive:!0}},i={args:{isDisabled:!0}},c={args:{component:"a",href:"https://example.com",target:"_blank"}},l={args:{bgColor:"neo-red"}},d={args:{bgColor:"#FFAAAA"}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,C,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    shape: "pill"
  },
  render: args => ({
    components: {
      NeoCard
    },
    setup: () => ({
      args
    }),
    template: \`<div style="width: 600px;"><NeoCard v-bind="args" @click="args.onClick"><div style="padding: 0 1rem 3rem;  text-align: center;"><h1>Title</h1><p style="width: 80%; margin: 0 auto;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros diam, finibus vel eros eu, pharetra interdum enim. Nulla cursus dui sit amet orci consectetur consectetur. </p></div></NeoCard></div>\`
  })
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var h,b,N;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    shape: "square"
  }
}`,...(N=(b=t.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var y,k,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    interactive: true
  }
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var S,q,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var _,D,w;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    component: "a",
    // @ts-expect-error attributes
    href: "https://example.com",
    target: "_blank"
  }
}`,...(w=(D=c.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,F,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    bgColor: "neo-red"
  }
}`,...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var V,P,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    bgColor: "#FFAAAA"
  }
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const ne=["Rounded","Pill","Square","Interactive","Disabled","LinkComponent","PredefinedColor","CustomHexColor"];export{d as CustomHexColor,i as Disabled,n as Interactive,c as LinkComponent,o as Pill,l as PredefinedColor,s as Rounded,t as Square,ne as __namedExportsOrder,te as default};
