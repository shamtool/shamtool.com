import{S as P,i as S,s as q,e as p,j as w,c as d,a as k,m as y,d as u,f as m,o as F,x as H,u as I,v as Q,Q as R,A as g,t as v,g as h,F as b,h as $,k as j,l as C,n as A,a3 as z}from"../chunks/vendor-3572d23b.js";import{C as B,t as M}from"../chunks/stores-70d0e2f9.js";function N(o){let t,n=o[1].stack+"",r;return{c(){t=p("pre"),r=v(n)},l(e){t=d(e,"PRE",{});var a=k(t);r=h(a,n),a.forEach(u)},m(e,a){m(e,t,a),b(t,r)},p(e,a){a&2&&n!==(n=e[1].stack+"")&&$(r,n)},d(e){e&&u(t)}}}function D(o){let t,n,r,e,a=o[1].message+"",c,f,_,l=o[2]&&o[1].stack&&N(o);return{c(){t=p("h1"),n=v(o[0]),r=j(),e=p("p"),c=v(a),f=j(),l&&l.c(),_=C()},l(s){t=d(s,"H1",{});var i=k(t);n=h(i,o[0]),i.forEach(u),r=A(s),e=d(s,"P",{});var E=k(e);c=h(E,a),E.forEach(u),f=A(s),l&&l.l(s),_=C()},m(s,i){m(s,t,i),b(t,n),m(s,r,i),m(s,e,i),b(e,c),m(s,f,i),l&&l.m(s,i),m(s,_,i)},p(s,i){i&1&&$(n,s[0]),i&2&&a!==(a=s[1].message+"")&&$(c,a),s[2]&&s[1].stack?l?l.p(s,i):(l=N(s),l.c(),l.m(_.parentNode,_)):l&&(l.d(1),l=null)},d(s){s&&u(t),s&&u(r),s&&u(e),s&&u(f),l&&l.d(s),s&&u(_)}}}function G(o){let t,n,r;return n=new B({props:{$$slots:{default:[D]},$$scope:{ctx:o}}}),{c(){t=p("main"),w(n.$$.fragment)},l(e){t=d(e,"MAIN",{});var a=k(t);y(n.$$.fragment,a),a.forEach(u)},m(e,a){m(e,t,a),F(n,t,null),r=!0},p(e,[a]){const c={};a&19&&(c.$$scope={dirty:a,ctx:e}),n.$set(c)},i(e){r||(H(n.$$.fragment,e),r=!0)},o(e){I(n.$$.fragment,e),r=!1},d(e){e&&u(t),Q(n)}}}function O({error:o,status:t}){return{props:{status:t,error:o}}}function J(o,t,n){let r;R(o,M,f=>n(3,r=f));let{status:e}=t,{error:a}=t;const c=!1;return g(()=>{z(M,r=`${e}: ${a.message}`,r)}),o.$$set=f=>{"status"in f&&n(0,e=f.status),"error"in f&&n(1,a=f.error)},[e,a,c]}class T extends P{constructor(t){super();S(this,t,J,G,q,{status:0,error:1})}}export{T as default,O as load};
