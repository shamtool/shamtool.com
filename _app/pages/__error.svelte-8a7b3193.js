import{S as P,i as S,s as w,k,e as p,j as y,a1 as A,d as m,n as h,c as d,a as v,m as F,f as c,o as H,x as I,u as M,v as R,t as $,g as E,F as C,h as b,l as q}from"../chunks/vendor-51df519d.js";import{C as z}from"../chunks/Container-22643366.js";function N(r){let a,o=r[1].stack+"",l;return{c(){a=p("pre"),l=$(o)},l(e){a=d(e,"PRE",{});var n=v(a);l=E(n,o),n.forEach(m)},m(e,n){c(e,a,n),C(a,l)},p(e,n){n&2&&o!==(o=e[1].stack+"")&&b(l,o)},d(e){e&&m(a)}}}function B(r){let a,o,l,e,n=r[1].message+"",t,u,_,i=r[2]&&r[1].stack&&N(r);return{c(){a=p("h1"),o=$(r[0]),l=k(),e=p("p"),t=$(n),u=k(),i&&i.c(),_=q()},l(s){a=d(s,"H1",{});var f=v(a);o=E(f,r[0]),f.forEach(m),l=h(s),e=d(s,"P",{});var j=v(e);t=E(j,n),j.forEach(m),u=h(s),i&&i.l(s),_=q()},m(s,f){c(s,a,f),C(a,o),c(s,l,f),c(s,e,f),C(e,t),c(s,u,f),i&&i.m(s,f),c(s,_,f)},p(s,f){f&1&&b(o,s[0]),f&2&&n!==(n=s[1].message+"")&&b(t,n),s[2]&&s[1].stack?i?i.p(s,f):(i=N(s),i.c(),i.m(_.parentNode,_)):i&&(i.d(1),i=null)},d(s){s&&m(a),s&&m(l),s&&m(e),s&&m(u),i&&i.d(s),s&&m(_)}}}function D(r){let a,o,l,e,n;return document.title=a=""+(r[0]+": "+r[1].message),e=new z({props:{$$slots:{default:[B]},$$scope:{ctx:r}}}),{c(){o=k(),l=p("main"),y(e.$$.fragment)},l(t){A('[data-svelte="svelte-4koq49"]',document.head).forEach(m),o=h(t),l=d(t,"MAIN",{});var _=v(l);F(e.$$.fragment,_),_.forEach(m)},m(t,u){c(t,o,u),c(t,l,u),H(e,l,null),n=!0},p(t,[u]){(!n||u&3)&&a!==(a=""+(t[0]+": "+t[1].message))&&(document.title=a);const _={};u&11&&(_.$$scope={dirty:u,ctx:t}),e.$set(_)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){t&&m(o),t&&m(l),R(e)}}}function L({error:r,status:a}){return{props:{status:a,error:r}}}function G(r,a,o){let{status:l}=a,{error:e}=a;const n=!1;return r.$$set=t=>{"status"in t&&o(0,l=t.status),"error"in t&&o(1,e=t.error)},[l,e,n]}class O extends P{constructor(a){super();S(this,a,G,D,w,{status:0,error:1})}}export{O as default,L as load};