import{f as X}from"./index-fRFe1AOP.js";import{I as Y}from"./IconClose-B4iAdAU5.js";import{_ as d}from"./NeoButton-D7tk816K.js";import"./vue.esm-bundler-Bgq641VD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-bg-color-BDTrktI5.js";const oe={title:"Components/NeoButton",component:d,tags:["autodocs"],argTypes:{isDisabled:{control:"boolean"},default:{control:"text"},size:{control:"select",options:["medium","small","large"]},shape:{control:"select",options:["rounded","square","pill"]},variant:{control:"select",options:["primary","reverse","neutral","reverse-neutral","text"]}},args:{onClick:X()},render:m=>({components:{NeoButton:d},setup:()=>({args:m}),template:'<NeoButton v-bind="args" @click="args.onClick">{{ args.default }}</NeoButton>'})},e={args:{default:"Click Me",variant:"primary"}},r={args:{default:"🚀 Launch!",shape:"square"}},a={args:{default:"🚀 Launch!",shape:"pill"}},s={args:{isIcon:!0},render:m=>({components:{NeoButton:d,IconClose:Y},setup:()=>({args:m}),template:'<NeoButton v-bind="args"><IconClose /></NeoButton>'})},o={args:{default:"Click Me",variant:"reverse"}},t={args:{default:"Cannot Click",isDisabled:!0}},n={args:{default:"Click Me",variant:"neutral"}},c={args:{default:"Click Me",variant:"reverse-neutral"}},l={args:{default:"Click Me",variant:"text"}},i={args:{default:"Click Me",variant:"text",component:"a",href:"https://example.com",target:"_blank"}},u={args:{bgColor:"neo-red",default:"Click Me"}},p={args:{bgColor:"#FFAAAA",default:"Click Me"}};var g,C,f;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    default: "Click Me",
    variant: "primary"
  }
}`,...(f=(C=e.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var v,k,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    default: "🚀 Launch!",
    shape: "square"
  }
}`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var M,x,N;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    default: "🚀 Launch!",
    shape: "pill"
  }
}`,...(N=(x=a.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var S,h,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isIcon: true
  },
  render: args => ({
    components: {
      NeoButton,
      IconClose
    },
    setup: () => ({
      args
    }),
    template: \`<NeoButton v-bind="args"><IconClose /></NeoButton>\`
  })
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,P,I;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    default: "Click Me",
    variant: "reverse"
  }
}`,...(I=(P=o.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var A,_,L;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    default: "Cannot Click",
    isDisabled: true
  }
}`,...(L=(_=t.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var q,D,F;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    default: "Click Me",
    variant: "neutral"
  }
}`,...(F=(D=n.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var R,T,H;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    default: "Click Me",
    variant: "reverse-neutral"
  }
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var z,E,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    default: "Click Me",
    variant: "text"
  }
}`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var j,w,G;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    default: "Click Me",
    variant: "text",
    component: "a",
    // @ts-expect-error attributes
    href: "https://example.com",
    target: "_blank"
  }
}`,...(G=(w=i.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    bgColor: "neo-red",
    default: "Click Me"
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    bgColor: "#FFAAAA",
    default: "Click Me"
  }
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const te=["Primary","PrimarySquare","PrimaryPill","Icon","Reverse","Disabled","Neutral","ReverseNeutral","Text","LinkComponent","PredefinedColor","CustomHexColor"];export{p as CustomHexColor,t as Disabled,s as Icon,i as LinkComponent,n as Neutral,u as PredefinedColor,e as Primary,a as PrimaryPill,r as PrimarySquare,o as Reverse,c as ReverseNeutral,l as Text,te as __namedExportsOrder,oe as default};
