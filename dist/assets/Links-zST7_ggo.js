import{r as i,j as t}from"./index-M007Pa95.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(...r)=>r.filter((e,o,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:s="",children:a,iconNode:d,...u},h)=>i.createElement("svg",{ref:h,...k,width:e,height:e,stroke:r,strokeWidth:n?Number(o)*24/Number(e):o,className:l("lucide",s),...u},[...d.map(([b,f])=>i.createElement(b,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(r,e)=>{const o=i.forwardRef(({className:n,...s},a)=>i.createElement(x,{ref:a,iconNode:e,className:l(`lucide-${m(r)}`,n),...s}));return o.displayName=`${r}`,o};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=c("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=c("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=c("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);function v(){const r=i.useRef(),e=i.useRef(),o=i.useRef(),n=a=>{a.current.style.backgroundColor="gray"},s=a=>{a.current.style.backgroundColor="#75bcff"};return t.jsxs("div",{id:"links",children:[t.jsx("h2",{children:"Get in touch"}),t.jsxs("div",{className:"divider",children:[t.jsx("a",{href:"https://github.com/carroyo03",target:"_blank",rel:"noreferrer",children:t.jsx("button",{ref:r,onMouseOver:()=>n(r),onMouseOut:()=>s(r),"aria-label":"GitHub",id:"GitHub",className:"btn btn-primary rounded-2 border border-2",children:t.jsx(g,{})})}),t.jsx("a",{href:"https://www.linkedin.com/in/carlosarroyolorenzo",target:"_blank",rel:"noreferrer",children:t.jsx("button",{ref:e,onMouseOver:()=>n(e),onMouseOut:()=>s(e),"aria-label":"LinkedIn",id:"LinkedIn",className:"btn btn-primary rounded-2 border border-2",children:t.jsx(y,{})})}),t.jsx("a",{href:"mailto:cgarroyolorenzo@gmail.com",target:"_blank",rel:"noreferrer",children:t.jsx("button",{ref:o,onMouseOver:()=>n(o),onMouseOut:()=>s(o),"aria-label":"Mail",id:"Mail",className:"btn btn-primary rounded-2 border border-2",children:t.jsx(p,{})})})]})]})}export{v as default};
