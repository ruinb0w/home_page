import{r as w,d as b,u as y,c as g,a as f,o as c,b as i,e as n,f as l,n as _,F as k,g as M,h as $,w as H,t as S,i as r,_ as p,p as x,j as I,k as d}from"./index-Ca4wH3EQ.js";const v=[{title:"Home",path:"/home",color:"#3b8aab"},{title:"About",path:"/about",color:"#f4b33b"},{title:"Collections",path:"/collections",color:"#c73632"},{title:"Blog",path:"/blog",color:"#3b8475"},{title:"Note",path:"/note",color:"#71456c"},{title:"Projects",path:"/projects",color:"#eb4a55"}];function P(e,o){return t=>o.path==t.path||e.value==t.path?`background:${t.color}`:""}function B(){const e=w(null);function o(a){e.value=a}function t(){e.value=null}return{hoverTabPath:e,setHoverTabPath:o,clearHoverTabPath:t}}const C={class:"main-header"},V={class:"title"},N={class:"tab-list"},j=b({__name:"MainHeader",setup(e){const o=y(),t=g(()=>{var u;return(u=v.find(h=>h.path===o.path))==null?void 0:u.color}),a=B(),m=P(a.hoverTabPath,o);return(u,h)=>{const T=f("router-link");return c(),i("div",C,[n("div",V,[l(" ruinb "),n("div",{class:"bold",style:_(`color:${t.value}`)},"0",4),l(" w ")]),n("div",N,[(c(!0),i(k,null,M(r(v),s=>(c(),$(T,{class:"tab no-decoration",key:s.path,style:_(r(m)(s)),to:s.path,onMouseenter:J=>r(a).setHoverTabPath(s.path),onMouseleave:r(a).clearHoverTabPath},{default:H(()=>[l(S(s.title),1)]),_:2},1032,["style","to","onMouseenter","onMouseleave"]))),128))]),n("div",{class:"seperator",style:_(`background:${t.value}`)},null,4)])}}}),F=p(j,[["__scopeId","data-v-0d5d4e08"]]),A={},L=e=>(x("data-v-c45d303e"),e=e(),I(),e),z={class:"main-footer"},D=L(()=>n("div",{class:"copy-left"},"©️",-1));function E(e,o){return c(),i("div",z,[D,l(" ruinb0w ")])}const G=p(A,[["render",E],["__scopeId","data-v-c45d303e"]]),R={class:"main-view"},q=b({__name:"MainView",setup(e){return(o,t)=>{const a=f("router-view");return c(),i("div",R,[d(F,{class:"m-h"}),d(a,{class:"container"}),d(G,{class:"m-f"})])}}}),O=p(q,[["__scopeId","data-v-a2831427"]]);export{O as default};
