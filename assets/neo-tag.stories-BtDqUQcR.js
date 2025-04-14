import{d as $,g as F,b as u,c as I,n as O,p as j,s as A,o as D}from"./vue.esm-bundler-Bgq641VD.js";import{u as J}from"./use-bg-color-BDTrktI5.js";const G=$({__name:"NeoTag",props:{bgColor:{default:"neo-white"},textColor:{default:"neo-black"}},setup(Y){const e=Y,{bgClassName:q,bgStyle:z}=J("neo-tag",F(e,"bgColor")),c=["neo-black","neo-white"],E=u(()=>[q.value,c.includes(e.textColor)&&`neo-tag--text-${e.textColor}`].filter(Boolean)),H=u(()=>({...z.value,...!c.includes(e.textColor)&&{color:e.textColor}}));return(V,K)=>(D(),I("span",{class:A(["neo-tag",E.value]),style:j(H.value)},[O(V.$slots,"default")],6))}});G.__docgenInfo={exportName:"default",displayName:"NeoTag",description:"",tags:{},props:[{name:"bgColor",required:!1,type:{name:"NeoBgColor"},defaultValue:{func:!1,value:'"neo-white"'}},{name:"textColor",required:!1,type:{name:"union",elements:[{name:'"neo-black"'},{name:'"neo-white"'},{name:"string"}]},defaultValue:{func:!1,value:'"neo-black"'}}],slots:[{name:"default"}],sourceFiles:["C:/work/experiments/vue-neobrutalism/src/components/tag/vue/NeoTag.vue"]};const P={title:"Components/NeoTag",component:G,tags:["autodocs"],argTypes:{bgColor:{control:"text"},textColor:{control:"text"},default:{control:"text"}}},o={args:{bgColor:"neo-white",textColor:"neo-black",default:"White / Black"}},a={args:{bgColor:"neo-black",textColor:"neo-white",default:"Black / White"}},r={args:{bgColor:"neo-red",textColor:"neo-black",default:"Red / White"}},t={args:{bgColor:"neo-yellow",textColor:"neo-black",default:"Yellow / Black"}},l={args:{bgColor:"neo-blue",textColor:"neo-black",default:"Blue / Black"}},s={args:{bgColor:"neo-green",textColor:"neo-black",default:"Green / Black"}},n={args:{bgColor:"#ffeb3b",textColor:"#1a237e",default:"Custom Colors"}};var d,m,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    bgColor: "neo-white",
    textColor: "neo-black",
    default: "White / Black"
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var i,p,C;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    bgColor: "neo-black",
    textColor: "neo-white",
    default: "Black / White"
  }
}`,...(C=(p=a.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var b,f,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    bgColor: "neo-red",
    textColor: "neo-black",
    default: "Red / White"
  }
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,h,B;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    bgColor: "neo-yellow",
    textColor: "neo-black",
    default: "Yellow / Black"
  }
}`,...(B=(h=t.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var W,w,y;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    bgColor: "neo-blue",
    textColor: "neo-black",
    default: "Blue / Black"
  }
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,v,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    bgColor: "neo-green",
    textColor: "neo-black",
    default: "Green / Black"
  }
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var _,T,R;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    bgColor: "#ffeb3b",
    textColor: "#1a237e",
    default: "Custom Colors"
  }
}`,...(R=(T=n.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const Q=["WhiteBlack","BlackWhite","RedWhite","YellowBlack","BlueWhite","GreenWhite","CustomHex"];export{a as BlackWhite,l as BlueWhite,n as CustomHex,s as GreenWhite,r as RedWhite,o as WhiteBlack,t as YellowBlack,Q as __namedExportsOrder,P as default};
