import{S as z,i as F,s as G,e as k,w as J,k as S,c as y,a as E,x as K,d as p,m as q,b as g,g as C,H as D,y as O,a6 as L,a7 as M,a8 as Q,q as v,J as R,o as I,B as P,n as U,p as X,l as A,K as W,I as j,a4 as Y,X as Z,aa as $,ab as x,ac as ee,ad as se}from"./vendor-6b4ee472.js";function N(i){let a,s,e,t,r,f,n,u,d,w,h;t=new j({props:{src:i[4][i[2]].icon,class:"h-7 w-7 mr-4 "+i[4][i[2]].text,ariaHidden:!0}});const _=i[7].default,c=Y(_,i,i[6],null);let o=i[0]&&T(i);return{c(){a=k("div"),s=k("div"),e=k("div"),J(t.$$.fragment),r=S(),f=k("div"),n=k("p"),c&&c.c(),d=S(),o&&o.c(),this.h()},l(l){a=y(l,"DIV",{class:!0,role:!0});var m=E(a);s=y(m,"DIV",{class:!0});var b=E(s);e=y(b,"DIV",{});var V=E(e);K(t.$$.fragment,V),V.forEach(p),r=q(b),f=y(b,"DIV",{class:!0});var B=E(f);n=y(B,"P",{class:!0});var H=E(n);c&&c.l(H),H.forEach(p),B.forEach(p),d=q(b),o&&o.l(b),b.forEach(p),m.forEach(p),this.h()},h(){g(n,"class",u="text-sm "+i[4][i[2]].text),g(f,"class","flex-1"),g(s,"class","flex items-center"),g(a,"class",w="rounded px-4 py-3 "+i[4][i[2]].bg+" "+i[4][i[2]].text),g(a,"role","alert")},m(l,m){C(l,a,m),D(a,s),D(s,e),O(t,e,null),D(s,r),D(s,f),D(f,n),c&&c.m(n,null),D(s,d),o&&o.m(s,null),h=!0},p(l,m){const b={};m&4&&(b.src=l[4][l[2]].icon),m&4&&(b.class="h-7 w-7 mr-4 "+l[4][l[2]].text),t.$set(b),c&&c.p&&(!h||m&64)&&L(c,_,l,l[6],h?Q(_,l[6],m,null):M(l[6]),null),(!h||m&4&&u!==(u="text-sm "+l[4][l[2]].text))&&g(n,"class",u),l[0]?o?(o.p(l,m),m&1&&v(o,1)):(o=T(l),o.c(),v(o,1),o.m(s,null)):o&&(U(),I(o,1,1,()=>{o=null}),X()),(!h||m&4&&w!==(w="rounded px-4 py-3 "+l[4][l[2]].bg+" "+l[4][l[2]].text))&&g(a,"class",w)},i(l){h||(v(t.$$.fragment,l),v(c,l),v(o),h=!0)},o(l){I(t.$$.fragment,l),I(c,l),I(o),h=!1},d(l){l&&p(a),P(t),c&&c.d(l),o&&o.d()}}}function T(i){let a,s,e,t,r,f;return e=new j({props:{src:Z,class:"h-4 w-4 "+i[4][i[2]].text,ariaHidden:!0}}),{c(){a=k("div"),s=k("button"),J(e.$$.fragment),this.h()},l(n){a=y(n,"DIV",{});var u=E(a);s=y(u,"BUTTON",{type:!0,"aria-label":!0});var d=E(s);K(e.$$.fragment,d),d.forEach(p),u.forEach(p),this.h()},h(){g(s,"type","button"),g(s,"aria-label","Close")},m(n,u){C(n,a,u),D(a,s),O(e,s,null),t=!0,r||(f=R(s,"click",i[5]),r=!0)},p(n,u){const d={};u&4&&(d.class="h-4 w-4 "+n[4][n[2]].text),e.$set(d)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){n&&p(a),P(e),r=!1,f()}}}function te(i){let a,s,e=(!i[1]||i[3])&&N(i);return{c(){e&&e.c(),a=A()},l(t){e&&e.l(t),a=A()},m(t,r){e&&e.m(t,r),C(t,a,r),s=!0},p(t,[r]){!t[1]||t[3]?e?(e.p(t,r),r&10&&v(e,1)):(e=N(t),e.c(),v(e,1),e.m(a.parentNode,a)):e&&(U(),I(e,1,1,()=>{e=null}),X())},i(t){s||(v(e),s=!0)},o(t){I(e),s=!1},d(t){e&&e.d(t),t&&p(a)}}}function ae(i,a,s){let{$$slots:e={},$$scope:t}=a,{dismissable:r=!0}=a,{autoDismiss:f=!0}=a,{type:n="info"}=a;const u=W(),d={info:{icon:$,bg:"bg-blue-50",text:"text-blue-900"},success:{icon:x,bg:"bg-green-50",text:"text-green-900"},warn:{icon:ee,bg:"bg-yellow-50",text:"text-yellow-900"},error:{icon:se,bg:"bg-red-50",text:"text-red-900"}};let w=!0;function h(){!r||(f&&s(3,w=!1),u("dismiss"))}return i.$$set=_=>{"dismissable"in _&&s(0,r=_.dismissable),"autoDismiss"in _&&s(1,f=_.autoDismiss),"type"in _&&s(2,n=_.type),"$$scope"in _&&s(6,t=_.$$scope)},[r,f,n,w,d,h,t,e]}class ie extends z{constructor(a){super();F(this,a,ae,te,G,{dismissable:0,autoDismiss:1,type:2})}}export{ie as A};
