import{_ as p}from"./NeoButton-BqAD1bcu.js";import{d as m,r as i}from"./vue.esm-bundler-D7vmZgKA.js";import"./use-bg-color-BOruhpce.js";const f=[{name:"--neo-primary-bg",type:"color",default:"#ffffff",value:"#ffffff"},{name:"--neo-primary-text",type:"color",default:"#000000",value:"#000000"},{name:"--neo-accent-bg",type:"color",default:"#fde047",value:"#fde047"},{name:"--neo-border-color",type:"color",default:"#000000",value:"#000000"},{name:"--neo-shadow-color",type:"color",default:"#000000",value:"#000000"},{name:"--neo-border-width",type:"text",default:"2px",value:"2px"},{name:"--neo-shadow-offset-x",type:"text",default:"4px",value:"4px"},{name:"--neo-shadow-offset-y",type:"text",default:"4px",value:"4px"},{name:"--neo-border-radius",type:"text",default:"6px",value:"6px"},{name:"--neo-padding-y",type:"text",default:"0.75rem",value:"0.75rem"},{name:"--neo-padding-x",type:"text",default:"1.5rem",value:"1.5rem"}],v={title:"Theme/Theme Editor"},t=()=>m({name:"ThemeEditorUI",setup(){const n=i(JSON.parse(JSON.stringify(f))),a=()=>{const e=document.documentElement;n.forEach(o=>{e.style.setProperty(o.name,o.value)})},d=()=>{n.forEach(e=>{e.value=e.default}),a()};return a(),{cssVars:n,applyCssVars:a,resetToDefault:d}},components:{NeoButton:p},template:`
      <div
        style="
          background-color: var(--neo-primary-bg);
          color: var(--neo-primary-text);
          padding: var(--neo-padding-y) var(--neo-padding-x);
          font-size: 1.2rem;
          font-family: monospace;
        "
      >
        <h2 style="margin-bottom: 1rem;">🎨 Theme Editor</h2>
        <table style="width: 100%; border-spacing: 0.5rem; margin-bottom: 1.5rem;">
          <thead>
            <tr>
              <th style="text-align: left;">Variable</th>
              <th style="text-align: left;">Type</th>
              <th style="text-align: left;">Default</th>
              <th style="text-align: left;">Current</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="v in cssVars" :key="v.name">
              <td>{{ v.name }}</td>
              <td>{{ v.type }}</td>
              <td>{{ v.default }}</td>
              <td>
                <input
                  :type="v.type"
                  v-model="v.value"
                  @input="applyCssVars"
                  style="width: 100px;"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <NeoButton @click="resetToDefault">Reset to default</NeoButton>
      </div>
    `});var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => defineComponent({
  name: "ThemeEditorUI",
  setup() {
    const cssVars = reactive<CssVar[]>(JSON.parse(JSON.stringify(variables)));
    const applyCssVars = () => {
      const root = document.documentElement;
      cssVars.forEach(v => {
        root.style.setProperty(v.name, v.value);
      });
    };
    const resetToDefault = () => {
      cssVars.forEach(v => {
        v.value = v.default;
      });
      applyCssVars();
    };

    // Apply initially
    applyCssVars();
    return {
      cssVars,
      applyCssVars,
      resetToDefault
    };
  },
  components: {
    NeoButton
  },
  template: \`
      <div
        style="
          background-color: var(--neo-primary-bg);
          color: var(--neo-primary-text);
          padding: var(--neo-padding-y) var(--neo-padding-x);
          font-size: 1.2rem;
          font-family: monospace;
        "
      >
        <h2 style="margin-bottom: 1rem;">🎨 Theme Editor</h2>
        <table style="width: 100%; border-spacing: 0.5rem; margin-bottom: 1.5rem;">
          <thead>
            <tr>
              <th style="text-align: left;">Variable</th>
              <th style="text-align: left;">Type</th>
              <th style="text-align: left;">Default</th>
              <th style="text-align: left;">Current</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="v in cssVars" :key="v.name">
              <td>{{ v.name }}</td>
              <td>{{ v.type }}</td>
              <td>{{ v.default }}</td>
              <td>
                <input
                  :type="v.type"
                  v-model="v.value"
                  @input="applyCssVars"
                  style="width: 100px;"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <NeoButton @click="resetToDefault">Reset to default</NeoButton>
      </div>
    \`
})`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const h=["ThemeEditor"];export{t as ThemeEditor,h as __namedExportsOrder,v as default};
